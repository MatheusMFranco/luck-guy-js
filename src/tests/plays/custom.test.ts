import { Custom } from '../../plays/custom';

describe(Custom.name, () => {
  const mock = ['Batman', 'Superman', 'Wonder Woman', 'Green Lantern'];
  let custom: Custom;

  beforeEach(() => {
    custom = new Custom(mock);
  });

  test('should return one of Justice League heroes', () => {
    const result = custom.play();
    expect(mock).toContain(result);
  });
});
