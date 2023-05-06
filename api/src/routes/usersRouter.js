const { Router } = require("express");
// Requerir todos los handlers

// ejemplo: const handlerUsers = require('../handlers/handlerUsers)
// Requerir todos los middlewares para validar datos
const { getAllUsersHandler , getUserHandler , postUserHandler , loginUserHandler , updateUserDBHandler } = require("../handlers/usersHandlers.js");

// ejemplo: const helperUsers = require('../helpers/handlerUsers)

const usersRouter = Router();
// Especificar todas las peticiones
// ejemplo: usersRouter.get('/users', helperUser, handlerUser)
usersRouter.get("/", getAllUsersHandler);

/*usersRouter.get('/:id', getUserIdHandler)*/
usersRouter.get("/:userEmail",getUserHandler);

/*usersRouter.get("/userOrders") */
// usersRouter.get("/userOrders", getUserOrders);

//Post router para la creación del usuario
usersRouter.post("/", postUserHandler);

//Post router para el inicio de sesión
usersRouter.post("/login", loginUserHandler);

usersRouter.put("/", updateUserDBHandler);

module.exports = usersRouter;
