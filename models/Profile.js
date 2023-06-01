const Doctor = require("./Doctor");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db.config");

const Profile = sequelize.define(
    "Profile", {



        experience: {
            type: DataTypes.BLOB,
            allowNull: true,
        },
        edutaction: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    }, {
        timestamps: false,
    }
);
Profile.belongsTo(Doctor, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    foreignKey: "doctor_id",
    allowNull: true,
});

module.exports = Profile;