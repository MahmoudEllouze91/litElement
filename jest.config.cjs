module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*.test.mjs'],
  extensionsToTreatAsEsm: ['.ts'],
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {
        useESM: true,
        tsconfig: {
          module: 'ESNext',
          target: 'ES2020',
          experimentalDecorators: true,
          useDefineForClassFields: false,
          esModuleInterop: true,
        },
      },
    ],
  },
  moduleNameMapper: {
    '^.+\\.scss(?:\\?inline)?$': '<rootDir>/tests/styleMock.mjs',
  },
  clearMocks: true,
};
