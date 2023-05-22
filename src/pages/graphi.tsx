// import QueryEditor from '@/components/QueryEditor';
import Loader from '@/components/Loader';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';
import { Suspense, useEffect, lazy } from 'react';

const Graphi = () => {
  const router = useRouter();
  const auth = getAuth();
  const QueryEditor = lazy(() => import('@/components/QueryEditor'));

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/');
      }
    });
  }, [auth, router]);

  return (
    <Suspense fallback={<Loader />}>
      <QueryEditor />;
    </Suspense>
  );
};

export default Graphi;
