import { FacePlay } from './face-play';
import { Response } from '../entities/response.enum';
import { Language } from '../entities/language.type';

import responseTranslation from '../translations/response.translation';

export class SaySomething extends FacePlay {

  translation = responseTranslation;

  constructor(language?: Language) {
    super(language);
  }

  public play(): string {
    return this.toSides(Response); 
  }
}
