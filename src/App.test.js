/* eslint-disable react/react-in-jsx-scope */
import { transformFileSync } from '@babel/core';
import Enzyme, { mount as enzymeMount  } from 'enzyme';
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

Enzyme.configure({ adapter: new Adapter() });

const mount = (path) => enzymeMount(require('React').createElement(eval(transformFileSync(path).code)));

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
    const wrapper = mount('./src/App.js');
    expect(wrapper.text()).toEqual("Edit src/App.js and save to reload.Learn React");
  }
}
