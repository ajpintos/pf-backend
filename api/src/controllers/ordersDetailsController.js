const { Op } = require('sequelize');
const { Orders, OrdersDetails, Products } = require('../db');

const getAllOrdersDetails = async () => {
  return await OrdersDetails.findAll({ 
    include : [ 
      {
        model: Orders,
        attributes: ['id'],
        through: {
          attributes: [],
        }
      },
      {
        model: Products,
        attributes: ['id', 'name'],
        through: {
          attributes: [],
        }
      }
    ]});
};

const getOrderDetailsById = async (orderDetailId) => {
  return await OrdersDetails.findByPk(orderDetailId, { 
    include : [ 
      {
        model: Orders,
        attributes: ['id'],
        through: {
          attributes: [],
        }
      },
      {
        model: Products,
        attributes: ['id', 'name'],
        through: {
          attributes: [],
        }
      }
    ]});
};

const postOrderDetail = async (orderDetail) => {
  const { idOrder, idProduct, units } = orderDetail;
  const order = await Orders.findByPk(idOrder);
  if (order === null) throw Error('Order not found');
  const product = await Products.findByPk(idProduct);
  if (product === null) throw Error('Product not found');
  const detailOrder = {
    units: units,
    amount: units * product.price,
    taxAmount: (units * product.price) * product.tax,
    totalAmount: ((units * product.price) * product.tax) + (units * product.price),
    status: 'Cart'
  };
  const orderDetailResult = await OrdersDetails.create(detailOrder);
  order.addOrdersDetails(orderDetailResult.id);
  product.addOrdersDetails(orderDetailResult.id);
  return orderDetailResult;
};

const putOrderDetail = async (orderDetail) => {
  const { idDetail, idOrder, idProduct, units } = orderDetail;
  const order = await Orders.findByPk(idOrder);
  if (order === null) throw Error('Order not found');
  const product = await Products.findByPk(idProduct);
  if (product === null) throw Error('Product not found');
  const orderDetailResult = await OrdersDetails.findByPk(idDetail);
  if (orderDetailResult === null) throw Error('Order Detail not found');
  orderDetailResult.units = units;
  orderDetailResult.amount = units * product.price;
  orderDetailResult.taxAmount = (units * product.price) * product.tax;
  orderDetailResult.totalAmount = ((units * product.price) * product.tax) + (units * product.price);
  orderDetailResult.save();
  return orderDetailResult;
};

const deleteOrderDetail = async (idDetail, status) => {
  const orderDetailResult = await OrdersDetails.findByPk(idDetail);
  if (orderDetailResult === null) throw Error('Order Detail not found');
  orderDetailResult.status = status;
  orderDetailResult.save();
  return orderDetailResult;
};  

module.exports = {
  getAllOrdersDetails,
  getOrderDetailsById,
  postOrderDetail,
  putOrderDetail,
  deleteOrderDetail,
}