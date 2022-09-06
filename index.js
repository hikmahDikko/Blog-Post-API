const mongoose = require("mongoose");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({path : "./config.env"});
const router = require("./user/user-router");

mongoose.connect(process.env.DB_URL.replace(
    "<password>",
    process.env.DB_PASS
))

app.use(express.json());

app.use("/", router);

app.listen(process.env.DB_PORT, () => {
    console.log("Hello from port " + process.env.DB_PORT);
})
// app.post("/create", controller.createUser)

// app.post("/createB", controllerB.createBlog)

// app.get("/users", controller.getUser)

// app.get("/usersB", controllerB.getUserB)

// app.put("/update", controller.updateUser)

// app.put("/updateB", controllerB.updateUserB)

// app.delete("/delete", controller.deleteUser)

// app.delete("/deleteB", controllerB.deleteUserB)

