import { shallow } from 'enzyme';
import React from 'react';
import ReviewList from '../client/src/components/ReviewList';


test('ReviewList was shallowly rendered', () => {
  const abc = shallow(<ReviewList />);

  expect(abc.exists()).toBeTruthy();
});
