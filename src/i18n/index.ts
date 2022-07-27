import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ptBR from './translate/pt/index.json';
import enUS from './translate/en/index.json';
import fr from './translate/fr/index.json';

i18n.init({
  fallbackLng: 'pt-BR',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    'pt-BR': ptBR,
    'en-US': enUS,
    fr: fr,
  },
});

export default i18n;
