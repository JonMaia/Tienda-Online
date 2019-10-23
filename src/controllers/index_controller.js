const stripe = require('stripe')('sk_test_JMBBzJJtkO08EKkA3SPIDqKD00Y1uEgDce');

module.exports = class IndexController {

    static hello(req, res) {
        res.render('index');
    }

    static async checkout(req, res) {
        console.log(req.body);
        // Creo un comprador
        const customer = await stripe.customers.create({
                                    email: req.body.stripeEmail,
                                    source: req.body.stripeToken,
                               });
        // Creo una compra
        const charge = await stripe.charges.create({
                                    amount: '2000',
                                    currency: 'usd',
                                    description: 'Keyboard Gamer for FIFA 20',
                                    customer: customer.id
                             });
        console.log(charge.id);
        res.render('download');
    }

}