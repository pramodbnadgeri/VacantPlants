const jwt_token = require("jwt-decode");

// const sequel = require("../user.model")
var jwt = require("jsonwebtoken");
const models = require("../database/models");

const getUsers = async (req, res) => {
  try {
    const users = await models.User.findAll();
    console.log("users", users);

    return res.json(users);
  } catch (error) {
    console.log(error.message);
  }
};

// const createUser = async function (req, res) {
//     try {
//       const { name, email, password } = req.body;
//       const newUser = await pool.query(
//         "INSERT INTO users(name,email,password) VALUES ($1,$2,$3) RETURNING*",
//         [name, email, password]
//       );
//       // res.json(newUser.rows[0]);
//       res.json("new user created");
//     } catch (error) {
//       console.error(error.message);
//     }
//   };

// const getUserById = async (req, res) => {
//   try {
//     const { uid } = req.params;
//     const particularUser = await pool.query(
//       "SELECT * FROM users WHERE uid=($1)",
//       [uid]
//     );
//     res.json(particularUser.rows[0]);
//     console.log(particularUser.rows[0]);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// const checkSq = async (req, res) => {
//   try {
//     const { sq } = req.params;
//     let token = req.headers["x-access-token"];
//     if (!token) {
//       return res.status(403).send({
//         message: "No token provided!",
//       });
//     }
//     jwt.verify(token, "secret", async (err, decoded) => {
//       if (err) {
//         return res.status(401).send({
//           message: "Unauthorized!",
//         });
//       }
//       console.log(decoded);
//       const particularUser = await pool.query(
//         "SELECT * FROM users WHERE uid=($1)",
//         [decoded.id]
//       );
//       if (particularUser) {
//         if (sq === "200")
//           res.json({
//             reqSq: sq,
//             NoOfTrees: "4",
//           });
//         if (sq === "400")
//           res.json({
//             reqSq: sq,
//             NoOfTrees: "8",
//           });
//         if (sq === "800")
//           res.json({
//             reqSq: sq,
//             NoOfTrees: "10",
//           });
//         if (sq === "1200")
//           res.json({
//             reqSq: sq,
//             NoOfTrees: "12",
//           });
//       }
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// const signIn = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const particularUser = await pool.query(
//       "SELECT * FROM users WHERE email=($1) AND password=($2)",
//       [email, password]
//     );
//     var token = jwt.sign({ uid: particularUser.rows[0].uid }, "secret", {
//       expiresIn: 86400, // 24 hours
//     });
//     console.log(particularUser.rows[0]);
//     res.json({
//       token: token,
//       user: particularUser.rows[0],
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// const updateUser = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { name } = req.body;
//     const { email } = req.body;
//     const updateuser = await pool.query(
//       "UPDATE users SET name = $1,email = $2 WHERE id=$3",
//       [name, email, id]
//     );
//     res.json("user got updated");
//     res.json(updateuser.rows[0]);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// const deleteUser = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deleteUser = await pool.query("DELETE FROM users WHERE id = $1", [
//       id,
//     ]);
//     res.json("user got deleted");
//   } catch (error) {
//     console.log(error.message);
//   }
// };
module.exports = {
  getUsers,
  //   createUser,
  //   getUserById,
  //   updateUser,
  //   deleteUser,
  //   signIn,
  //   checkSq,
};
