const { Router } = require('express');

// Requerir todos los handlers
// ejemplo: const handlerProducts = require('../handlers/handlerProducts)



// Requerir todos los middlewares para validar datos
// ejemplo: const helperProducts = require('../helpers/handlerProducts)




const productsRouter = Router();

// Especificar todas las peticiones
// ejemplo: productsRouter.get('/products', helperProducts, handlerProducts)







module.exports = productsRouter;