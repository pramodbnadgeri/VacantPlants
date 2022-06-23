const express = require("express");
const router = express.Router();
// const { createSapling } = "../c";
const { createSapling, getsapById } = require("../controller/saplings.controller")






/**
 * @swagger
 * components:
 *   schemas:
 *     Sapling:
 *       type: object
 *       required:
 *         - sapling_id
 *         - sapling_count
 *       properties:
 *         sapling_id:
 *           type: number
 *           description: The sapling's id
 *         sapling_count:
 *           type: number
 *           description: The sapling's count
 *       example:
 *         sapling_id: some number
 *         sapling_count: some number
 */

/**
 * @swagger
 * /createSapling:
 *   post:
 *     summary: sapling creation
 *     tags: [Saplings]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Sapling'
 *     responses:
 *       200:
 *         description: The sapling created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Saplings'
 *       500:
 *         description: Some server error
 */
router.post("/createSapling", createSapling);



/**
 * @swagger
 * /getsapById/{id}:
 *   get:
 *     summary: Get the userSapling by id
 *     tags: [Saplings]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The userSaplings id
 
 *         
 *     responses:
 *       200:
 *         description: The userSaplings description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Saplings'
 *       404:
 *         description: The user was not found
 */

router.get("/getsapById/:id", getsapById);

module.exports = router;

