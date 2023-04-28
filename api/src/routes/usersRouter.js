const { Router } = require('express');
// Requerir todos los handlers

// ejemplo: const handlerUsers = require('../handlers/handlerUsers)
// Requerir todos los middlewares para validar datos
const { getAllUsersController } = require('../controllers/controllers');

// ejemplo: const helperUsers = require('../helpers/handlerUsers)


const usersRouter = Router();
// Especificar todas las peticiones
// ejemplo: usersRouter.get('/users', helperUser, handlerUser)
usersRouter.get('/',getAllUsersController)
/*usersRouter.get('/:id', getUserIdHandler)
usersRouter.post('/', postCreateUser)*/




module.exports = usersRouter;
