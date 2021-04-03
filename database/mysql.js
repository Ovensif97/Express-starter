const { Sequelize } = require('sequelize');

// Insert your db_name, user_name & password in parameter sequalize bellow
const sequelize = new Sequelize('db_starter', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;