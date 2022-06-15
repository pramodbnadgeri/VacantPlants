const express = require("express");

const app = express();
// import swaggerui from 'swagger-ui-express'
// import * as swaggerDocument from './swagger.json '
const userRoutes = require("./routes/user.route");
const plantRoutes = require("./routes/user.route");

app.use(express.json()); //to update query this line is necessary
app.use([userRoutes, plantRoutes]);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("server running on " + PORT);
});

// const swaggerUi = require('swagger - ui - express'),
//     swaggerDocument = require('./swagger.json');
