const {Sequelize} = require("sequelize");
require("dotenv").config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const dialect = process.env.DB_DIALECT;
const dbname = process.env.DB_NAME;
const host = process.env.DB_HOST;

const db = new Sequelize(dbname, username, password, {
    host: host,
    dialect: dialect,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

try {
    db.authenticate();
    console.log("success connect to database..");
    module.exports = db;
} catch (e) {
    console.log("failed connect to database " + e);
    module.exports = false;
}


