const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("ordersDetails", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    orderId: {
      type: DataTypes.UUID,
    },
    productId: {
      type: DataTypes.UUID,
    },
    units: {
      type: DataTypes.INTEGER,
    },
    amount: {
      type: DataTypes.FLOAT,
    },
    taxAmount: {
      type: DataTypes.FLOAT,
    },
    totalAmount: {
      type: DataTypes.FLOAT,
    },
    deliveryId: {
      type: DataTypes.UUID,
    },
    paymentId: {
      type: DataTypes.UUID,
    },
    orderStatus: {
      type: DataTypes.STRING(50),
      defaultValue: true,
    },
    updated: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },{
    timestamps: false,
  });
};