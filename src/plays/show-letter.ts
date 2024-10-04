import { Language } from '../entities/language.type';
import { FacePlay } from './face-play';

import alphabetTranslation from '../translations/alphabet.translation';

export class ShowLetter extends FacePlay {

  translation = alphabetTranslation;

  constructor(language?: Language) {
    super(language);
  }

  public play(): string {
    return this.customLuck('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')); 
  }
}
