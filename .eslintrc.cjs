const { default: ts } = require("typescript");

module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		project: ["tsconfig.json", "tsconfig.app.json", "tsconfig.node.json"],
		tsconfigRootDir: __dirname,
	},
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	plugins: ["react", "react-hooks", "@typescript-eslint", "tailwindcss"],
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-type-checked",
		"plugin:@typescript-eslint/stylistic-type-checked",
		"plugin:tailwindcss/recommended",
	],
	rules: {
		"react/react-in-jsx-scope": "off",
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
		"@typescript-eslint/no-unused-vars": "warn",
		"@typescript-eslint/no-unsafe-call": "off",
		"@typescript-eslint/no-unsafe-assignment": "off",
	},
	settings: {
		react: {
			version: "detect",
		},
		tailwindcss: {
			config: "tailwind.config.js", // Certifique-se que este arquivo existe
		},
	},
};
