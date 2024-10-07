import { SaySomething } from '../../plays/say-something';

describe(SaySomething.name, () => {
  const mock = ['Yes', 'No'];
  let saySomething: SaySomething;

  beforeEach(() => {
    saySomething = new SaySomething();
  });

  test('should return Yes or No', () => {
    const result = saySomething.play();
    expect(mock).toContain(result);
  });
});
