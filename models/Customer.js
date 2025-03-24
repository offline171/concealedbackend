const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Customer = sequelize.define('customer', {
  firstName: {
    type: DataTypes.STRING
  },
  lastName: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  lastLogin: {
    type: DataTypes.DATE
  },
  preferences: {
    theme: {
      type: DataTypes.STRING
    },
    emailNotifications: {
      type: DataTypes.BOOLEAN
    }
  }
});

module.exports = Customer;
