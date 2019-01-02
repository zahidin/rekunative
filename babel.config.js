module.exports = {
  "presets": ["module:metro-react-native-babel-preset"],
  plugins: [
    ["module-resolver", {
      alias: {
        "@screens": ([, name]) => `./src/screens/${name}/${name}.js`
      }
    }]
  ]
}