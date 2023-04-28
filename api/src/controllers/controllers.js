const { Products , Users , Ratings } = require('../db.js');

const getAllProducts = async (req, res) => {
    try {
        console.log("Estoy en el controller de Products")
        const productsFromDb = await Products.findAll({ include : { model: Ratings }});
        if(productsFromDb.length === 0) throw Error("No hay productos en la DB");
        res.status(200).json(productsFromDb);
    } catch (error) {
        console.error('Error al mostrar los Products de la DB:', error);
        res.status(400).json({ error: error.message });
    }
}


const searchProduct = async (name) => {
    const search = await Products.findAll ({ where: { name }})
    if (search) return search
    else throw Error("Product did not found");
};

const addUser = async ( email , password , firstname , lastname , adress , cp , city , phone ) => {
    const newUser = await Users.findByPk(email);
    if (!newUser) {
        await Users.create({ email , password , firstname ,  lastname , adress , cp , city , phone })
        return "User Created succesfully";
    } else return "Email already exist";
};

//! Nuevo controller agregado
const getAllUsersController = async (req, res) => {
    try {
        console.log("Estoy en el controller de Users")
        const usersFromDb = await Users.findAll();
        if(usersFromDb.length === 0) throw Error("No hay Users en la DB");
        res.status(200).json(usersFromDb);
    } catch (error) {
        console.error('Error al mostrar los Users de la DB:', error);
        res.status(400).json({ error: error.message });
    }
}



const addProductsDB = async (arrayProducts) => {
    return await Products.bulkCreate(arrayProducts)
};

const getFavorites = async () => {
    return await Products.findAll({ where : { productFavorite : true }}) // productFavorite seria la relación de la tabla de producto con favorito
}

module.exports = {
    getAllProducts,
    getAllUsersController,
    searchProduct,
    addUser,
    addProductsDB,
    getFavorites
}