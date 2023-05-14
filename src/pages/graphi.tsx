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

  return (
    <>
      <h1>
        Добро пожаловать на страничку Graphi, это основная страница редактора после авторизации.
      </h1>
    </>
  );
};

export default Graphi;
