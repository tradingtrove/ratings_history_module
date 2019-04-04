import { shallow } from 'enzyme';
import React from 'react';
import DataBarChart from '../client/src/components/DataBarChart';


test('App was rendered', () => {
  const abc = shallow(<DataBarChart />);

  expect(abc.exists()).toBeTruthy();
});
