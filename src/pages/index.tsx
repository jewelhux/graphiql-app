import Head from 'next/head';
import { useRouter } from 'next/router';
import { buildHTTPExecutor } from '@graphql-tools/executor-http';
import { schemaFromExecutor } from '@graphql-tools/wrap';
import { Typography } from 'antd';
import Astronaut from '@/components/Astronaut';

const { Title } = Typography;

const Auth = () => {
  const { pathname } = useRouter();

  const remoteExecutor = buildHTTPExecutor({
    endpoint: 'https://rickandmortyapi.com/graphql',
  });

  (async () => {
    const postsSubschema = {
      schema: await schemaFromExecutor(remoteExecutor),
      executor: remoteExecutor,
    };

    const fields = postsSubschema.schema.getQueryType()?.getFields();
    const result = JSON.parse(JSON.stringify(fields));
    alert(result);
  })();

  return (
    <>
      <Head>
        <title>{`RS FINAL${pathname}`}</title>
      </Head>
      <>
        <Title id="welcome" level={2}>
          Welcome to GraphiQL
        </Title>
        <Astronaut />
      </>
    </>
  );
};

export default Auth;
