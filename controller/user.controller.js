const jwt_token = require("jwt-decode");

var jwt = require("jsonwebtoken");
const models = require("../models");
const user = require('../models/user')

const getUsers = async (req, res) => {
    console.log(user)
    try {
        const users = await models.user.findAll({});
        console.log("users", users);

        return res.json(users);
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = {
    getUsers,
};