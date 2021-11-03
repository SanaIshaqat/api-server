'use strict';


const Food = (sequelize, DataTypes) => sequelize.define('food', {

  foodName: {
    type: DataTypes.STRING,
    allowNull: false
  },

  foodOrigin: {
    type: DataTypes.STRING,
  },
  // clothesId:{
  //   type: DataTypes.INTEGER,
  //   allowNull: false
  // }
});

module.exports = Food;
