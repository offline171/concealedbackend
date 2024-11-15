const express = require('express');
const sequelize = require('./config/database');
const Bookmark = require('./models/Bookmark');

const app = express();
