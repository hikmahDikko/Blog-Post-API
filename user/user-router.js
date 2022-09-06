const express = require("express");
const controller = require("../user/user-controller");
const controllerB = require("../blog/blog-controller");

const router = express.Router();

const { createUser, getUser, updateUser, deleteUser } = controller;

const { createBlog, getUserB, updateUserB, deleteUserB } = controllerB;

router.route("/blog").get(getUserB).post(createBlog).put(updateUserB).delete(deleteUserB);

router.route("/user").get(getUser).post(createUser).put(updateUser).delete(deleteUser);

module.exports = router;