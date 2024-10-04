import { Response } from '../entities/response.enum';

export default {
  [Response.YES]: {
    en: 'Yes',
    pt: 'Sim',
    es: 'Sí',
    fr: 'Oui',
    de: 'Ja',
    it: 'Sì',
    ru: 'Да',
    zh: '是',
    ja: 'はい',
    ar: 'نعم',
    hi: 'हाँ',
  },
  [Response.NO]: {
    en: 'No',
    pt: 'Não',
    es: 'No',
    fr: 'Non',
    de: 'Nein',
    it: 'No',
    ru: 'Нет',
    zh: '不是',
    ja: 'いいえ',
    ar: 'لا',
    hi: 'नहीं',
  },
};
