import myPet from './matchers';

test('Testing object', () => {
  expect(myPet).not.toEqual({name: 'Tama', age: 2});
});