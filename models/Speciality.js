const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db.config");

const Speciality = sequelize.define(
    "Speciality", {
        field_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        filed_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        timestamps: false,
    }
);

module.exports = Speciality;