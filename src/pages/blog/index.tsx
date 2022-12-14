import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import i18next from '../../i18n';

import styles from './styles.module.scss';

function imageLocale(locale: string) {
  switch (locale) {
    case 'en-US': {
      return 'https://cdn-icons-png.flaticon.com/128/197/197484.png';
    }
    case 'fr': {
      return 'https://cdn-icons-png.flaticon.com/128/197/197560.png';
    }
    default: {
      return 'https://cdn-icons-png.flaticon.com/128/3909/3909370.png';
    }
  }
}

export default function Blog() {
  const router = useRouter();
  const { locale } = router;
  const { changeLanguage, t } = i18next;

  changeLanguage(locale);

  return (
    <div className={styles.container}>
      <h1>{t('welcome')}</h1>
      <h3>{t('message')}</h3>

      <img src={imageLocale(locale!)} alt={t('alt')} />

      <button onClick={() => router.back()}>{t('button')}</button>
    </div>
  );
}
