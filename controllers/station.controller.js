const { Station } = require("../models");
const { Op } = require("sequelize");
const createStation = async (req, res) => {
  const { name, address, province } = req.body;
  try {
    const createStation = await Station.create({ name, address, province });
    res.status(201).send(createStation);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllStation = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const getList = await Station.findAll({
        where: {
          name: {
            [Op.like]: `%${name}%`,
          },
        },
      });
      res.status(200).send(getList);
    } else {
      const getList = await Station.findAll();
      res.status(200).send(getList);
    }
  } catch (error) {
    res.status(404).send(error);
  }
};

const getDetailStation = async (req, res) => {
  const { id } = req.params;
  const getDetailStation = await Station.findOne({
    where: {
      id,
    },
  });
  try {
    res.status(200).send(getDetailStation);
  } catch (error) {
    res.status(404).send(error);
  }
};

const updateStation = async (req, res) => {
  const { id } = req.params;
  const { name, address, province } = req.body;
  const station = await Station.findOne({
    where: {
      id,
    },
  });
  try {
    station.name = name;
    station.address = address;
    station.province = province;
    await station.save();
    res.status(200).send(station);
  } catch (error) {
    res.status(404).send(error);
  }
};

const deleteStation = async (req, res) => {
  const { id } = req.params;
  await Station.destroy({
    where: {
      id,
    },
  });
  try {
    res.status(200).send("delete success");
  } catch (error) {
    res.status(404).send(error);
  }
};
module.exports = {
  createStation,
  getAllStation,
  getDetailStation,
  updateStation,
  deleteStation,
};
