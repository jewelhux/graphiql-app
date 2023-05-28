import React, { FC } from 'react';
import { Row, Card, Button, Avatar, Col, Space, Typography } from 'antd';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const Info: FC = () => {
  const { Title, Paragraph } = Typography;
  const { Meta } = Card;
  const { t } = useTranslation();
  return (
    <>
      <Row justify="center">
        <Title level={3}>{t('info.devTitle')}</Title>
      </Row>
      <Row justify="center" style={{ marginBottom: '30px' }} gutter={24}>
        <Col>
          <Button
            type="link"
            href="https://github.com/Jik789"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card hoverable className="dev-cards">
              <Avatar
                className="dev-cards-avatar"
                alt="JiK"
                src="https://avatars.githubusercontent.com/u/38877564?v=4"
              />
              <Meta title={t('info.dev1Title')} description={t('info.countryRU')} />
              <Paragraph className="dev-description">{t('info.dev1Des')}</Paragraph>
            </Card>
          </Button>
        </Col>
        <Col>
          <Button
            type="link"
            href="https://github.com/okitel"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card hoverable className="dev-cards">
              <Avatar
                className="dev-cards-avatar"
                alt="okitel"
                src="https://avatars.githubusercontent.com/u/79774026?v=4"
              />
              <Meta title={t('info.dev2Title')} description={t('info.countryPL')} />
              <Paragraph className="dev-description">{t('info.dev2Des')}</Paragraph>
            </Card>
          </Button>
        </Col>
        <Col>
          <Button
            type="link"
            href="https://github.com/Syderi"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card hoverable className="dev-cards">
              <Avatar
                className="dev-cards-avatar"
                alt="Syderi"
                src="https://avatars.githubusercontent.com/u/107023048?v=4"
              />
              <Meta title={t('info.dev3Title')} description={t('info.countryRU')} />
              <Paragraph className="dev-description">{t('info.dev3Des')}</Paragraph>
            </Card>
          </Button>
        </Col>
      </Row>
      <Row justify="center">
        <Space direction="vertical">
          <Title level={3}>{t('info.schoolTitle')}</Title>
        </Space>
      </Row>
      <Row justify="center" style={{ marginBottom: '50px' }}>
        <Col>
          <Card hoverable className="dev-cards">
            <Image
              alt="RSS"
              src="https://rs.school/images/partners/logo-rs.svg"
              width={100}
              height={100}
            />
            <Meta title={t('info.courseTitle')} />
            <Paragraph className="dev-description">{t('info.courseDes')}</Paragraph>
            <Button
              type="default"
              href="https://rs.school/react/"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('info.enrollBtn')}
            </Button>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Info;
