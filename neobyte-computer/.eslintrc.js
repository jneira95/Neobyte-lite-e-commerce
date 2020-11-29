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
        'linebreak-style': 0,
        'global-require': 0,
        'eslint linebreak-style': [0, 'error', 'windows'],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'class-methods-use-this': 'off',
        'lines-between-class-members': 'off',
        '@typescript-eslint/unbound-method': [
          'error',
          {
            ignoreStatic: true,
          }
        ]
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