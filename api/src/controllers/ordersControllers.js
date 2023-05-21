const { Orders, OrdersDetails, Users, Products } = require("../db");

const getAllOrders = async () => {
    return await Orders.findAll();
};

const getOrderById = async (id) => {
    return await Orders.findByPk(id);
};

const postOrder = async (userId) => {
    const userFound = await Users.findByPk(userId);
    if (userFound === null) throw Error('User not found');
    const orderResult = await Orders.create({
        orderStatus: 'Cart',
    });
    if (orderResult === null) return null;
    await userFound.addOrder(orderResult.id);
    return orderResult;
}

const deleteOrder = async (idOrder, status) => {
    const orderDelete = await Orders.findByPk(idOrder);
    if (orderDelete === null) return null;
    orderDelete.orderStatus = status;
    await orderDelete.save();
    const ordersDetailsFound = await Orders.getOrdersDetials();
    for (let i=0; i< ordersDetailsFound; i++) {
        const orderD = await OrdersDetails.findByPk(ordersDetailsFound.id);
        orderD.orderStatus = status;
        await orderD.save();
    }
    return orderDelete;
};

const clearOrder = async (orderId) => {
    const orderClear = await Orders.findByPk(orderId);
    if (orderClear === null) return null;
    const ordersDetailsFound = await Orders.getOrdersDetials();
    for (let i=0; i< ordersDetailsFound; i++) {
        const orderD = await OrdersDetails.findByPk(ordersDetailsFound.id);
        const productId = ordersDetailsFound.productId;
        const product = await Products.findByPk(productId);
        if (product === null) throw Error('Product not found');
        await orderClear.removeOrdersDetails(ordersDetailsFound.id);
        await product.removeOrdersDetails(ordersDetailsFound.id);
        await orderD.destroy();
    };
    orderClear.amount = tAmount;
    orderClear.taxAmount = tTaxAmount;
    orderClear.totalAmount = tTotalAmount;
    await orderClear.save();
    return orderDelete;
};

module.exports = {
    getAllOrders,
    getOrderById,
    postOrder,
    deleteOrder,
    clearOrder,
};