import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

it('matches snapshot', () => {
  let app = shallow(<App />, { disableLifecycleMethods: true })
  expect(app).toMatchSnapshot();
})