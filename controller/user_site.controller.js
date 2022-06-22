const models = require("../models");
const saplings = require("../models/saplings");


//get all user_sites
const getUserSites = async (req, res) => {
    // console.log(user)
    try {
        const users = await models.user_site.findAll({
            include: [{
                model: models.Saplings,
                as: 'Saplings'
            }]
        });
        console.log("user_site", users);

        return res.json(users);
    } catch (error) {
        console.log(error.message);
    }
};




//Get user_sites by id
const getSitesById = async (req, res) => {
    try {
        const users = await models.user_site.findOne({
            include: [{
                model: models.Saplings,
                as: 'Saplings'
            }],
            where: {

                id: req.params.id
            }
        });
        console.log(users);
        return res.json(users);

    } catch (err) {
        console.log(err);
    }
}

// // Create a new user_site
// const createUser = async (req, res) => {
//     try {
//         const newusersite = await models.user_sites.create(req.body);
//         console.log(newusersite);
//         res.json({
//             "message": "usersite Created"
//         });
//     } catch (err) {
//         console.log(err);
//     }
// }




module.exports = {
    getUserSites, getSitesById
};