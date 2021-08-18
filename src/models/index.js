

'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const bookModel = require('./books/model');
const userModel = require('./users');
const Collection = require('./data-collection.js');

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL||'postgres://localhost:5432/dunia';
// const DATABASE_URL = process.env.DATABASE_URL 

const sequelize = new Sequelize(DATABASE_URL);
const books = bookModel(sequelize, DataTypes);


module.exports = {
  db: sequelize,
  books: new Collection(books),
  users: userModel(sequelize, DataTypes),
};