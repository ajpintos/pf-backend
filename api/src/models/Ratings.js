const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("ratings", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    productId: {
      //! Aca debería ir una FK
      type: DataTypes.UUID,
    },
    userId: {
      //! Aca debería ir una FK
      type: DataTypes.STRING(100),
    },
    stars: {
      type: DataTypes.INTEGER,
    },
    updated: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },{
    timestamps: false,
  });
};