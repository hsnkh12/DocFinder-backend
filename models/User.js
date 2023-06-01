const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db.config");
const User = sequelize.define("User", {
    userId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date_added: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    date_of_birth: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    is_admin: {
        type: DataTypes.BOOLEAN
    },

}, { timestamps: false });



module.exports = User;