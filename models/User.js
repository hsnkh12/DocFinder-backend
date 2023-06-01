const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db.config");
const User = sequelize.define("User", {
    userId: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
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