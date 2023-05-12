import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';

const Graphi = () => {
  const router = useRouter();
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (!user) {
      router.push('/');
    }
  });

  return (
    <>
      <h1>
        Добро пожаловать на страничку Graphi, это основная страница редактора после авторизации
      </h1>
    </>
  );
};

export default Graphi;
