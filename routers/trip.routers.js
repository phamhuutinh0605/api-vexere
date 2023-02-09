const express=require("express");
const { createTrip, getAllTrip, getDetailTrip, updateTrip, deleteTrip } = require("../controllers/trip.controllers");
const tripRouter=express.Router();

tripRouter.post("/",createTrip);
tripRouter.get("/",getAllTrip);
tripRouter.get("/:id",getDetailTrip);
tripRouter.put("/:id",updateTrip);
tripRouter.delete("/:id",deleteTrip);

module.exports={
    tripRouter
}