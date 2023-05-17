const { Router } = require('express');

// Requerir todos los handlers
// ejemplo: const handlerProducts = require('../handlers/handlerProducts)

const { paymentHandler } = require('../handlers/paymentsHandlers');

const paymentsRouter = Router();

paymentsRouter.post('/', paymentHandler);

module.exports = paymentsRouter;