// const { getOrdersDB, addOrders } = require("../controllers/ordersControllers.js");

// const getAllOrders = async ( req , res ) => {
//     try {
//         const allOrdersDB = await getOrdersDB();
//         res.status(200).json(allOrdersDB);
//     } catch (error) {
//         res.status(400).json({ error : error.message})
//     }
// };

// const addOrderUser = async ( req , res ) => {
//     const { userEmail , orderID } = req.body;
//     try {
//         const user = await addOrders( userEmail , orderID );
//         res.status(200).json("ok");
//     } catch (error) {
//         res.status(400).json({ error : error.message });
//     }
// }

// module.exports = {
//     getAllOrders,
//     addOrderUser
// }