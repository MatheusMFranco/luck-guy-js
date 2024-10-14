import { RollDice } from '../../plays/roll-dice';
import { Play } from '../../plays/play';

describe(Play.name, () => {
  let playInstance: Play;

  beforeEach(() => {
    playInstance = new RollDice();
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

  test('should return all possible outcomes for multiple calls', () => {
    const sides = 6;
    const times = 100;
    const outcomes = new Set<number>();

    for (let i = 0; i < times; i++) {
      const result = playInstance.play(sides);
      outcomes.add(result as number);
    }

    for (let i = 1; i < sides; i++) {
      expect(Array.from(outcomes)).toContain(i);
    }
  });

  test('should throw error for invalid sides', () => {
    const errorMessage = 'Side must be greater than 0';
    expect(() => playInstance.play(0)).toThrow(errorMessage);
    expect(() => playInstance.play(-1)).toThrow(errorMessage);
  });
});
