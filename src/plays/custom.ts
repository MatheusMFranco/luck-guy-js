import { Play } from './play';

export class Custom extends Play {
  constructor(private readonly list: string[]) {
    super();
  }

  public play(): string {
    return this.list[this.randomize(this.list.length)];
  }
}
