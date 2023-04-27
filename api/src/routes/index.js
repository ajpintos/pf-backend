const { Router } = require('express');

// Aquí requerir las rutas en constantes de sus archivos respectivos
// ejemplo: const usersRouter = require('./usersRouter)

const usersRouter = require('./usersRouter');
const categoriesRouter = require('./categoriesRouter');
const productsRouter = require('./productsRouter');
const ordersRouter = require('./ordersRouter');
const favoritesRouter = require('./favoritesRouter');


const mainRouter = Router()


// Configurar los routers
// ejemplo mainRouter.use('/users', usersRouter)


mainRouter.use('/users', usersRouter);
mainRouter.use('/categories', categoriesRouter);
mainRouter.use('/products', productsRouter);
mainRouter.use('/orders', ordersRouter);
mainRouter.use('/favorites', favoritesRouter);


module.exports = mainRouter;