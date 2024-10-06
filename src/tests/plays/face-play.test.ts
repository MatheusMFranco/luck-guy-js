import { FacePlay } from '../../plays/face-play';
import { FlipCoin } from '../../plays/flip-coin';

describe(FacePlay.name, () => {
  let playInstance: FacePlay;

  test('should return a value between Heads and Tails when calling play()', () => {
    playInstance = new FlipCoin();
    const result = playInstance.play();

    expect(result === 'Heads' || result === 'Tails').toBe(true);
  });

  test('should return a value between Cara and Coroa when calling play()', () => {
    playInstance = new FlipCoin('pt');
    const result = playInstance.play();

    expect(result === 'Cara' || result === 'Coroa').toBe(true);
  });

  test('should return an string', () => {
    const result = playInstance.play();

    expect(typeof result === 'string').toBe(true);
  });
});
