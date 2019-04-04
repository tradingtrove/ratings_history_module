import { shallow } from 'enzyme';
import React from 'react';
import Review from '../client/src/components/Review';


test('Review was shallowly rendered', () => {
  const abc = shallow(<Review />);

  expect(abc.exists()).toBeTruthy();
});
