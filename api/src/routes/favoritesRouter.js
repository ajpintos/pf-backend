const { Router } = require('express');

// Requerir todos los handlers
// ejemplo: const handlerFavorites = require('../handlers/handlerFavorites)



// Requerir todos los middlewares para validar datos
// ejemplo: const helperFavorites = require('../helpers/handlerFavorites)




const favoritesRouter = Router();

// Especificar todas las peticiones
// ejemplo: favoritesRouter.get('/favorites', helperFavorites, handlerFavorites)







module.exports = favoritesRouter;
