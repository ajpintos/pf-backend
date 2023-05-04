const { createUser , getAllUsersDB, getUserDB , loginUser , updateUserDB } = require("../controllers/usersControllers.js")

const postUserHandler = async (req, res) => {
    const { email , password , firstname , lastname , address , cp , city , country , phone } = req.body;
    try {
        const newUser = await createUser( email , password , firstname , lastname , address , cp , city , country , phone )
        res.status(200).send(newUser);
    } catch (error) {
        res.status(400).json({ error : error.message });
    }
};

const getAllUsersHandler = async (req, res) => {
    try {
        const allUsersDB = await getAllUsersDB();
        res.status(200).json(allUsersDB);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getUserHandler = async (req, res) => {
    const { userEmail } = req.params;
    try {
        const user = getUserDB(userEmail);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const loginUserHandler = async (req, res) => {
    const { email , password } = req.body;
    try {
        const user = loginUser(email, password);
        if (user) req.session.user = user;
        res.status(200).send("Login successfull");
    } catch (error) {
        res.status(400).json({ error : error.message});
    }
}

const updateUserDBHandler = async (req,res) => {
    const { email , password , firstname , lastname , address , cp , city , country , phone } = req.body;
    try {
        const userUpdate = await updateUserDB( email , password , firstname , lastname , address , cp , city , country , phone );
        res.status(201).json(userUpdate);
    } catch (error) {
        res.status(400).json({ error : error.message});
    }
}

// const getUserOrders = async (req, res) => {
//     const { userEmail } = req.body;
//     try {
//         const userOrders = getUserOrdersDB(userEmail);
//         res.status(200).json(userOrders);
//     } catch (error) {
//         res.status(400).json({ error : error.message })
//     }
// };

module.exports = {
    postUserHandler,
    getAllUsersHandler,
    getUserHandler,
    loginUserHandler,
    updateUserDBHandler
};

// exports.login = async (req, res) => {
//   const { email, password } = req.body;

//   // Verificar si el usuario existe en la base de datos
//   const user = await User.findOne({
//     where: {
//       email,
//     },
//   });

//   if (!user) {
//     return res.status(401).json({ message: 'Correo electrónico o contraseña incorrectos' });
//   }

//   // Verificar si la contraseña es correcta
//   const isPasswordCorrect = await bcrypt.compare(password, user.password);

//   if (!isPasswordCorrect) {
//     return res.status(401).json({ message: 'Correo electrónico o contraseña incorrectos' });
//   }

//   // Iniciar sesión del usuario
//   req.session.user = user;

//   res.json({ message: 'Ingreso exitoso' });
// };