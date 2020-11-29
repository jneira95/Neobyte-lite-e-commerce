module.exports = {
  root: true,
  overrides: [
    {
      files: ["*.ts"],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: [
          'tsconfig.*?.json',
        ],
        createDefaultProgram: true
      },
      extends: [
        "plugin:@angular-eslint/recommended",
        'airbnb-typescript/base',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended'
      ],
      rules: {
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'class-methods-use-this': 'off',
        'lines-between-class-members': 'off',
      }
    },
    {
      files: ["*.component.html", "*.html"],
      extends: ["plugin:@angular-eslint/template/recommended"],
      rules: {
        "max-len": ["error", { "code": 140 }]
      }
    },
    {
      files: ["*.component.ts"],
      extends: ["plugin:@angular-eslint/template/process-inline-templates"]
    }
  ]
}