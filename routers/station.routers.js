const express = require("express");
const {Station} = require('../models');
const { checkExist } = require("../middlewares/validations/checkExist");
const {
  createStation,
  getAllStation,
  getDetailStation,
  updateStation,
  deleteStation,
} = require("../controllers/station.controller");
const { authenticate } = require("../middlewares/auth/authenticate");
const { authorize } = require("../middlewares/auth/authorize");

const stationRouter = express.Router();

stationRouter.post("/",authenticate,authorize, createStation);
stationRouter.get("/", getAllStation);
stationRouter.get("/:id", getDetailStation);
stationRouter.put("/:id", updateStation);
stationRouter.delete("/:id",checkExist(Station), deleteStation);

module.exports = {
  stationRouter,
};
