/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  reporters: [
    'default',
    ['jest-junit', {outputDirectory: 'reports', outputName: 'report.xml'}],
    ['github-actions', {silent: false}],
    'summary'
  ],
}
