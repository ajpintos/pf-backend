const {Payments, Orders, Users} = require("../db.js");

const addPaymentUser = async (payment_id, status, payment_type, orderId) => {
    const userFindOrder = await Users.findOne({
        include: [
            {
                model: Order,
                where: {
                    id: orderId
                }
            }
        ]
    });
    if (userFindOrder) {
        const payment = await Payments.create({id:data.payment_id, name:data.payment_type, status:data.status});
        await payment.setOrder(userFindOrder);
        console.log("Payment:", payment)
        return payment;
    }
}

module.exports = addPaymentUser;