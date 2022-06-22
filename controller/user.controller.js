const jwt_token = require("jwt-decode");
var Pool = require('pg-pool')

var jwt = require("jsonwebtoken");
const models = require("../models");
const user = require('../models/user')

//get all users
const getUsers = async (req, res) => {
    // console.log(user)
    try {
        const users = await models.user.findAll({
            include: [{
                model: models.user_site,
                as: 'user_sites'
            }],
        });
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



const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        // const particularUser = await models.user.findAll()
        const user = await models.User.findOne({
            where: {
                email: email,
                password: password
            }
        });
        console.log(user.dataValues, "particularUser")
        var token = jwt.sign({ id: user.dataValues.id }, "secret", {
            expiresIn: 86400, // 24 hours
        });
        // console.log(particularUser.rows[0]);
        res.json({
            token: token,
            user: user.dataValues,
        });
    } catch (error) {
        console.log(error.message);
    }
};



const checkSq = async (req, res) => {
    try {
        const { sq } = req.params;
        // console.log(sq);
        // console.log(typeof (sq));
        let token = req.headers["authorization"];

        if (!token) {
            return res.status(403).send({
                message: "No token provided!",
            });
        }

        const jwt_token = token.split(' ')[1];

        jwt.verify(jwt_token, "secret", async (err, decoded) => {
            if (err) {
                return res.status(401).send({
                    message: "Unauthorized!",
                });
            }
            console.log(decoded);
            const particularUser = await models.User.findOne(
                {
                    where:
                    {
                        id: decoded.id

                    }
                }
            );
            if (particularUser.dataValues) {
                if (sq === "200")
                    res.json({
                        reqSq: sq,
                        NoOfTrees: "4",
                    });
                if (sq === "400")
                    res.json({
                        reqSq: sq,
                        NoOfTrees: "8",
                    });
                if (sq === "800")
                    res.json({
                        reqSq: sq,
                        NoOfTrees: "10",
                    });
                if (sq === "1200")
                    res.json({
                        reqSq: sq,
                        NoOfTrees: "12",
                    });

                res.json({
                    reqSq: sq,
                    NoOfTrees: "We are working on it",
                });
            }
        });
    } catch (error) {
        console.log(error.message);
    }
};





module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    signIn,
    checkSq,
};