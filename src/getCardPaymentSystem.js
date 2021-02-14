const VISA_PREFIXES = ['4', '4026', '417500', '4508', '4844', '4913', '4917'];
const MASTERCARD_PREFIXES = ['51', '52', '53', '54', '55'];
const AMERICANEXPRESS_PREFIXES = ['34', '37'];
const MAESTRO_PREFIXES = ['6759', '676770', '676774', '5018', '5020', '5038', '5893', '6304', '6759', '6761', '6762', '6763'];
const MIR_PREFIXES = ['2200', '2201', '2202', '2203', '2204'];

const DISCOVER_PREFIXES = ['6011', '644', '645', '646', '647', '648', '649', '65'];
for (let i = 622126; i <= 622925; i += 1) {
  DISCOVER_PREFIXES.push(i);
}

const PREFIXES = [
  { name: 'visa', prefixes: VISA_PREFIXES },
  { name: 'mastercard', prefixes: MASTERCARD_PREFIXES },
  { name: 'americanExpress', prefixes: AMERICANEXPRESS_PREFIXES },
  { name: 'maestro', prefixes: MAESTRO_PREFIXES },
  { name: 'discover', prefixes: DISCOVER_PREFIXES },
  { name: 'mir', prefixes: MIR_PREFIXES },
];

export default function getCardPaymentSystem(cardNumber) {
  for (const { name, prefixes } of PREFIXES) {
    for (const prefix of prefixes) {
      if (cardNumber.startsWith(prefix)) {
        return name;
      }
    }
  }
  return 'other';
}
