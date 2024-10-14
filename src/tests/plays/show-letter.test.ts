import { ALPHABET } from '../../translations/alphabet.translation';
import { ShowLetter } from '../../plays/show-letter';

describe(ShowLetter.name, () => {
  let adedonha: ShowLetter;

  beforeEach(() => {
    adedonha = new ShowLetter();
  });

  test('should return a letter', () => {
    const result = adedonha.play();
    expect(result).toMatch(/^[a-zA-Z]+$/);
  });

  test('should return alphabet size', () => {
    const size = 26;
    expect(adedonha.translation[ALPHABET].en).toHaveLength(size);
  });

  test('should separator be empty string', () => {
    expect(adedonha.separator).toBe('');
  });

  test('should letters be the default alphabet', () => {
    expect(adedonha.letters).toBe(adedonha.translation[ALPHABET].en);
  });
});
