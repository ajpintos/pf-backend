const mercadopago = require("mercadopago");
require('dotenv').config();


mercadopago.configure({access_token: process.env.MERCADOPAGO_KEY});

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
                success: "/checkout/success",
                failure: "/checkout/failure",
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
    paymentHandler
}
