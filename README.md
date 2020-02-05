# crius-react-example

## Tutorial

1. Create project with `create-react-app`:

```sh
npx create-react-app crius-react-example
```

2. Eject project run `yarn eject`

3. Install `crius-test`, `babel-preset-crius` & other dependent package:

```sh
yarn add babel-preset-crius crius-test enzyme enzyme-adapter-react-16
```

4. Create babel jest config `babel-jest.js`:

```js
module.exports = require('babel-jest').createTransformer({
  "presets": [
    ["@babel/preset-env"],
    ["babel-preset-crius"]
  ],
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }]
  ],
  "test": "./test"
});
```

5. Replace `transform` about `jest` config in `package.json`, remove `testMatch` feild and change `roots` value to `<rootDir>/test`:

```json
{
  "roots": [
    "<rootDir>/test"
  ]
  "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/babel-jest.js",
  //omit other default config.
}
```

6. Coding with `crius` for testing in `index.test.js` in `test` folder:

```jsx
/* eslint-disable react/react-in-jsx-scope */
import Enzyme, { mount  } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {
  autorun,
  title,
  Step,
  Scenario,
  Given,
  When,
  Then
} from 'crius-test';
import App from '../src/App';

Enzyme.configure({ adapter: new Adapter() });

@autorun(test)
@title('Test user add todo item')
class Example extends Step {
  run() {
    return (
      <Scenario desc='user login website' action={Bar}>
        <Given desc='user navigate to list page' />
        <When desc='user type "read book" in input field and click "add" button' />
        <Then desc='user should see "read book" todo item in todo list' />
      </Scenario>
    )
  }
}

class Bar extends Step {
  run() {
    const wrapper = mount(React.createElement(App));
    expect(wrapper.text()).toEqual("Edit src/App.js and save to reload.Learn React");
  }
}

```

---

### Available Scripts from `Create React App`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
