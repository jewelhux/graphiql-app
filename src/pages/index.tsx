import Head from 'next/head';
import { useRouter } from 'next/router';
import { buildHTTPExecutor } from '@graphql-tools/executor-http';
import { schemaFromExecutor } from '@graphql-tools/wrap';

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
        <title>{`RSFINAL${pathname}`}</title>
      </Head>
      <>
        <h1>ТУТ СОЗДАТЬ КРАСИВУЮ ЗАСТАВКУ ЛУЧШЕ ВСЕГО ГИФКУ НО ЧТОТО ПРЯТНОЕ</h1>
      </>
    </>
  );
};

export default Auth;
