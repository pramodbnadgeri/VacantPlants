const models = require("../models");

// Create a new sapling
const createSapling = async (req, res) => {
    try {
        const newsapling = await models.Saplings.create(req.body);
        console.log(newsapling);
        res.json({
            "message": "sapling Created"
        });
    } catch (err) {
        console.log(err);
    }
}

//get sap by id
const getsapById = async (req, res) => {
    try {
        const sap = await models.Saplings.findAll({
            where: {
                site_id: req.params.id
            }
        });
        res.send(sap[0]);
    } catch (err) {
        console.log(err);
    }
}

module.exports = { createSapling, getsapById }