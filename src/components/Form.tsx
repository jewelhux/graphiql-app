import { FC } from 'react';
import { useRouter } from 'next/router';
import { Auth } from '@/types/enum';
import { EMAIL_REGEXP, PASSWORD_REGEXP } from '@/utils/const';
import { Form as AntForm, Input, Typography, Button, Col, Avatar } from 'antd';
import { LockOutlined, UserAddOutlined } from '@ant-design/icons';

interface IFormProps {
  variantAuth: string;
}

interface IFormData {
  email: string;
  password: string;
}

const Form: FC<IFormProps> = ({ variantAuth }) => {
  const { push } = useRouter();

  const [form] = AntForm.useForm();

  const onReset = () => {
    form.resetFields();
  };

  const onFinish = (data: IFormData) => {
    alert(data.password);
    alert(data.email);
    onReset();
  };

  const handleLinkToOtherAuth = () => {
    push(`/auth/${variantAuth === Auth.signin ? 'signup' : 'signin'}`);
  };

  return (
    <AntForm
      name="sign in"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Col>
        <Avatar icon={variantAuth === Auth.signin ? <LockOutlined /> : <UserAddOutlined />} />
        <Typography.Title level={2}>{variantAuth}</Typography.Title>
        <AntForm.Item
          label="Email"
          name="Email"
          rules={[
            { required: true, message: 'Please enter your email!' },
            {
              pattern: EMAIL_REGEXP,
              message: 'Please enter a valid email address',
            },
          ]}
        >
          <Input />
        </AntForm.Item>
        <AntForm.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: 'Please enter your password!' },
            {
              pattern: PASSWORD_REGEXP,
              message:
                'Password must have min 8 chars (uppercase, lowercase, digit and special char)',
            },
          ]}
        >
          <Input.Password />
        </AntForm.Item>
        <Button disabled={false} type="primary">
          {variantAuth}
        </Button>
        <Button disabled={false} type="default" onClick={handleLinkToOtherAuth}>
          {`GO TO ${variantAuth === Auth.signin ? Auth.signup : Auth.signin}`}
        </Button>
      </Col>
    </AntForm>
  );
};

export default Form;
