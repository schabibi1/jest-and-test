function showUsers() {
  throw new Error('You got a glitch!');
}

test('getting users as expected', () => {
  expect(showUsers).toThrow();
  expect(showUsers).toThrow(Error);

  // You can also use the exact error message or a regexp
  expect(showUsers).toThrow('You got a glitch!');
  expect(showUsers).toThrow(/glitch/);
});