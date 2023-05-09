import React, { useEffect, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { graphql } from 'cm6-graphql';
import { buildHTTPExecutor } from '@graphql-tools/executor-http';
import { schemaFromExecutor } from '@graphql-tools/wrap';
import { GraphQLSchema } from 'graphql/type';

const url = 'https://rickandmortyapi.com/graphql';
const headerGraphqlRequest = `{'Content-type': 'application/json'}`;

function QueryEditor() {
  const [myGraphQLSchema, setMyGraphQLSchema] = useState<GraphQLSchema | null>(null);
  const [res, setRes] = useState<string>('');
  const [value, setValue] = useState(`query {}`);
  const [variables, setVariables] = useState(`{}`);

  useEffect(() => {
    const fetchSchema = async () => {
      const remoteExecutor = buildHTTPExecutor({
        endpoint: url,
      });

      const postsSubschema = {
        schema: await schemaFromExecutor(remoteExecutor),
        executor: remoteExecutor,
      };

      const fields = postsSubschema.schema.getQueryType()?.getFields();
      const result = JSON.parse(JSON.stringify(fields));
      alert(result);
      setMyGraphQLSchema(postsSubschema.schema);
    };
    fetchSchema();
  }, []);

  const onChangeValue = React.useCallback((value: string) => {
    setValue(value);
  }, []);

  const onChangeVariables = React.useCallback((value: string) => {
    setVariables(value);
  }, []);

  const makeRequest = async (query: string): Promise<string> => {
    const reguestBody = {
      query,
      variables: JSON.parse(variables),
    };

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(reguestBody),
    });
    return await res.json();
  };

  const handleSendRequest = async () => {
    const data = await makeRequest(value);
    if (data) setRes(data);
  };

  return (
    <>
      {myGraphQLSchema ? (
        <>
          <CodeMirror
            value={value}
            height="200px"
            width="100%"
            extensions={[graphql(myGraphQLSchema)]}
            onChange={onChangeValue}
          />
          <div>variables</div>
          <CodeMirror value={variables} height="100px" width="100%" onChange={onChangeVariables} />
          <div>header</div>
          <CodeMirror value={headerGraphqlRequest} height="100px" width="100%" readOnly={true} />
          <button onClick={handleSendRequest}>Send request</button>
          <ResponseViewer response={res} />
        </>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
}

interface ResponseViewerProps {
  response: string;
}

const ResponseViewer: React.FC<ResponseViewerProps> = ({ response }) => {
  return (
    <CodeMirror
      value={response ? JSON.stringify(response, null, 2) : ''}
      height="300px"
      width="100%"
      readOnly={true}
    />
  );
};

export { ResponseViewer };

export default QueryEditor;
