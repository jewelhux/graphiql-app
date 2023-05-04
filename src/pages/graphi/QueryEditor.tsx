import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

const url = 'https://rickandmortyapi.com/graphql';

function QueryEditor() {
  const [res, setRes] = useState<string>('');
  const [value, setValue] = useState(`query {
    characters(page: 2, filter: { name: "rick" }) {
      info {
        count
      }
      results {
        name
      }
    }
    location(id: 1) {
      id
    }
    episodesByIds(ids: [1, 2]) {
      id
    }
  }`);

  const onChange = React.useCallback((value: string) => {
    setValue(value);
  }, []);

  const makeRequest = async (query: unknown): Promise<string> => {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });
    return await res.json();
  };

  const handleSendRequest = async () => {
    const data = await makeRequest(value);
    if (data) setRes(data);
  };

  return (
    <>
      <CodeMirror
        value={value}
        height="200px"
        width="100%"
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
      />
      <button onClick={handleSendRequest}>Send request</button>
      <ResponseViewer response={res} />
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
