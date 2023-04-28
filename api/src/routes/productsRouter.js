const { Router } = require('express');

// Requerir todos los handlers
// ejemplo: const handlerProducts = require('../handlers/handlerProducts)

const { getAllProducts} = require('../controllers/controllers');


const productsRouter = Router();

// Especificar todas las peticiones
// ejemplo: productsRouter.get('/products', helperProducts, handlerProducts)

productsRouter.get('/', getAllProducts);



module.exports = productsRouter;