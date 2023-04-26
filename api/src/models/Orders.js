const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("orders", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    userId: {
      type: DataTypes.STRING(100),
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