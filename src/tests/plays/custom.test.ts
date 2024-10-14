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

  test('should return undefined for empty list', () => {
    const emptyCustom = new Custom([]);
    const result = emptyCustom.play();
    expect(result).toBeUndefined();
  });

  test('should always return the same hero for a single-item list', () => {
    const singleHeroCustom = new Custom(['Wonder Woman']);
    const result = singleHeroCustom.play();
    expect(result).toBe('Wonder Woman');
  });

  test('should return empty string for empty hero in the list', () => {
    const emptyHeroCustom = new Custom(['']);
    const result = emptyHeroCustom.play();
    expect(result).toBe('');
  });
});
