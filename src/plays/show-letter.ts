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
    return this.customLuck(this.letters.split(this.separator));
  }

  get separator(): string {
    return '';
  }

  get letters(): string {
    return this.translation[ALPHABET][this.language];
  }
}
