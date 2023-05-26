import React, { FC } from 'react';
import { Spin } from 'antd';

const Loader: FC = () => (
  <div className="spin">
    <Spin size="large" tip="Loading..." />
  </div>
);

export default Loader;
