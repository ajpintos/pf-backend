const { Router } = require('express');

// Requerir todos los handlers
// ejemplo: const handlerOrders = require('../handlers/handlerOrders)
const { getAllOrders, addOrderUser } = require("../handlers/ordersHandlers.js")


// Requerir todos los middlewares para validar datos
// ejemplo: const helperOrders = require('../helpers/handlerOrders)




const ordersRouter = Router();

// Especificar todas las peticiones
// ejemplo: ordersRouter.get('/orders', helperOrders, handlerOrders)

/*ordersRouter.get("/", getAllOrders);
ordersRouter.post("/", addOrderUser);*/





module.exports = ordersRouter;
