import { Coin } from '../entities/coin.enum';
export default {
    [Coin.HEADS]: {
        en: 'Heads',
        pt: 'Cara',
        es: 'Cara',
        fr: 'Face',
        de: 'Kopf',
        it: 'Testa',
        ru: 'Орел',
        zh: '正面',
        ja: '表',
        ar: 'وجه',
        hi: 'सिर',
    },
    [Coin.TAILS]: {
        en: 'Tails',
        pt: 'Coroa',
        es: 'Cruz',
        fr: 'Pile',
        de: 'Zahl',
        it: 'Croce',
        ru: 'Решка',
        zh: '反面',
        ja: '裏',
        ar: 'كتابة',
        hi: 'पूंछ',
    },
};
