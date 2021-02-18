const express = require("express");
const app = express();

const users = require("./routes/user");

const db = require("./config/database");

db.authenticate()
    .then(()=> console.log("Database Connected ...."))
    .catch(err=> console.log("Error is ::" + err));

app.use("/users", users);

const PORT=process.env.PORT || 5000;

app.listen(PORT, (req,res)=> {
    console.log("Listening to port 5000");
});