module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'application component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../app/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../app/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../app/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'templates/test.tsx.hbs'
      }
    ]
  });
};
