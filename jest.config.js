module.exports = {
  preset: 'ts-jest', // Usa o ts-jest como pré-processador
  testEnvironment: 'node', // Ambiente de testes
  transform: {
    '^.+\\.ts$': 'ts-jest', // Transforma arquivos .ts usando ts-jest
  },
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  testMatch: ['**/*.test.ts'], // Procura por arquivos de teste com .test.ts
  coverageDirectory: './coverage', // Pasta para relatórios de cobertura de código
  collectCoverageFrom: [
    '**/*.{ts,js}',
    '!**/node_modules/**',
    '!**/dist/**',
    '!**/*.module.ts', // Exclui arquivos .module.ts da cobertura
  ],
};
