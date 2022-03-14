module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            assets: './assets',
            components: './components',
            modules: './modules',
            lib: './lib',
            types: './types',
            constants: './constants',
            shared: './shared',
            screens: './screens',
          },
        },
      ],
    ],
  };
};
