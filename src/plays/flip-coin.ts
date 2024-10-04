import { FacePlay } from './face-play';
import { Coin } from '../entities/coin.enum';
import { Language } from '../entities/language.type';

import coinTranslation from '../translations/coin.translation';

export class FlipCoin extends FacePlay {
  translation = coinTranslation;

  constructor(language?: Language) {
    super(language);
  }

  public play(): string {
    return this.toSides(Coin);
  }
}
