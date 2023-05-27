import React, { useEffect, useState, lazy, Suspense } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { graphql } from 'cm6-graphql';
import { buildHTTPExecutor } from '@graphql-tools/executor-http';
import { schemaFromExecutor } from '@graphql-tools/wrap';
import { GraphQLSchema } from 'graphql/type';
import { Col, Row, Button, Space, Tooltip, Tabs } from 'antd';
import { BookTwoTone, CaretRightFilled } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import Loader from './Loader';
import { RootState, useAppDispatch, useAppSelector } from '@/store/store';
import { setQueryState } from '@/store/features/userSliceQuery';
import { URL_GRAPH_GL } from '@/utils/const';
import { setVariablesState } from '@/store/features/userSliceVariables';

const headerGraphqlRequest = `{'Content-type': 'application/json'}`;
const Docs = lazy(() => import('./Docs'));

function QueryEditor() {
  const [myGraphQLSchema, setMyGraphQLSchema] = useState<GraphQLSchema | null>(null);
  const [response, setResponse] = useState<string>('');
  const [err, setErr] = useState<boolean>(false);
  const [value, setValue] = useState('');
  const [variables, setVariables] = useState('');
  const [isDocsVisible, setIsDocsVisible] = useState<boolean>(false);
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const queryState = useAppSelector((state: RootState) => state.query.query);
  const variablesState = useAppSelector((state: RootState) => state.variables.variables);

  useEffect(() => {
    setValue(queryState);
  }, [queryState]);

  useEffect(() => {
    setVariables(variablesState);
  }, [variablesState]);

  useEffect(() => {
    const fetchSchema = async () => {
      const remoteExecutor = buildHTTPExecutor({ endpoint: URL_GRAPH_GL });

      const postsSubschema = {
        schema: await schemaFromExecutor(remoteExecutor),
        executor: remoteExecutor,
      };
      setMyGraphQLSchema(postsSubschema.schema);
    };
    fetchSchema();
  }, []);

  const onChangeValue = React.useCallback(
    (value: string) => {
      setValue(value);
      dispatch(setQueryState({ query: value }));
    },
    [dispatch]
  );

  const onChangeVariables = React.useCallback(
    (value: string) => {
      setVariables(value);
      dispatch(setVariablesState({ variables: value }));
    },
    [dispatch]
  );

  const makeRequest = async (query: string): Promise<string> => {
    const requestBody = {
      query,
      variables: JSON.parse(variables),
    };

    const res = await fetch(URL_GRAPH_GL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    const data = await res.json();
    if (data.errors) {
      setErr(true);
    } else {
      setErr(false);
    }

    return data;
  };

  const handleDocsClick = () => {
    setIsDocsVisible(!isDocsVisible);
  };

  const handleSendRequest = async () => {
    const data = await makeRequest(value);
    if (data) setResponse(data);
  };

  const tabsItems = [
    {
      key: '1',
      label: t('graphiql.variables'),
      children: (
        <CodeMirror
          value={variables}
          height="100px"
          width="100%"
          onChange={onChangeVariables}
          className="editor-visible"
        />
      ),
    },
    {
      key: '2',
      label: t('graphiql.headers'),
      children: (
        <CodeMirror
          value={headerGraphqlRequest}
          height="100px"
          width="100%"
          readOnly={true}
          className="editor-visible"
        />
      ),
    },
  ];

  return (
    <>
      {myGraphQLSchema ? (
        <>
          <Row gutter={24} className="editor-line">
            <Col>
              <Space className="editor-controls">
                <Row>
                  <Tooltip title={t('graphiql.query') || 'Execute query'}>
                    <Button
                      type="primary"
                      icon={<CaretRightFilled />}
                      onClick={handleSendRequest}
                    ></Button>
                  </Tooltip>
                </Row>
                <Row>
                  <Tooltip title={t('graphiql.docs') || 'Docs'} placement="bottom">
                    <Button
                      type="default"
                      icon={<BookTwoTone />}
                      onClick={handleDocsClick}
                    ></Button>
                  </Tooltip>
                </Row>
              </Space>
            </Col>

            <Row gutter={[24, 24]} className="editor-layout">
              <Col lg={isDocsVisible ? 8 : 0} xs={24}>
                <Suspense fallback={<Loader />}>
                  {err ? (
                    <p>Sorry server return Error Doc</p>
                  ) : (
                    <Docs class={isDocsVisible ? 'docs-visible' : 'docs-hidden'} />
                  )}
                </Suspense>
              </Col>
              <Col lg={isDocsVisible ? 8 : 12} xs={24}>
                <CodeMirror
                  value={value}
                  height="200px"
                  width="100%"
                  extensions={[graphql(myGraphQLSchema)]}
                  onChange={onChangeValue}
                />
                <Tabs centered items={tabsItems} />
              </Col>

              <Col lg={isDocsVisible ? 8 : 12} xs={24}>
                <CodeMirror
                  value={response ? JSON.stringify(response, null, 2) : ''}
                  readOnly={true}
                />
              </Col>
            </Row>
          </Row>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default QueryEditor;
