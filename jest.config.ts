import type { JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
	preset: "ts-jest/presets/default-esm", // importante para ESM + TS
	testEnvironment: "node",
	testMatch: ["**/src/**/*.spec.ts", "**/test/**/*.spec.ts"],
	moduleFileExtensions: ["ts", "js", "json", "node"],
	extensionsToTreatAsEsm: [".ts"],
	globals: {
		"ts-jest": {
			useESM: true,
		},
	},
	transform: {
		"^.+\\.ts$": "ts-jest",
	},
	transformIgnorePatterns: [], // 🔹 transpila también node_modules
};

export default config;
