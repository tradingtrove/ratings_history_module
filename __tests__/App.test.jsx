import { shallow } from 'enzyme';
import App from '../client/src/components/App';
import React from 'react';


test('App was rendered', () => {
  const abc = shallow(<App />);

  expect(abc.exists()).toBeTruthy();
});
