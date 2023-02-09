const express = require("express");
const {User} = require('../models');
const {register,login,uploadAvatar}=require("../controllers/user.controllers");
const { uploadImages } = require("../middlewares/uploads/uploads-images");
const {authenticate}=require("../middlewares/auth/authenticate")
const userRouter = express.Router();
userRouter.post("/register", register);
userRouter.post("/login", login);


userRouter.post("/upload-avatar",authenticate,uploadImages("avatar"),uploadAvatar);

module.exports = {
    userRouter,
};
