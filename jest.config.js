module.exports = {
  testMatch: ['<rootDir>/test/**/*.test.ts?(x)'],
  // エイリアスの設定を追加する
  moduleNameMapper: {
    '^@common-entity(.*)$': '<rootDir>/../common-entity/dist$1',
    '^@src/(.*)$': '<rootDir>/src/$1',
  },
};
