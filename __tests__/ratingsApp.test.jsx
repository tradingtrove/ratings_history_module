import React from 'react';
import { shallow } from 'enzyme';
import TestUtils from 'react-dom/test-utils';

import RatingsApp from '../client/src/components/RatingsApp';

describe('Testing the RatingsApp', () => {
  it('The RatingsApp renders', () => {
    const wrapper = shallow(<RatingsApp />);
    expect(wrapper.exists()).toBeTruthy();
  });
});
