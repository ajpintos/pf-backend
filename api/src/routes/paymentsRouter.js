const { Router } = require('express');

// Requerir todos los handlers
// ejemplo: const handlerProducts = require('../handlers/handlerProducts)

const { paymentHandler , paymentNotificationHandler, paySuccsessHandler } = require("../handlers/paymentsHandlers.js");

const paymentsRouter = Router();

paymentsRouter.get('/success', paySuccsessHandler);
paymentsRouter.post('/', paymentHandler);
paymentsRouter.post('/notifications', paymentNotificationHandler);
// paymentsRouter.post('/notifications', paymentNotificationHandler);

module.exports = paymentsRouter;