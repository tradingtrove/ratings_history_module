import { shallow } from 'enzyme';
import React from 'react';
import Purchase from '../client/src/components/Purchase';


const props = { 
  purchases: [
    {
      symbol: 'AAPL',
      purchase_id: 752,
      name: 'Apple',
      timeinforce: 'Good for day',
      submitted: '2016-09-24T00:51:08',
      status: 'filled',
      entered_quantity: 84,
      filled: '2018-08-23T16:43:24',
      filled_quantity: 84,
    },
    {
      symbol: 'AAPL',
      purchase_id: 1976,
      name: 'Apple',
      timeinforce: 'Good for day',
      submitted: '2016-02-19T10:43:43',
      status: 'filled',
      entered_quantity: 72,
      filled: '2017-05-06T02:31:04',
      filled_quantity: 72,
    },
  ]
};

test('Purchase was shallowly rendered with mock data', () => {
  const abc = shallow(<Purchase purchase={props.purchases[0]} />);

  expect(abc.exists()).toBeTruthy();
});
