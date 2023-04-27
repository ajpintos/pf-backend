const getAllProducts = async () => {
    return await Products.findAll({ include : { model: Ratings }});
};

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

const addProductsDB = async (arrayProducts) => {
    return await Products.bulkCreate(arrayProducts)
};

const getFavorites = async () => {
    return await Products.findAll({ where : { productFavorite : true }}) // productFavorite seria la relación de la tabla de producto con favorito
}

module.exports = {
    getAllProducts,
    searchProduct,
    addUser,
    addProductsDB,
    getFavorites
}