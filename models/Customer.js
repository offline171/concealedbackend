const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Customer = sequelize.define('customer', {
  customer_name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  state: {
    type: DataTypes.STRING
  },
  city: {
    type: DataTypes.STRING
  },
  street_address: {
    type: DataTypes.STRING
  },
  zip_code: {
    type: DataTypes.INTEGER
  }
});

module.exports = Customer;
