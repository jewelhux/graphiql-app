import { Layout, Row, Col, Button, Space } from 'antd';
import { ReactElement } from 'react';
import Image from 'next/image';

const { Footer: AntFooter } = Layout;

function Footer(): ReactElement {
  return (
    <AntFooter className="footer">
      <Row className="footer-row" align={'middle'}>
        <Col>
          <Button
            type="link"
            href="https://github.com/Jik789"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Space>
              <Image
                width={40}
                height={40}
                alt="JiK"
                src="https://avatars.githubusercontent.com/u/38877564?v=4"
                className="github-avatar"
              />
            </Space>
          </Button>

          <Button
            type="link"
            href="https://github.com/okitel"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              width={40}
              height={40}
              alt="okitel"
              src="https://avatars.githubusercontent.com/u/79774026?v=4"
              className="github-avatar"
            />
          </Button>

          <Button
            type="link"
            href="https://github.com/Syderi"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              width={40}
              height={40}
              alt="Syderi"
              src="https://avatars.githubusercontent.com/u/107023048?v=4"
              className="github-avatar"
            />
          </Button>
        </Col>
        <Col>
          <Button
            type="link"
            href="https://rs.school/react/"
            className="rss"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="rss-year">&apos;23</span>
          </Button>
        </Col>
      </Row>
    </AntFooter>
  );
}

export default Footer;
