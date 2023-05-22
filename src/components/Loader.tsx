import React, { FC } from 'react';
import { Spin } from 'antd';

const Loader: FC = () => (
  <div className="loader">
    <Spin size="large" />
  </div>
);

export default Loader;
