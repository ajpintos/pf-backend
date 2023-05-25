const mercadopago = require("mercadopago");
require('dotenv').config();

//////////////////////////////////////////////////////////////
const paymentNotificationHandler = async (req, res) => {
    try {
let merchant_order = null;

switch (req.query.topic) {
    case 'payment':
        mercadopago.payment.findById(req.query.id)
            .then(payment => {
                merchant_order = mercadopago.merchantOrders.findById(payment.order.id);
            })
            .catch(error => {
                console.log(error);
            });
        break;
    case 'merchant_order':
        merchant_order = mercadopago.merchantOrders.findById(req.query.id)
            .catch(error => {
                console.log(error);
            });
        break;
}

let paid_amount = 0;


merchant_order.then(order => {
    order.payments.forEach(payment => {
        if (payment.status === 'approved') {
            paid_amount += payment.transaction_amount;
        }
    });

    if (paid_amount >= order.total_amount) {
        if (order.shipments.length > 0) {
            if (order.shipments[0].status === 'ready_to_ship') {
                console.log('Totally paid. Print the label and release your item.');
            }
        } else {
            console.log('Totally paid. Release your item.');
        }
    } else {
        console.log('Not paid yet. Do not release your item.');
    }

})}
catch (error)
{
    res.status(400).send({error: error.message});
}};

//////////////////////////////////////////////////////////////
const paymentHandler = async (req, res) => {
    const { id , name , image , description , price } = req.body;
    try {
        let preference = {
            items: [{
                id: id,
                title: name,
                currency_id: "UYU",
                picture_url: image,
                description: description,
                category_id: "articulo",
                quantity: 1,
                unit_price: price
            }],
            back_urls: {
                success: "http://127.0.0.1:5173/",
                failure: "http://127.0.0.1:5173/",
                pending: "",
            },
            auto_return: "approved",
            binary_mode: true,
        }
    mercadopago.preferences.create(preference)
    .then((response) => res.status(200).send({response}))
    .catch((error) => res.status(400).send({error}));

} catch (error) {
    res.status(400).send({error:error.message});
}
};

module.exports = {
    paymentHandler,
    paymentNotificationHandler
}
