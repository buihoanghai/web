/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: "node",
  preset: "ts-jest",
  extensionsToTreatAsEsm: [".ts"],  // Enable ESM mode for TypeScript
  transform: {
    "^.+\.tsx?$": ["ts-jest",{}],
  },
};