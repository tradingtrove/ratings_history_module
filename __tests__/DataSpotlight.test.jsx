import { shallow } from 'enzyme';
import React from 'react';
import DataSpotlight from '../client/src/components/DataSpotlight';


test('App was rendered', () => {
  const abc = shallow(<DataSpotlight />);

  expect(abc.exists()).toBeTruthy();
});
