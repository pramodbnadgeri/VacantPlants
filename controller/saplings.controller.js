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

//get all saplings
const getSap = async (req, res) => {
    // console.log(user)
    try {
        const users = await models.Saplings.findAll({
            include: [{
                model: models.Saplings,
                as: 'user_sites'
            }],
        });
        console.log("users", users);

        return res.json(users);
    } catch (error) {
        console.log(error.message);
    }
};


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