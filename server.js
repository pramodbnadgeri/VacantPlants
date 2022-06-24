const express = require("express");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const userRoutes = require("./routes/user.route");
const saplingsRoutes = require("./routes/saplings.route");
const app = express();

app.use(express.json()); //to update query this line is necessary
app.use([userRoutes, saplingsRoutes]);

const PORT = process.env.PORT || 3000;

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Plants API",
            version: "1.0.0",
            description: "A simple Express plants API",
        },
        components: {
            securitySchemes: {
                Authorization: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                    value: `Bearer {token}`
                }
            }
        },
        servers: [
            {
                url: "http://localhost:3000",

            },
            {
                url: "https://vacantplantsfinal.herokuapp.com",
            }
        ],
    },
    apis: ["./routes/*.js"],
};

const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
app.listen(PORT, () => {
    console.log("server running on " + PORT);
});
