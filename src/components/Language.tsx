import { SiteLanguage } from '@/types/enum';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Language: FC = () => {
  // const [storageLang, setStorageLang] = useState(localStorage?.getItem('lang'));
  const [storageLang, setStorageLang] = useState<string | null>('');
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

  const handleChangeLang = (event: ChangeEvent<HTMLSelectElement>) => {
    setLang(event.target.value);
    if (event.target.value === SiteLanguage.russian) {
      setStorageLang('ru');
    } else {
      setStorageLang('en');
    }
  };

  return (
    <select value={lang} onChange={handleChangeLang}>
      <option value={SiteLanguage.russian}>{SiteLanguage.russian}</option>
      <option value={SiteLanguage.english}>{SiteLanguage.english}</option>
    </select>
  );
};

export default Language;
