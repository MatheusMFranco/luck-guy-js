import { Play } from './play';

export class Binary extends Play {

  public play(): number {
    return this.randomize(2);
  }

}
