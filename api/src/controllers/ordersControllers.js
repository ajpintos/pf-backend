const {Orders, Products} = require("../db");

const getAllUsersOrders = async () => {
    const allOrders = await Orders.findAll();
    if (!allOrders) throw Error ("Did not found users in DB")
    else return allOrders;
}

const createOrder = async (id, amount, taxAmount, totalAmount, orderStatus) => {
    const order = await Orders.create({
        id,
        amount,
        taxAmount,
        totalAmount,
        orderStatus
    });
    if (!order) throw Error ("Did not create order in DB")
    else return order;
}

const updateOrder = async (id, amount, taxAmount, totalAmount, orderStatus) => {
    const order = await Orders.update({
        id,
        amount,
        taxAmount,
        totalAmount,
        orderStatus
    });
    if (!order) throw Error ("Did not update order in DB")
    else return order;
}

const updateOrderStatus = async (id, orderStatus) => {
    let orderUpdate = await Orders.findByPk(id);
    if (orderUpdate === null) return null;
    orderUpdate.status = orderStatus;
    orderUpdate.save();
    return orderUpdate;
};

const findOrderById = async (id) => {
    const order = await Orders.findByPk(id);
    if (!order) throw Error ("Did not found order in DB")
    else return order;
}