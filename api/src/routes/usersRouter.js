const { Router } = require("express");
// Requerir todos los handlers

// ejemplo: const handlerUsers = require('../handlers/handlerUsers)
// Requerir todos los middlewares para validar datos
const { getAllUsers , getUser , postUsers } = require("../handlers/usersHandlers.js");

// ejemplo: const helperUsers = require('../helpers/handlerUsers)

const usersRouter = Router();
// Especificar todas las peticiones
// ejemplo: usersRouter.get('/users', helperUser, handlerUser)
usersRouter.get("/", getAllUsers);

/*usersRouter.get('/:id', getUserIdHandler)*/
usersRouter.get("/:userEmail",getUser);

/*usersRouter.get("/userOrders") */
// usersRouter.get("/userOrders", getUserOrders);

usersRouter.post("/", postUsers);

module.exports = usersRouter;
