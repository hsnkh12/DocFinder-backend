const User = require("../models/User")
require("dotenv").config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const {PasswordManager} = require("../utils/password")
const jwt = require('jsonwebtoken');

const singupController = async (req, res) => {

    try{

        const body = req.body
        const currentDate = new Date()

        // Hash password
        let hashedPassword = await PasswordManager.hashPassword(body.password)

        let user = await User.create({
            email: body.email,
            firstName: "",
            lastName: "",
            password: hashedPassword,
            date_added: currentDate,
            is_admin: true
        })

        await user.save()

        // user data that will be encrypted in jwt
        const user_to_enc = { userId: user.userId, is_admin:user.is_admin, email: user.email};

        // Create jwt token and return it
        jwt.sign({user_to_enc}, JWT_SECRET_KEY, {expiresIn: '60m'}, (err, token)=>{
            return res.json({
                token
            });
        })

    } catch(error) {

        console.log(error.name);

        if (error.name == "SequelizeUniqueConstraintError"){
            return res.status(409).send({'Message':'User with this email already exists'});
        }

        return res.status(401).send({ Message: "Invalid credentials" });
    }

}

const loginController = async (req, res) => {

    try{

        const body = req.body

        let user = await User.findOne({
            where: {
                email: body.email,
            },
        });

        // Check password
        const passwordIsValid = await PasswordManager.comparePassword(body.password,user.password);

        if(!passwordIsValid){
            return res.status(401).send({ Message: "Invalid credentials" });
        }

        // user data that will be encrypted in jwt
        const user_to_enc = { userId: user.userId, is_admin:user.is_admin, email: user.email};

        // Create jwt token and return it
        jwt.sign({user_to_enc}, JWT_SECRET_KEY, {expiresIn: '60m'}, (err, token)=>{
            return res.json({
                token
            });
        })

    } catch(error) {
        console.log(error.name);
        return res.status(401).send({ Message: "Invalid credentials" });
    }

}

const logoutController = async (req, res) => {

    try{

    } catch(error) {
        console.log(error);
        // return error status based on the error catched
    }

}

const filterUsersController = async (req, res) => {

    try{

        if(!req.is_admin){
            return res.status(401).send({ Message: "Not authorized" });
        }

        let users = await User.findAll()
        return res.json(users)

    } catch(error) {
        console.log(error);
        return res.status(404).send({ Message: "Something went wrong" });
    }

}

const getUserByIDController = async (req, res) => {

    try{

        if(!req.is_admin){
            return res.status(401).send({ Message: "Not authorized" });
        }

        let user = await User.findOne({
            where:{
                userId: req.params.id
            }
        })

        return res.json(user)

    } catch(error) {
        console.log(error);
        return res.status(404).send({ Message: "User not found" });
    }

}

const updateUserController = async (req, res) => {

    try{

        const value = req.body.value;
        const varName = req.body.varName;
        const userId = req.params.id;

        // Check if user is editing other user's data
        if( userId != req.userId){
            return res.status(401).send({ Message: "You are not authorized to edit other user's info" });
        }

        const newData = {};
        let newValue = value;

        // Check if the value to be updated is password
        if (varName.toString() == "password") {
            return res.status(400).send({ Message: "To change the password, go to reset password" });
        }
        newData[varName.toString()] = newValue;

        const user = await User.update(newData, {
            where: {
                userId: userId,
            },
        });

        // Return true if updated
        return res.json(user[0] === 1);


    } catch(error) {
        console.log(error);
        return res.status(404).send({ Message: "Something went wrong" });
    }

}

const deleteUserController = async (req, res) => {

    try{

        const userId = req.params.id;

        // Check if user trying to delete other user, and not admin
        if( userId != req.userId && !req.is_admin){
            return res.status(401).send({ Message: "You are not authorized to delete other user" });
        }

        await User.destroy({
            where: {
                userId: userId,
            },
        });

        return res.json(true);

    } catch(error) {
        console.log(error);
        return res.status(404).send({ Message: "Something went wrong" });
    }

}

const resetPasswordController = async (req, res) => {

    try{
        
        const userId = req.params.id;
        const oldPassword = req.body.old_password
        const newPassword = req.body.new_password

        // Check if uset is trying to reset password for other user
        if( userId != req.userId){
            return res.status(401).send({ Message: "You are not authorized to reset other user's password" });
        }

        const user = await User.findOne({
            where:{
                userId:userId
            }
        })

        // Check the old password
        const isOldPasswordValid = await PasswordManager.comparePassword(oldPassword, user.password)

        if(!isOldPasswordValid){
            return res.status(401).send({ Message: "Invalid old password" });
        }

        // Hash the new password
        const newHashedPassword = await PasswordManager.hashPassword(newPassword)

        const updatedUser = await User.update({password: newHashedPassword}, {
            where: {
                userId: userId,
            },
        });

        return res.json(updatedUser[0] === 1);


    } catch(error) {
        console.log(error);
        return res.status(404).send({ Message: "Something went wrong" });
    }

}



module.exports = {
    loginController,
    logoutController,
    singupController,
    filterUsersController,
    getUserByIDController,
    updateUserController,
    deleteUserController,
    resetPasswordController,
}