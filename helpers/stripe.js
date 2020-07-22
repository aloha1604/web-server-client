const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = 'sk_test_51H7FKRDMQOKHV8e3G7nopRr8FnxUHOGDmCdDLO1z5NYGaA4ZIVmMdHIWl3pvjEvUBgBeXdfMLrbrdRphNHe7kp52007VbjzVr6';

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;