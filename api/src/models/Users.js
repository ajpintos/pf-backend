const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("users", {
    email: {
      type: DataTypes.STRING(100),
      primaryKey: true,
    },
    password: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    firstname: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(255),
    },
    cp: {
      type: DataTypes.INTEGER(10),
    },
    city: {
      type: DataTypes.STRING(50),
    },
    country: {
      type: DataTypes.STRING(50)
    },
    phone: {
      type: DataTypes.STRING(50),
    },
    customerStatus: {
      //! Aca se cambio costumer por customer
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    },
    purchase: {
      //! Aca debería ir una FK
    type: DataTypes.INTEGER,
    },
    userType: {
    type: DataTypes.STRING(50),
    },
    updated: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    },
  },{
    timestamps: false,
  });
};