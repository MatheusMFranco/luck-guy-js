import { Binary } from '../../src/plays/binary';
import { Play } from '../../src/plays/play';

describe(Play.name, () => {
  let playInstance: Play;

  beforeEach(() => {
    playInstance = new Binary();
  });

  test('should return a number between 0 and (sides - 1) when calling play()', () => {
    const sides = 6;
    const result = playInstance.play(sides);

    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThan(sides);
  });

  test('should return an integer', () => {
    const sides = 6;
    const result = playInstance.play(sides);

    expect(Number.isInteger(result)).toBe(true);
  });
});
