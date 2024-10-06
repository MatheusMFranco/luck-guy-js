module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '\\.enum\\.ts$',
    '\\.type\\.ts$',
    '\\.translation\\.ts$',
    '\\.model\\.ts$',
    '\\.mock\\.ts$',
  ],
};
