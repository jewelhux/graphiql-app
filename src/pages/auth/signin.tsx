import { FC } from 'react';
import Form from '@/components/Form';
import { Auth } from '@/types/enum';

const SignIn: FC = () => {
  return (
    <>
      <Form variantAuth={Auth.signin} />
    </>
  );
};

export default SignIn;
