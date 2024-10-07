import { Binary } from '../../plays/binary';

describe(Binary.name, () => {
  let binary: Binary;

  beforeEach(() => {
    binary = new Binary();
  });

  test('should return 0 or 1 when play is called', () => {
    const result = binary.play();
    expect([0, 1]).toContain(result);
  });
});
