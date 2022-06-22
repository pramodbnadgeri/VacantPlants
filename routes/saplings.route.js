const express = require("express");
const router = express.Router();
// const { createSapling } = "../c";
const { createSapling, getsapById } = require("../controller/saplings.controller")

router.post("/createSapling", createSapling);
router.get("/getsapById/:id", getsapById);

module.exports = router;

