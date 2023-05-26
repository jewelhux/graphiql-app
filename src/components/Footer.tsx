import { Layout, Row, Col, Button, Avatar, Space } from 'antd';
import { ReactElement } from 'react';

const { Footer: AntFooter } = Layout;

function Footer(): ReactElement {
  return (
    <AntFooter className="footer">
      <Row className="footer-row" align={'middle'} style={{ minHeight: '55px' }}>
        <Col>
          <Button type="link" href="https://github.com/Jik789" className="btn">
            <Space>
              <Avatar
                className="github-avatar"
                size="large"
                alt="JiK"
                src="https://avatars.githubusercontent.com/u/38877564?v=4"
              />
            </Space>
          </Button>

          <Button type="link" href="https://github.com/okitel" className="btn">
            <Avatar
              className="github-avatar"
              size="large"
              alt="okitel"
              src="https://avatars.githubusercontent.com/u/79774026?v=4"
            />
          </Button>

          <Button type="link" href="https://github.com/Syderi" className="btn">
            <Avatar
              className="github-avatar"
              size="large"
              alt="Syderi"
              src="https://avatars.githubusercontent.com/u/107023048?v=4"
            />
          </Button>
        </Col>
        <Col>
          <Button type="link" href="https://rs.school/react/" className="rss">
            <span className="rss-year">&apos;23</span>
          </Button>
        </Col>
      </Row>
    </AntFooter>
  );
}

export default Footer;
