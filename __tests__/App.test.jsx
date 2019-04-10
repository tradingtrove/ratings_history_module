import { shallow } from 'enzyme';
import React from 'react';
import App from '../client/src/components/App';

test('App was rendered', () => {
  const myApp = shallow(<App />);

  expect(myApp.exists()).toBeTruthy();
});
