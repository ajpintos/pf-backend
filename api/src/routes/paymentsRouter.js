const { Router } = require('express');

// Requerir todos los handlers
// ejemplo: const handlerProducts = require('../handlers/handlerProducts)

const { paymentHandler , paymentNotificationHandler, paySuccessHandler } = require("../handlers/paymentsHandlers.js");

const paymentsRouter = Router();

paymentsRouter.get('/success', paySuccessHandler);
paymentsRouter.get('/notifications', paymentNotificationHandler);
paymentsRouter.post('/', paymentHandler);
// paymentsRouter.post('/notifications', paymentNotificationHandler);

module.exports = paymentsRouter;