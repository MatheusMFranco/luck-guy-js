import { Play } from './play';

export class RollDice extends Play {

  public play(sides: number): number {
    return this.randomize(sides) + 1;
  }

}
