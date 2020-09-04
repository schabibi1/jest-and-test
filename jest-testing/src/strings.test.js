test('no I in the word of hoge', () => {
  expect('hoge').not.toMatch(/I/);
});

test('but there is a "oo" in foo!', () => {
  expect('foo!').toMatch(/oo/);
});

test('日本語文字列テスト', () => {
  expect('ぽぽー').toMatch(/ぽ/);
});

test('絵文字テスト', () => {
  expect('🥋').toMatch(/🥋/);
});