import { ShakeHand } from '../../plays/shake-hand';

describe(ShakeHand.name, () => {
  const mock = ['Pedra', 'Papel', 'Tesoura'];
  let hand: ShakeHand;

  beforeEach(() => {
    hand = new ShakeHand('pt');
  });

  test('should return Pedra, Papel or Tesoura', () => {
    const result = hand.play();
    expect(mock).toContain(result);
  });
});
