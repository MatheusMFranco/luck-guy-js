import { Play } from './play';

export class RollDice extends Play {
  public play(sides: number): number {
    if (sides <= 0) {
      throw new Error('Side must be greater than 0');
    }
    return this.randomize(sides) + 1;
  }
}
