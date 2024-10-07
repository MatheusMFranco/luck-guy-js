import { FlipCoin } from '../../plays/flip-coin';

describe(FlipCoin.name, () => {
  const mock = ['Heads', 'Tails'];
  let coin: FlipCoin;

  beforeEach(() => {
    coin = new FlipCoin();
  });

  test('should return Heads or Tails', () => {
    const result = coin.play();
    expect(mock).toContain(result);
  });
});
