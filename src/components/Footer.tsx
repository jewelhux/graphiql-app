import { Layout, Row, Col, Typography, Image, Button } from 'antd';
import { ReactElement } from 'react';

function Footer(): ReactElement {
  return (
    <Layout.Footer>
      <Row justify="space-between">
        <Col>
          <Row>
            <Button type="link" href="https://github.com/Jik789">
              <Image alt="JiK" src="https://Images.githubusercontent.com/u/38877564?v=4" />
            </Button>
            <Button type="link" href="https://github.com/okitel">
              <Image alt="okitel" src="https://Images.githubusercontent.com/u/79774026?v=4" />
            </Button>
            <Button type="link" href="https://github.com/Syderi">
              <Image alt="Syderi" src="https://Images.githubusercontent.com/u/107023048?v=4" />
            </Button>
          </Row>
        </Col>
        <Col>
          <Typography.Title level={2}>2023</Typography.Title>
        </Col>
        <Col>
          <Button type="link" href="https://rs.school/index.html">
            <Image alt="JiK" src="https://rs.school/images/partners/logo-rs.svg" />
          </Button>
        </Col>
      </Row>
    </Layout.Footer>
  );
}

export default Footer;
