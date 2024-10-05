import { FacePlay } from './face-play';
import { Jokenpo } from '../entities/jokenpo.enum';

import jokenpoTranslation from '../translations/jokenpo.translation';

export class ShakeHand extends FacePlay {
  translation = jokenpoTranslation;

  public play(): string {
    return this.toSides(Jokenpo);
  }
}
