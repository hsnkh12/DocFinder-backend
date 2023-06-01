const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db.config");
const Doctor = require("./Doctor");
const User = require("./User");

const Review = sequelize.define("Review", {
    review_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false,
        autoIncrement: true,
    },
    doctor_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Doctor,
            key: "doctor_id",
            onDelete: "SET NULL",
            onUpdate: "CASCADE",
            allowNull: true,
        },
    },
    user_id: {
        type: DataTypes.STRING,
        references: {
            model: User,
            key: "userId",
            onDelete: "SET NULL",
            onUpdate: "CASCADE",
            allowNull: true,
        },
    },
    rate: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    date_added: {
        type: DataTypes.STRING,
        allowNull: false,
    },

}, { timestamps: false });



module.exports = Review;