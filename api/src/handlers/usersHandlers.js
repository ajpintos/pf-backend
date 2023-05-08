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

// const getUserHandler = async (req, res) => {
//     const { userEmail } = req.params;
//     try {
//         const user = await getUserDB(userEmail);
//         res.status(200).json(user);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// }

const loginUserHandler = async (req, res) => {
    const { email , password } = req.query;
    try {
        const user = await loginUser(email, password);
        if (user) res.status(200).send(user);
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
    loginUserHandler,
    updateUserDBHandler
};