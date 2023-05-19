const { Orders, OrdersDetails, Users } = require("../db");

const getAllOrders = async () => {
    return await Orders.findAll();
    //     {
    //     include : [
    //         {
    //             model: OrdersDetails,
    //             attributes: ['id'],
    //             through: {
    //                 attributes: [],
    //             }
    //         },
    //         {
    //             model: Users,
    //             attributes: ['email', 'firstname', 'lastname'],
    //             through: {
    //                 attributes: [],
    //             }
    //         }
    //     ]
    // });
};

const getOrderById = async (id) => {
    return await Orders.findByPk(id);
    //     , {
    //     include : [
    //         {
    //             model: OrdersDetails,
    //             attributes: ['id'],
    //             through: {
    //                 attributes: [],
    //             }
    //         },
    //         {
    //             model: Users,
    //             attributes: ['email', 'firstname', 'lastname'],
    //             through: {
    //                 attributes: [],
    //             }
    //         }
    //     ]
    // });
};

const postOrder = async (userId) => {
    const userFound = await Users.findByPk(userId);
    if (userFound === null) throw Error('User not found');
    const orderResult = await Orders.create({
        orderStatus: 'Cart',
    });
    if (orderResult === null) return null;
    userFound.addOrder(orderResult.id);
    return orderResult;
}

const putOrder = async ({ id, amount, taxAmount, totalAmount, orderStatus }) => {
    const orderPut = await Orders.findByPk(id, {
        include : [{
            model: OrdersDetails,
            attributes: ['id', 'name'],
            through: {
                attributes: [],
            }
        }]});
    if (orderPut === null) return null;
    orderPut.amount =  amount;
    orderPut.taxAmount =  taxAmount;
    orderPut.totalAmount =  totalAmount;
    orderPut.orderStatus =  orderStatus;
    orderPut.save();

    return orderPut;
};

const deleteOrder = async (idOrder, status) => {
    const orderDelete = await Orders.findByPk(idOrder, {
        include : [{
            model: OrdersDetails,
            attributes: ['id', 'name'],
            through: {
                attributes: [],
            }
        }]});
    if (orderDelete === null) return null;
    orderDelete.orderStatus = status;
    orderDelete.save();
    return orderDelete;
};



module.exports = {
    getAllOrders,
    getOrderById,
    postOrder,
    putOrder,
    deleteOrder,
}