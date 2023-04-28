const { createUser , getAllUsersDB } = require("../controllers/usersControllers.js")

const postUsers = async (req, res) => {
    const { email , password , firstname , lastname , adress , cp , city , phone } = req.body;
    try {
        const newUser = await createUser( email , password , firstname , lastname , adress , cp , city , phone )
        res.status(200).send(newUser);
    } catch (error) {
        res.status(400).send({ error : error.message });
    }
}

const getAllUsers = async (req, res) => {
    try {
        const allUsersDB = await getAllUsersDB();
        res.status(200).json(allUsersDB);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    postUsers,
    getAllUsers
}