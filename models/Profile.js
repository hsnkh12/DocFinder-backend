const Doctor = require("./Doctor");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db.config");

const Profile = sequelize.define(
    "Profile", {

        image: {
            type: DataTypes.BLOB,
            allowNull: true
        },
        experience: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        eduction: {
            type: DataTypes.STRING,
            allowNull: false,
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