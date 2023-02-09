const { Op } = require("sequelize");
const { Trip, Station } = require("../models");

const createTrip = async (req, res) => {
  const { fromStation, toStation, startTime, price } = req.body;
  try {
    const newTrip = await Trip.create({
      fromStation,
      toStation,
      startTime,
      price,
    });
    res.status(201).send(newTrip);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllTrip = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      //   const getAllTripByName = await Trip.findAll({
      //     where: {
      //       [Op.like]: `%${name}%`,
      //     },
      //     include: [
      //         {
      //           model:Station,
      //           as:"from"
      //         },
      //         {
      //           model:Station,
      //           as:"to"
      //         },
      //       ],
      //   });
      //   res.status(200).send(getAllTripByName);
    } else {
      const tripList = await Trip.findAll({
        include: [
          {
            model: Station,
            as: "from",
          },
          {
            model: Station,
            as: "to",
          },
        ],
      });
      if (tripList) {
        res.status(200).send(tripList);
      } else {
        res.status(404).send("Khong co chuyen di nao");
      }
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getDetailTrip = async (req, res) => {
  const { id } = req.params;
  try {
    const detailtrip = await Trip.findOne({
      where: {
        id,
      },
      include: [
        {
          model: Station,
          as: "from",
        },
        {
          model: Station,
          as: "to",
        },
      ],
    });
    if (detailtrip) {
      res.status(200).send(detailtrip);
    } else {
      res.status(404).send(`Khong ton tai ${id} nay`);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateTrip = async (req, res) => {
  const { id } = req.params;
  const { fromStation, toStation, startTime, price } = req.body;
  console.log(id, fromStation, toStation, startTime, price);
  try {
    const updatedTrip = await Trip.update(
      { fromStation, toStation, startTime, price },
      {
        where: { id },
      }
    );
    if (updatedTrip) {
      res.status(200).send(updatedTrip);
    } else {
      res.status(404).send(`Khong ton tai ${id} nay`);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteTrip = async (req, res) => {
  const { id } = req.params;
  try {
    const trip = await Trip.destroy({
      where: { id },
    });
    if (trip) {
      res.status(200).send("xoa thanh cong");
    } else {
      res.status(404).send(`Khong ton tai ${id} nay`);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = {
  createTrip,
  getAllTrip,
  getDetailTrip,
  updateTrip,
  deleteTrip,
};
