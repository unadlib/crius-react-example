export const mount = (path) => `
  require('enzyme').mount(require('React').createElement((() => {
    ${require('@babel/core').transformFileSync(path).code} return _default;
  })()))`;
