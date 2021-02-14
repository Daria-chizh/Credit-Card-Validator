import verifyCard from '../src/verifyCard';

test('valid card', () => {
  expect(verifyCard('4111111111111111')).toBe(true);
});

test('invalid card', () => {
  expect(verifyCard('4111111111111112')).toBe(false);
});
