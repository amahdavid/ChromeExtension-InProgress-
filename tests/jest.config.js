module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.ts$": "ts-jest",
  },
  type: 'module',
  moduleFileExtensions: ["ts", "js"],
  testTimeout: 10000,
};
