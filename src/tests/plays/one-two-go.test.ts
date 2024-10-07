import { OneTwoGo } from '../../plays/one-two-go';
import { RollDice } from '../../plays/roll-dice';

describe(OneTwoGo.name, () => {
  test('should return Ímpar or Par', () => {
    const hand = new OneTwoGo('pt');
    const mock = ['Ímpar', 'Par'];
    expect(mock).toContain(generateResult(hand));
  });

  test('should return Odd or Even', () => {
    const hand = new OneTwoGo();
    const mock = ['Odd', 'Even'];
    expect(mock).toContain(generateResult(hand));
  });

  test('should return Odd', () => {
    const hand = new OneTwoGo();
    expect(hand.play(5)).toBe('Odd');
    expect(hand.play(4)).not.toBe('Odd');
  });

  test('should return Even', () => {
    const hand = new OneTwoGo();
    expect(hand.play(4)).toBe('Even');
    expect(hand.play(5)).not.toBe('Even');
  });

  function generateResult(hand: OneTwoGo) {
    const players = [new RollDice().play(10), new RollDice().play(10)];
    return hand.play(players[0] + players[1]);
  }
});
