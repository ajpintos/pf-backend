const { getAllProducts, getProductsByName, getProductById, postProduct, putProduct, deleteProduct } = require("../controllers/productsController");

const handlerGetProducts = async (req, res) => {
  const { name } = req.query;
  try {
    const productsArray = name 
      ? await getProductsByName(name)
      : await getAllProducts();
    if (productsArray.length < 1) throw Error('No se encontraron Productos');
    res.status(200).json(productsArray);
  } catch (error) {
    res.status(400).send(error.message);
  };  
};

const handlerGetProductById = async (req, res) => {
  const { prodId } = req.params;
  try {
    const product = await getProductById(prodId);
    if (product === null) throw Error('Producto no encontrado');
    res.status(200).json(product);
  } catch (error) {
    res.status(400).send(error.message);
  };  
};

const handlerPostProducts = async (req, res) => {
  const body = req.body;
  try {
    const product = { 
      name: body.name, 
      image: body.image, 
      description: body.description, 
      price: body.price, 
      stock: body.stock, 
      tax: body.tax,
    };
    const categories = body.categories;
    const productResult = await postProduct(product, categories);
    if (productResult === null) throw Error('No se pudo crear el producto');
    res.status(200).json(productResult);
  } catch (error) {
    res.status(400).send(error.message); 
  };  
};

const handlerPutProducts = async (req, res) => {
  const body = req.body;
  try {
    const product = { 
      id: body.id,
      name: body.name, 
      image: body.image, 
      description: body.description, 
      price: body.price, 
      stock: body.stock, 
      tax: body.tax,
    };
    const categories = body.categories;  
    const productResult = await putProduct(product, categories);
    if (productResult === null) throw Error('No se pudo actualizar el producto o producto no encontrado');
    res.status(200).json(productResult);
  } catch (error) {
    res.status(400).send(error.message);
  };  
};

const handlerDeleteProducts = async (req, res) => {
  const body = req.body;
  console.log(body);
  try {
    const idProduct = body.id;
    const active = body.active;
    const productResult = await deleteProduct(idProduct, active);
    if ( productResult === null) throw Error ('No se pudo actualizar el producto o producto no encontrado');
    res.status(200).json(productResult);
  } catch (error) {
    res.status(400).send(error.message);
  };  
};


module.exports = {
  handlerGetProducts,
  handlerGetProductById,
  handlerPostProducts,
  handlerPutProducts,
  handlerDeleteProducts,
};