const { Router } = require('express');

// Requerir todos los handlers
// ejemplo: const handlerProducts = require('../handlers/handlerProducts)

const { paymentHandler , notifications} = require("../handlers/paymentsHandlers.js");

const paymentsRouter = Router();

paymentsRouter.get('/success',(req,res) => {
    try {
        res.status(200).send("success")
    } catch (error) {
        res.status(404).send(error)
    }
})
paymentsRouter.post('/', paymentHandler);
paymentsRouter.post('/notifications', notifications)
// paymentsRouter.post('/notifications', paymentNotificationHandler);

module.exports = paymentsRouter;