import { OddsOrEvens } from '../entities/odds-or-evens.enum';

export default {
  [OddsOrEvens.ODD]: {
    en: 'Odd',
    pt: 'Ímpar',
    es: 'Impar',
    fr: 'Impair',
    de: 'Ungerade',
    it: 'Dispari',
    ru: 'Нечетное',
    zh: '奇数',
    ja: '奇数',
    ar: 'فردي',
    hi: 'विषम',
  },
  [OddsOrEvens.EVEN]: {
    en: 'Even',
    pt: 'Par',
    es: 'Par',
    fr: 'Pair',
    de: 'Gerade',
    it: 'Pari',
    ru: 'Четное',
    zh: '偶数',
    ja: '偶数',
    ar: 'زوجي',
    hi: 'सम',
  },
};
