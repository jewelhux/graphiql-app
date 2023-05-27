import React, { FC } from 'react';
import { Spin } from 'antd';
import { useTranslation } from 'react-i18next';

const Loader: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="spin">
      <Spin size="large" tip={t('loader.loader')} />
    </div>
  );
};

export default Loader;
