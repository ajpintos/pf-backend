const Favorites = require("../models/Favorites");

const getAllFavoritesController = async (req, res) => {
    try {
        console.log("Estoy en el controller de Favorites")
        const favoriteFromDb = await Favorites.findAll({ where : { productFavorite : true }})
        if(favoriteFromDb.length === 0) throw Error("No hay Favorits en la DB");
        res.status(200).json(favoriteFromDb);
    } catch (error) {
        console.error('Error al mostrar los Users de la DB:', error);
        res.status(400).json({ error: error.message });
    }
 }
// const getFavorites = async () => {
//     return await Products.findAll({ where : { productFavorite : true }}) // productFavorite seria la relación de la tabla de producto con favorito
// }
module.exports = {
    getAllFavoritesController
}