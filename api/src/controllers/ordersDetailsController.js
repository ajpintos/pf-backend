const { Op } = require('sequelize');
const { Orders, OrdersDetails, Products } = require('../db');

const getAllOrdersDetails = async () => {
  return await OrdersDetails.findAll();
};



const getOrderDetailsById = async (orderDetailId) => {
  return await OrdersDetails.findByPk(orderDetailId);
};



const postOrderDetail = async (orderDetail) => {

  const { idOrder, idProduct, units } = orderDetail;
  const product = await Products.findByPk(idProduct);
  if (product === null) throw Error('Product not found');
  let order = await Orders.findByPk(idOrder);
  if (order === null) throw Error('Order not found');
  
  // localizar el detalle de la orden
  let getOrDet = await order.getOrdersDetails();
  
  // Revisar si existe el detalle con el producto agregado
  let orderDetailFound = null;
  for (let i=0; i < getOrDet.length; i++) {
    // busco el Detail de la orden
    const productOrderDetail = await OrdersDetails.findByPk(getOrDet[i].id);
    // comparo el producto del Detail con el producta a agregar
    if (productOrderDetail.productId === idProduct) {
      // como lo encontre lo asigno como id de busqueda
      orderDetailFound = getOrDet[i];
      i = getOrDet.lenght;
    };
  };

  // Crear o actualizar el detalle de la orden según el caso
  let orderDetailAdd;
  if (orderDetailFound === null) {
    const detailOrder = {
      units: units,
      amount: units * product.price,
      taxAmount: (units * product.price) * product.tax,
      totalAmount: ((units * product.price) * product.tax) + (units * product.price),
      status: 'Cart'
    };
    orderDetailAdd = await OrdersDetails.create(detailOrder);
    order.addOrdersDetails(orderDetailAdd.id);
    product.addOrdersDetails(orderDetailAdd.id);
  } else {
    orderDetailAdd = await OrdersDetails.findByPk(orderDetailFound.id);
    const unitsAdd = orderDetailAdd.units + units;
    orderDetailAdd.units = unitsAdd;
    orderDetailAdd.amount = unitsAdd * product.price;
    orderDetailAdd.taxAmount = (unitsAdd * product.price) * product.tax;
    orderDetailAdd.totalAmount = ((unitsAdd * product.price) * product.tax) + (unitsAdd * product.price);
    orderDetailAdd.save();
  };

  // totales de la orden
  order = await Orders.findByPk(idOrder);
  getOrDet = await order.getOrdersDetails();
  let tAmount = 0;
  let tTaxAmount = 0;
  let tTotalAmount = 0;
  for (let i=0; i < getOrDet.length; i++) {
    const orderDetail = await OrdersDetails.findByPk(getOrDet[i].id);
    tAmount += orderDetail.amount;
    tTaxAmount += orderDetail.taxAmount;
    tTotalAmount += orderDetail.totalAmount;
  };
  order.amount = tAmount;
  order.taxAmount = tTaxAmount;
  order.totalAmount = tTotalAmount;
  order.save();


  return orderDetailAdd;
};



const putOrderDetail = async (orderDetail) => {
  const { orderDetail, units } = orderDetail;

  // busqueda de registros en orders, products y ordersDetails
  const orderDetailResult = await OrdersDetails.findByPk(orderDetailId);
  if (orderDetailResult === null) throw Error('Order Detail not found');
  const orderId = orderDetailResult.orderId;
  const order = await Orders.findByPk(orderId);
  if (order === null) throw Error('Order not found');
  const productId = orderDetailResult.productId;
  const product = await Products.findByPk(productId);
  if (product === null) throw Error('Product not found');

  // asignar nuevos valores
  orderDetailResult.units = units;
  orderDetailResult.amount = units * product.price;
  orderDetailResult.taxAmount = (units * product.price) * product.tax;
  orderDetailResult.totalAmount = ((units * product.price) * product.tax) + (units * product.price);
  orderDetailResult.save();

  // totales de la orden
  order = await Orders.findByPk(orderId);
  getOrDet = await order.getOrdersDetails();
  let tAmount = 0;
  let tTaxAmount = 0;
  let tTotalAmount = 0;
  for (let i=0; i < getOrDet.length; i++) {
    const orderDetail = await OrdersDetails.findByPk(getOrDet[i].id);
    tAmount += orderDetail.amount;
    tTaxAmount += orderDetail.taxAmount;
    tTotalAmount += orderDetail.totalAmount;
  };
  order.amount = tAmount;
  order.taxAmount = tTaxAmount;
  order.totalAmount = tTotalAmount;
  order.save();

  return orderDetailResult;
};



const deleteOrderDetail = async (idDetail) => {

  // busqueda de registros en orders, products y ordersDetails
  const orderDetailResult = await OrdersDetails.findByPk(idDetail);
  if (orderDetailResult === null) throw Error('Order Detail not found');
  const orderId = orderDetailResult.orderId;
  const order = await Orders.findByPk(orderId);
  if (order === null) throw Error('Order not found');
  const productId = orderDetailResult.productId;
  const product = await Products.findByPk(productId);
  if (product === null) throw Error('Product not found');






  return orderDetailResult;
};  

module.exports = {
  getAllOrdersDetails,
  getOrderDetailsById,
  postOrderDetail,
  putOrderDetail,
  deleteOrderDetail,
}