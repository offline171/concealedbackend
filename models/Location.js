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
  description: {
    type: DataTypes.STRING
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
