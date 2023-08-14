const Sequelize = require('sequelize');

const db = new Sequelize('guest', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});


module.exports = db;
