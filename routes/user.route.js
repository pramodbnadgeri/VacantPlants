const express = require("express");
const router = express.Router();

const {
    getUsers,
} = require("../controller/user.controller.js");

//get all users
router.get("/users", getUsers);

module.exports = router;