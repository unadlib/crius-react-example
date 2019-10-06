module.exports = require('babel-jest').createTransformer({
  "presets": [
    ["@babel/preset-env"],
    ["babel-preset-crius"]
  ],
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }]
  ]
});
