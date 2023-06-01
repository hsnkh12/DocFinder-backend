const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db.config");

const Speciality = sequelize.define(
    "Speciality", {
        field_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        field_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
    }, {
        timestamps: false,
    }
);

module.exports = Speciality;