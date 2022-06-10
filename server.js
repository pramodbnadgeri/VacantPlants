const express = require("express")
const app = express();

const userRoute = require("./routes/user.route")
app.use(express.json())  //to update query this line is necessary
app.use(userRoute);
app.listen(3000, () => {
    console.log("server running on 3000")
});
