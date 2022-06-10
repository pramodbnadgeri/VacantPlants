const express = require("express");
const router = express.Router();

const { createUser, getAllUser, getUserById, updateUser, deleteUser, signIn, checkSq } = require("../controller/user.controller");
// /create users
router.post("/user", createUser)

// /signin users
router.post("/signIn", signIn)

// /signin users
router.get("/checkSq/:sq", checkSq)


//get all users
router.get("/user", getAllUser)

//get user by id
router.get("/user/:id", getUserById)

//update user
router.put("/user/:id", updateUser)

//delete user
router.delete("/user/:id", deleteUser)

module.exports = router;