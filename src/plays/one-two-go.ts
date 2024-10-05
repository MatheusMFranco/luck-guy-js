import { FacePlay } from './face-play';
import { Language } from '../entities/language.type';
import { OddsOrEvens } from '../entities/odds-or-evens.enum';

import oddsOrEvensTranslation from '../translations/odds-or-evens.translation';

export class OneTwoGo extends FacePlay {
  translation = oddsOrEvensTranslation;

  constructor(language?: Language) {
    super(language);
  }

  public play(sum: number): string {
    const selected = sum % 2 ? OddsOrEvens.ODD : OddsOrEvens.EVEN;
    return this.translation[selected][this.language];
  }
}
