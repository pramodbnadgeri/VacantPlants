const express = require("express")
const app = express();
// import swaggerui from 'swagger-ui-express'
// import * as swaggerDocument from './swagger.json '
const userRoute = require("./routes/user.route")
app.use(express.json())  //to update query this line is necessary
app.use(userRoute);
const PORT = process.env.PORT || 3000;

// const { Sequelize } = require('sequelize');

// // Option 1: Passing a connection URI
// const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

// app.use(
// '/api-docs',
// swaggerUi.serve,
// swaggerUi.setup(swaggerDocument)
// );

app.listen(PORT, () => {
    console.log("server running on" + PORT);
});

// const swaggerUi = require('swagger - ui - express'),
//     swaggerDocument = require('./swagger.json');