module.exports = {
  testEnvironment: 'node',
  rootDir: 'src',
  coverageDirectory: '../coverage',
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!(validator))']
};
