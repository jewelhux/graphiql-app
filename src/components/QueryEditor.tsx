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
  const [response, setResponse] = useState<string>('');
  const [value, setValue] = useState(`query {}`);
  const [variables, setVariables] = useState(`{}`);

  useEffect(() => {
    const fetchSchema = async () => {
      const remoteExecutor = buildHTTPExecutor({ endpoint: url });

      const postsSubschema = {
        schema: await schemaFromExecutor(remoteExecutor),
        executor: remoteExecutor,
      };
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
    if (data) setResponse(data);
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
          <iframe
            style={{ width: '100%', height: '800px' }}
            src="/docs/index.html"
            title="GraphQL documentation"
          ></iframe>
          <div>variables</div>
          <CodeMirror value={variables} height="100px" width="100%" onChange={onChangeVariables} />
          <div>header</div>
          <CodeMirror value={headerGraphqlRequest} height="100px" width="100%" readOnly={true} />
          <button onClick={handleSendRequest}>Send request</button>
          <CodeMirror
            value={response ? JSON.stringify(response, null, 2) : ''}
            height="300px"
            width="100%"
            readOnly={true}
          />
        </>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
}

export default QueryEditor;
