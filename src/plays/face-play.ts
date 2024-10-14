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
    const sides = Object.keys(luckType).filter((key) => /[A-Za-z]/.test(key));
    const selected = this.customLuck(sides);
    const key = luckType[selected as keyof typeof luckType];
    return this.translation[key][this.language];
  }
}
