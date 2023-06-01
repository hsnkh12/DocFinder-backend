const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db.config");
const Clinic = require("./Clinic");
const Speciality = require("./Speciality");

const Doctor = sequelize.define(
    "Doctor", {
        doctor_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        clinic_id: {
            type: DataTypes.STRING,
            references: {
                model: Clinic,
                key: "clinic_id",
                onDelete: "SET NULL",
                onUpdate: "CASCADE",
                allowNull: true,
            },
        },
        Speciality_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Speciality,
                key: "field_id",
                onDelete: "SET NULL",
                onUpdate: "CASCADE",
                allowNull: true,
            },
        },

        image: {
            type: DataTypes.BLOB,
            allowNull: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone_number: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date_of_birth: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        date_added: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    }, {
        timestamps: false,
    }
);

module.exports = Doctor;