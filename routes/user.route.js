// import {
// getUsers,
// getUserById
// } from "../controller/user.controller.js";
const express = require("express");
const router = express.Router();

const {
    getUsers, getUserById, createUser, updateUser, deleteUser
} = require("../controller/user.controller.js");


//get all users
router.get("/users", getUsers);

//get individual user
router.get("/user/:id", getUserById);

// Route create a new user
router.post('/user', createUser);

//Route update an user
router.put("/user/:id", updateUser);

//Route to delete existing user
router.delete("/user/:id", deleteUser);

module.exports = router;