import QueryEditor from '@/components/QueryEditor';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Graphi = () => {
  const router = useRouter();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/');
      }
    });
  }, [auth, router]);

  return <QueryEditor />;
};

export default Graphi;
