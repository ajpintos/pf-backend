const { Router } = require('express');

// Requerir todos los handlers
// ejemplo: const handlerProducts = require('../handlers/handlerProducts)

const { paymentHandler, paymentNotificationHandler } = require('../handlers/paymentsHandlers');

const paymentsRouter = Router();

paymentsRouter.post('/', paymentHandler);
paymentsRouter.post('/notifications', paymentNotificationHandler);

module.exports = paymentsRouter;