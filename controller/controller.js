const Model = require("../models/models");

exports.create = (req, res) => {
  try {
    const models = await Model.find();
    res.json(models);
  } catch(err) {
    res.status(500).send();
  }
};
