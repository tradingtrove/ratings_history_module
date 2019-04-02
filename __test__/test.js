import jest from 'jest';

jest.mock('./mockRequestDB', () => require.requireActual('../__mock__/mockAPI').default);

it('Has a property recBuy which is 4', () => {
  expect.assertions(1);
  return Stock.getAccount('TSTSTOCK')
    .then(data => expect(data).toEqual(4));
});

it('Has a property name which is Test', () => {
  expect.assertions(1);
  return Purchase.getAccount('TSTSTOCK')
    .then(data => expect(data).toEqual('Test'));
});
