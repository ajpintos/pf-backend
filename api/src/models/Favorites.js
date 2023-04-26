const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("favorites", {
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
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    updated: {
      //! Revisar porque en el modelo no está
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },{
    timestamps: false,
  });
};