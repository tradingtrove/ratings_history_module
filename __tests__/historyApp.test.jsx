import { shallow } from 'enzyme';
import React from 'react';
import HistoryApp from '../client/src/components/HistoryApp';



describe('Testing the HistoryApp', () => {
  it('The HistoryApp renders', () => {
    const wrapper = shallow(<HistoryApp />);
    expect(wrapper.exists()).toBeTruthy();
  });
});
