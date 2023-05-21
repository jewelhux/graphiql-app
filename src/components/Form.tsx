import { FC } from 'react';
import { useRouter } from 'next/router';
import { Auth } from '@/types/enum';
import { EMAIL_REGEXP, PASSWORD_REGEXP } from '@/utils/const';
import { IFormData } from '@/types/interface';
import { Form as AntForm, Input, Typography, Button, Avatar, Row, Col, Card } from 'antd';
import { LockOutlined, UserAddOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Title } = Typography;

interface IFormProps {
  variantAuth: string;
  handleClick: (data: IFormData) => void;
}

const Form: FC<IFormProps> = ({ variantAuth, handleClick }) => {
  const { push } = useRouter();
  const { t } = useTranslation();

  const onFinish = (data: IFormData) => {
    handleClick(data);
  };

  const handleLinkToOtherAuth = () => {
    push(`/${variantAuth === Auth.signin ? 'signup' : 'signin'}`);
  };

  const formTitle = variantAuth === 'Sign In' ? 'form.titleIn' : 'form.titleUp';
  const btnTitle = variantAuth === 'Sign In' ? 'form.buttonIn' : 'form.buttonUp';

  return (
    <Row justify="center" align="middle" style={{ height: 'calc(100vh - 200px)' }}>
      <Col span={24}>
        <AntForm
          name="sign in"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          className="form"
        >
          <Card hoverable>
            <div className="form_title">
              <Avatar
                className="icon"
                icon={variantAuth === Auth.signin ? <LockOutlined /> : <UserAddOutlined />}
              />
              <Title level={2}>{t(formTitle)}</Title>
            </div>

            <AntForm.Item
              name="email"
              rules={[
                { required: true, message: t('form.emailInput') || 'Please enter your email!' },
                {
                  pattern: EMAIL_REGEXP,
                  message: t('form.emailValid') || 'Please enter a valid email address',
                },
              ]}
              wrapperCol={{ span: '100%' }}
            >
              <Input placeholder={t('form.email') || 'Email'} type="email" />
            </AntForm.Item>
            <AntForm.Item
              name="password"
              rules={[
                { required: true, message: t('form.passInput') || 'Please enter your password!' },
                {
                  pattern: PASSWORD_REGEXP,
                  message:
                    t('form.passValid') ||
                    'Min 8 chars (uppercase, lowercase, digit and special char)',
                },
              ]}
              wrapperCol={{ span: '100%' }}
            >
              <Input.Password placeholder={t('form.password') || 'Password'} />
            </AntForm.Item>
            <Row justify="center">
              <Button disabled={false} type="primary" htmlType="submit" block>
                {t(btnTitle)}
              </Button>
            </Row>
            <Row justify="end">
              <Button disabled={false} type="link" onClick={handleLinkToOtherAuth}>
                {variantAuth === Auth.signin ? t('form.titleUp') : t('form.titleIn')}
              </Button>
            </Row>
          </Card>
        </AntForm>
      </Col>
    </Row>
  );
};

export default Form;
