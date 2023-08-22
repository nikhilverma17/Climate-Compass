import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import bn from './bn.json';
import en from './en.json';
import ta from './ta.json';
import hnd from './hnd.json';
import pu from './pu.json'; // Corrected typo here
import te from './te.json'; // Added Telugu translations
import ur from './ur.json'; // Added Telugu translations
import gu from './gu.json'; // Added Telugu translations
import ka from './ka.json'; // Added Telugu translations
import ma from './ma.json'; // Added Telugu translations
import mar from './mar.json'; // Added Telugu translations
import od from './od.json'; // Added Telugu translations
import sns from './sns.json'; // Added Telugu translations

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: en,
    ta: ta,
    bn: bn,
    hnd: hnd,
    pu: pu,
    te: te,
    ur:ur,
    gu:gu,
    ka:ka,
    ma:ma,
    mar:mar,
    od:od,
    sns:sns,

  },
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
