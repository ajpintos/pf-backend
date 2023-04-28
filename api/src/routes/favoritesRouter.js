const { Router } = require('express');
const {getAllFavoritesController} =require('../controllers/favoritesControllers')

// Requerir todos los handlers
// ejemplo: const handlerFavorites = require('../handlers/handlerFavorites)



// Requerir todos los middlewares para validar datos
// ejemplo: const helperFavorites = require('../helpers/handlerFavorites)


console.log('en ruta')

const favoritesRouter = Router();

// Especificar todas las peticiones
// ejemplo: favoritesRouter.get('/favorites', helperFavorites, handlerFavorites)

favoritesRouter.get('/', getAllFavoritesController)






module.exports = favoritesRouter;
