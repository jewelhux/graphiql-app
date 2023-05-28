import { SiteLanguage } from '@/types/enum';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'antd';

const Language: FC = () => {
  const [storageLang, setStorageLang] = useState<string | null>('en');
  const [lang, setLang] = useState<string | SiteLanguage>(
    storageLang === 'en' ? SiteLanguage.english : SiteLanguage.russian
  );

  const { i18n } = useTranslation();

  useEffect(() => {
    if (storageLang) {
      localStorage.setItem('lang', storageLang);
      i18n.changeLanguage(storageLang);
    }
  }, [i18n, storageLang]);

  const handleChangeLang = (value: string) => {
    setLang(value);
    if (value === SiteLanguage.russian) {
      setStorageLang('ru');
    } else {
      setStorageLang('en');
    }
  };

  const options = [
    {
      label: SiteLanguage.russian,
      value: SiteLanguage.russian,
    },
    {
      label: SiteLanguage.english,
      value: SiteLanguage.english,
    },
  ];

  return <Select value={lang} options={options} onChange={handleChangeLang} />;
};

export default Language;
