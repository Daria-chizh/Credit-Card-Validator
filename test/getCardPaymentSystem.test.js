import getCardPaymentSystem from '../src/getCardPaymentSystem';

test('visa card', () => {
  expect(getCardPaymentSystem('4916535029482759')).toBe('visa');
});

test('mastercard card', () => {
  expect(getCardPaymentSystem('5345101572790904')).toBe('mastercard');
});

test('american express card', () => {
  expect(getCardPaymentSystem('376992587073408')).toBe('americanExpress');
});

test('maestro card', () => {
  expect(getCardPaymentSystem('6759649826438453')).toBe('maestro');
});

test('discover card', () => {
  expect(getCardPaymentSystem('65503556883030195')).toBe('discover');
});

test('mir card', () => {
  expect(getCardPaymentSystem('2200982205799227')).toBe('mir');
});

test('other card', () => {
  expect(getCardPaymentSystem('57271832022841')).toBe('other');
});
