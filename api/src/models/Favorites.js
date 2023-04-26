const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("favorites", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    productId: {
      type: DataTypes.UUID,
    },
    userId: {
      type: DataTypes.STRING(100),
    },
    active: {
      type: DataTypes.BOOLEAN,
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