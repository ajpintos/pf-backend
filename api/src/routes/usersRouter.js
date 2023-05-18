const { Router } = require("express");
// Requerir todos los handlers

// ejemplo: const handlerUsers = require('../handlers/handlerUsers)
// Requerir todos los middlewares para validar datos
const { getUsersHandler , postUserHandler , loginUserHandler , updateUserDBHandler, loginUserGoogleHandler } = require("../handlers/usersHandlers.js");

// ejemplo: const helperUsers = require('../helpers/handlerUsers)

const usersRouter = Router();
// Especificar todas las peticiones
// ejemplo: usersRouter.get('/users', helperUser, handlerUser)
usersRouter.get("/", getUsersHandler);

//Get router para el inicio de sesión con google
usersRouter.get("/login/google", loginUserGoogleHandler);

//Post router para la creación del usuario
usersRouter.post("/", postUserHandler);

//Get router para el inicio de sesión
usersRouter.post("/login", loginUserHandler);

//Put router para modificar los datos del usuario
usersRouter.put("/", updateUserDBHandler);

/*usersRouter.get("/userOrders") */
// usersRouter.get("/userOrders", getUserOrders);

module.exports = usersRouter;
