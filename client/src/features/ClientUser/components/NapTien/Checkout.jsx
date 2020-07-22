import React from 'react'
import StripeCheckout from 'react-stripe-checkout';


import api from '../../../../utils/api'
const CURRENCY = 'usd';

const fromDollarToCent = amount => parseInt(amount * 100);
const STRIPE_PUBLISHABLE = 'pk_test_51H7FKRDMQOKHV8e31GuYueQGJgnTTBXJihq8lXqwxCmFVHkv7DfcE5lOKs598otryNFjGjPfPrIWlVN1hGUVEjrq00rtdeEEXS';

const successPayment = data => {
  alert('Payment Successful');
};

const errorPayment = data => {
  alert('Payment Error');
};


const onToken = (amount, description) => token =>
  api.post('test/postPaymentApi',
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: amount
    })
    .then(successPayment)
    .catch(errorPayment);

const Checkout = ({ name, description, amount }) =>
  <StripeCheckout
    name={name}
    description={description}
    amount={amount}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
    email
    allowRememberMe
    label="Pay VISA/MASTERCAR"
  />

export default Checkout;