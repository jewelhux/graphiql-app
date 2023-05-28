import {
  AuthError,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import firebaseApp from './firebaseConfig';

export const auth = getAuth(firebaseApp);

export const signUp = async (email: string, password: string) => {
  let result = null;
  let error = null;

  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
  } catch (err) {
    error = err as AuthError;
  }

  return { result, error };
};

export const signIn = async (email: string, password: string) => {
  let result = null;
  let error = null;

  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    error = err as AuthError;
  }

  return { result, error };
};

export const logOut = async () => {
  let result = null;
  let error = null;

  try {
    await signOut(auth);
    result = true as const;
  } catch (err) {
    error = err as AuthError;
  }

  return { result, error };
};
