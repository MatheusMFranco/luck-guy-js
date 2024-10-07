import { RollDice } from '../../plays/roll-dice';

describe(RollDice.name, () => {
  let rollDice: RollDice;

  beforeEach(() => {
    rollDice = new RollDice();
  });

  test('should return 1 to 6 when play is called', () => {
    const mock = [1, 2, 3, 4, 5, 6];
    const result = rollDice.play(6);
    expect(mock).toContain(result);
    expect(mock).not.toContain(7);
    expect(mock).not.toContain(0);
  });
});
