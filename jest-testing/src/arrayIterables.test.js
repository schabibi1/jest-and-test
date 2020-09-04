const todoList = [
  'jogging🏃‍♀️',
  'weight training💪',
  'work👩‍💻',
  'go to post office📮',
  'yoga🧘‍♀️',
];

test('the todo list has yoga on it', () => {
  expect(todoList).toContain('yoga🧘‍♀️');
  expect(new Set(todoList)).toContain('yoga🧘‍♀️');
});