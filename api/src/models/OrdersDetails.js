const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("ordersDetails", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    orderId: {
      //! Aca debería ir una FK
      type: DataTypes.UUID,
    },
    productId: {
      //! Aca debería ir una FK
      type: DataTypes.UUID,
    },
    units: {
      type: DataTypes.INTEGER,
    },
    amount: {
      type: DataTypes.FLOAT,
    },
    taxAmount: {
      //! Aca debería ir una FK
      type: DataTypes.FLOAT,
    },
    totalAmount: {
      type: DataTypes.FLOAT,
    },
    deliveryId: {
      //! Aca debería ir una FK
      type: DataTypes.UUID,
    },
    paymentId: {
      //! Aca debería ir una FK
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