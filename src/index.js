import verifyCard from './verifyCard';
import getCardPaymentSystem from './getCardPaymentSystem';

const cardValidateElement = document.getElementById('card-validate');
const cardInputElement = document.getElementById('card-input');
const errorElement = document.getElementById('error');
const paymentSystemElements = document.getElementsByClassName('payment-system');

cardValidateElement.addEventListener('click', () => {
  const cardNumber = cardInputElement.value;
  if (verifyCard(cardNumber) === false) {
    errorElement.textContent = 'Ошибка, неверные данные';
    return;
  }

  for (const paymentSystemElement of paymentSystemElements) {
    paymentSystemElement.classList.add('disabled');
  }

  const paymentSystemName = getCardPaymentSystem(cardNumber);
  const paymentSystemLogo = document.getElementById(paymentSystemName);
  paymentSystemLogo.classList.remove('disabled');
});
