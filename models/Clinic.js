const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db.config");

const Clinic = sequelize.define(
    "Clinic", {
        clinic_id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
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
            allowNull: false,
        },

        clinic_address: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        timestamps: false,
    }
);

module.exports = Clinic;