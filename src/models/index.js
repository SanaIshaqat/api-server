'use strict';

require('dotenv').config();

const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;

const { Sequelize, DataTypes } = require('sequelize');

let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
} : {};

let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);
//////////////////////
const clothesSchema = require('./clothes.schema');
const foodSchema = require('./food.schema');

const clothesModel = clothesSchema(sequelize,DataTypes);
const foodModel = foodSchema(sequelize,DataTypes); 


// clothesModel.hasMany(foodModel,{foreignKey:'clothesId',sourceKey:'id'});
// foodModel.belongsTo(clothesModel,{foreignKey:'clothesId',targetKey:'id'})

const Collection = require('./lib/collection.js');


const clothesCollection = new Collection(clothesModel);
const foodCollection = new Collection(foodModel);

module.exports = {
  db: sequelize,
  clothesCollection: clothesCollection,
  foodCollection: foodCollection
};