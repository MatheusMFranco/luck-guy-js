import { Binary } from '../plays/binary';
import { RollDice } from '../plays/roll-dice';
import { FlipCoin } from '../plays/flip-coin';
import { SaySomething } from '../plays/say-something';
import { ShakeHand } from '../plays/shake-hand';
import { ShowLetter } from '../plays/show-letter';
import { OneTwoGo } from '../plays/one-two-go';
import { Custom } from '../plays/custom';
import { LuckyGuy } from '../lucky-guy';

describe(LuckyGuy.name, () => {
  let luckyGuy: LuckyGuy;

  beforeEach(() => {
    luckyGuy = new LuckyGuy();
  });

  test('should get and set language', () => {
    expect(luckyGuy.language).toBe('en');
    luckyGuy.language = 'pt';
    expect(luckyGuy.language).toBe('pt');
  });

  test('should play binary game', () => {
    const binaryPlayMock = jest
      .spyOn(Binary.prototype, 'play')
      .mockReturnValue(1);
    expect(luckyGuy.binary()).toBe(1);
    expect(binaryPlayMock).toHaveBeenCalled();
  });

  test('should roll a dice with default sides', () => {
    const rollDiceMock = jest
      .spyOn(RollDice.prototype, 'play')
      .mockReturnValue(4);
    expect(luckyGuy.dice()).toBe(4);
    expect(rollDiceMock).toHaveBeenCalledWith(6);
  });

  test('should roll a dice with specified sides', () => {
    const rollDiceMock = jest
      .spyOn(RollDice.prototype, 'play')
      .mockReturnValue(10);
    expect(luckyGuy.dice(10)).toBe(10);
    expect(rollDiceMock).toHaveBeenCalledWith(10);
  });

  test('should flip a coin', () => {
    const flipCoinMock = jest
      .spyOn(FlipCoin.prototype, 'play')
      .mockReturnValue('Heads');
    expect(luckyGuy.coin()).toBe('Heads');
    expect(flipCoinMock).toHaveBeenCalled();
  });

  test('should return confirmation', () => {
    const saySomethingMock = jest
      .spyOn(SaySomething.prototype, 'play')
      .mockReturnValue('Yes');
    expect(luckyGuy.confirmation()).toBe('Yes');
    expect(saySomethingMock).toHaveBeenCalled();
  });

  test('should play jokenpo', () => {
    const shakeHandMock = jest
      .spyOn(ShakeHand.prototype, 'play')
      .mockReturnValue('Rock');
    expect(luckyGuy.jokenpo()).toBe('Rock');
    expect(shakeHandMock).toHaveBeenCalled();
  });

  test('should return a random letter', () => {
    const showLetterMock = jest
      .spyOn(ShowLetter.prototype, 'play')
      .mockReturnValue('A');
    expect(luckyGuy.alphabet()).toBe('A');
    expect(showLetterMock).toHaveBeenCalled();
  });

  test('should play odds and evens', () => {
    const oneTwoGoMock = jest
      .spyOn(OneTwoGo.prototype, 'play')
      .mockReturnValue('Even');
    expect(luckyGuy.oddsAndEvens(2, 2)).toBe('Even');
    expect(oneTwoGoMock).toHaveBeenCalledWith(4);
  });

  test('should play a custom game', () => {
    const customMock = jest
      .spyOn(Custom.prototype, 'play')
      .mockReturnValue('Option 1');
    const options = ['Option 1', 'Option 2'];
    expect(luckyGuy.custom(options)).toBe('Option 1');
    expect(customMock).toHaveBeenCalledWith();
  });
});
