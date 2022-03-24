import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  // automock: true, // doesnt work with dotenv
  transform: {
    '.(ts|tsx)': 'ts-jest',
  },
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['/dist/', '/\\.npm/'],
  setupFilesAfterEnv: ['<rootDir>/src/jest/jest.serializer.ts', '<rootDir>/src//jest/jest.setup.ts'],
  setupFiles: ['dotenv/config'],
};

export default config;
