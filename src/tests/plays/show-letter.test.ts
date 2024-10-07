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
});
