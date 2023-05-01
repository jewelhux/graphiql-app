import { FC } from 'react';
import Form from '@/components/Form';
import { Auth } from '@/types/enum';

const SignUp: FC = () => {
  return (
    <>
      <Form variantAuth={Auth.signup} />
    </>
  );
};

export default SignUp;
