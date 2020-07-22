const stripe = require('../helpers/stripe');

const postStripeCharge = res => (stripeErr, stripeRes) => {
    if (stripeErr) {
        res.status(500).send({ error: stripeErr });
    } else {
        res.status(200).send({ success: stripeRes });
    }
}

// const paymentApi = app => {
//     app.get('/', (req, res) => {
//         res.send({ message: 'Hello Stripe checkout server!', timestamp: new Date().toISOString() })
//     });

//     app.post('/', (req, res) => {
//         stripe.charges.create(req.body, postStripeCharge(res));
//     });

//     return app;
// };

exports.getPaymentApi = (req, res) => {
    res.send({ message: 'Hello Stripe checkout server!', timestamp: new Date().toISOString() })
}
exports.postPaymentApi = (req, res) => {
    console.log(req.body);
    console.log(postStripeCharge(res))
    stripe.charges.create(req.body, postStripeCharge(res));
}

// module.exports = paymentApi;