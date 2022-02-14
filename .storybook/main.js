module.exports = {
  // "stories": [
  //   "../stories/**/*.stories.mdx",
  //   "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  // ],
  stories: [
    {
      directory: '../Foo',
      titlePrefix: 'Foo',
      files: '**/*.stories.*',
    },
    {
      directory: '../Bar',
      titlePrefix: 'Bar',
      files: '**/*.stories.*',
    },
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
};
