import myPet from './matchers';

test('Testing object', () => {
  expect(myPet).toEqual({name: 'Tama', age: 2});
});