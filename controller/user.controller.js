const jwt_token = require("jwt-decode");

var jwt = require("jsonwebtoken");
const models = require("../models");
const user = require('../models/user')

//get all users
const getUsers = async (req, res) => {
    // console.log(user)
    try {
        const users = await models.User.findAll({});
        console.log("users", users);

        return res.json(users);
    } catch (error) {
        console.log(error.message);
    }
};
// Get user by id
const getUserById = async (req, res) => {
    try {
        const user = await models.User.findAll({
            where: {
                id: req.params.id
            }
        });
        res.send(user[0]);
    } catch (err) {
        console.log(err);
    }
}


// Create a new user
const createUser = async (req, res) => {
    try {
        const newuser = await models.User.create(req.body);
        console.log(newuser);
        res.json({
            "message": "user Created"
        });
    } catch (err) {
        console.log(err);
    }
}

// Update user by id
const updateUser = async (req, res) => {
    try {
        await models.User.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "user Updated"
        });
    } catch (err) {
        console.log(err);
    }
}

// Delete user by id
const deleteUser = async (req, res) => {
    try {
        await models.User.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "user Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}






module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};