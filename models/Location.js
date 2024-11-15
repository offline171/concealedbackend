const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Location = sequelize.define('location', {
  state: {
    type: DataTypes.STRING
  },
  city: {
    type: DataTypes.STRING
  },
  street_address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  zip_code: {
    type: DataTypes.INTEGER
  },
  local_population: {
    type: DataTypes.INTEGER
  },
  tourist_population: {
    type: DataTypes.INTEGER
  },
  population_ratio: {
    type: DataTypes.DOUBLE
  },
  link: {
    type: DataTypes.STRING
  },
  bookmarks: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  rating: {
    type: DataTypes.INTEGER
  }
});

module.exports = Location;
