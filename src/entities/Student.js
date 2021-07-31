const {DataTypes} = require("sequelize");
const database = require("../config/database");

module.exports = database.define("Students", {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    nis: {
        type: DataTypes.STRING,
        allowNull: false
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.TEXT
    },
    phone_number: {
        type: DataTypes.STRING
    }
})