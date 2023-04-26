const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("orders", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    userId: {
      //! Aca debería ir una FK
      type: DataTypes.STRING(100),
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