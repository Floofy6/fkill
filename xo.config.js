export default [
	{
		files: ['**/*.ts'],
		languageOptions: {
			parserOptions: {
				project: './tsconfig.json',
				projectService: false,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
];
