const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db.config");
const Clinic = require("./Clinic");
const Speciality = require("./Speciality");

const Doctor = sequelize.define(
    "Doctor", {
        doctor_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true,
        },

        clinic_id: {
            type: DataTypes.INTEGER,
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
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        phone_number: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        date_of_birth: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        date_added: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {
        timestamps: false,
    }
);

module.exports = Doctor;