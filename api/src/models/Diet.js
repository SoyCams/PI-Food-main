const { DataTypes } = require("sequelize");

module.exports = (Sequelize) => {
  const Diet = Sequelize.define("Diet", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Diet;
};
