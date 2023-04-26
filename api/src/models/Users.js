const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("users", {
    email: {
      type: DataTypes.STRING(100),
      primaryKey: true,
    },
    password: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    firstname: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING(250),
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
    costumerStatus: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    },
    purchase: {
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