import { shallow } from 'enzyme';
import React from 'react';
import App from '../client/src/components/App';


test('App was rendered', () => {
  const abc = shallow(<App />);

  expect(abc.exists()).toBeTruthy();
});
