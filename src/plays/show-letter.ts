import { FacePlay } from './face-play';
import { Language } from '../entities/language.type';

import alphabetTranslation, {
  ALPHABET,
} from '../translations/alphabet.translation';

export class ShowLetter extends FacePlay {
  translation = alphabetTranslation;

  constructor(language?: Language) {
    super(language);
  }

  public play(): string {
    const letters = this.translation[ALPHABET][this.language];
    return this.customLuck(letters.split(''));
  }
}
