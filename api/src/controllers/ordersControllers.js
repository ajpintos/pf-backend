// const { Orders , Users } = require("../db.js");

// const getOrdersDB = async () => {
//     const ordersDB = await Orders.findAll();
//     if (!ordersDB) throw Error("Did not found orders in DB");
//     else return ordersDB;
// }

// const addOrders = async (userEmail , orderID ) => {
//     const user = await Users.findByPk(userEmail);
//     if (user) return await Users.addOrders(orderID);
//     else throw Error ("Did not found user");
// }

// module.exports = {
//     getOrdersDB,
//     addOrders
// }