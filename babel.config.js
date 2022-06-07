module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src/'],
          extensions: ['.ios.js', '.android.js', '.js', '.json'],
          alias: {
            '@': './src'
          }
        }
      ],
      'react-native-reanimated/plugin'
    ]
  }
}
