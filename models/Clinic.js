const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db.config");

const Clinic = sequelize.define(
    "Clinic", {
        clinic_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        website: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {
        timestamps: false,
    }
);

module.exports = Clinic;