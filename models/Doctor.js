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
        field_name: {
            type: DataTypes.STRING,
            references: {
                model: Speciality,
                key: "field_name",
                onDelete: "SET NULL",
                onUpdate: "CASCADE",
                allowNull: true,
            },
        },

        experience: {
            type: DataTypes.STRING(1000),
            allowNull: false,
        },
        education: {
            type: DataTypes.STRING(1000),
            allowNull: false,
        },

        image: {
            type: DataTypes.STRING(1000),
            allowNull: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone_number: {
            type: DataTypes.STRING,
            allowNull: false,
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