const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Bookmark = sequelize.define('bookmark', {
  customer_id: {
    type: DataTypes.STRING,
    allowNull: false
  },
  location_id: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Bookmark;
