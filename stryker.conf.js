module.exports = {
    mutate: ['src/plays/*.ts'],
    testRunner: 'jest',
    reporters: ['progress', 'clear-text', 'html'],
    coverageAnalysis: 'all',
    tsconfigFile: 'tsconfig.json',
    ignoreStatic: false,
    warnings: { slow: false },
};
