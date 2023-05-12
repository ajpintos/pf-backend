const { Router } = require("express");
// Requerir todos los handlers

// ejemplo: const handlerUsers = require('../handlers/handlerUsers)
// Requerir todos los middlewares para validar datos
const { getAllUsersHandler , postUserHandler , loginUserHandler , updateUserDBHandler } = require("../handlers/usersHandlers.js");

// ejemplo: const helperUsers = require('../helpers/handlerUsers)

const usersRouter = Router();
// Especificar todas las peticiones
// ejemplo: usersRouter.get('/users', helperUser, handlerUser)
usersRouter.get("/", getAllUsersHandler);

//Get router para el inicio de sesión
usersRouter.get("/login", loginUserHandler);

//Post router para la creación del usuario
usersRouter.post("/", postUserHandler);

//Put router para modificar los datos del usuario
usersRouter.put("/", updateUserDBHandler);

/*usersRouter.get("/userOrders") */
// usersRouter.get("/userOrders", getUserOrders);

module.exports = usersRouter;
