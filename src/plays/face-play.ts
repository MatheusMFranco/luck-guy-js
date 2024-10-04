import { Language } from '../entities/language.type';
import { Lucky } from '../entities/luky.model';
import { Translation } from '../entities/translation.model';
import { Play } from './play';

export abstract class FacePlay extends Play {
  constructor(protected language: Language = 'en') {
    super();
  }

  abstract translation: Translation;

  protected customLuck(sides: string[]): string {
    return sides[this.randomize(sides.length)];
  }

  protected toSides(luckType: Lucky): string {
    const sides = Object.keys(luckType).filter((key) => isNaN(+key));
    const selected = this.customLuck(sides);
    return this.translation[selected][this.language];
  }
}
