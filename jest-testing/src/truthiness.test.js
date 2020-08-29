test('null', () => {
  const n = null;
  expect(n).toBeNull();// nullと等しい
  expect(n).toBeDefined();// undefinedではないので正しい
  expect(n).not.toBeUndefined();// undefinedではないので正しい
  expect(n).not.toBeTruthy();// nullは条件分岐でtrueを返さないので正しい
  expect(n).toBeFalsy();// nullは条件分岐でfalseを返すので正しい
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();// nullではないので正しい
  expect(z).toBeDefined();// undefinedではないので正しい
  expect(z).not.toBeUndefined();// undefinedではないので正しい
  expect(z).not.toBeTruthy();// 数値の0はは条件分岐でtrueを返さないので正しい
  expect(z).toBeFalsy();// 数値の0は条件分岐でfalseを返すので正しい
});