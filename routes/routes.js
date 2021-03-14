const Router = require("express").Router();
const Model = require("../models/models");

Router.get("/", async (req, res) => {
  try {
    const models = await Model.find();
    res.json(models);
  } catch(err) {
    res.status(500).send();
  }
});

Router.post("/", async (req, res) => {
  try {
    const { title, description, code } = req.body;

    // validation
    if(!description && !code) {
      return res.status(400).json({ 
        errorMessage: "You need to enter at least a description or some code."
      });
    }

    const newModel = new Model({
      title, description, code
    });

    const savedModel = await newModel.save();

    res.json(savedModel);  
  } catch(err) {
    res.status(500).send();
  }
});

Router.put("/:id", async (req, res) => {
  try {
    const { title, description, code } = req.body;
    const modelId = req.params.id;

    // validation
    if(!description && !code) {
      return res.status(400).json({ 
        errorMessage: "You need to enter at least a description or some code."
      });
    }

    if(!modelId) {
      return res.status(400).json({ 
        errorMessage: "Model ID not given. Please contact the developer."
      });
    }

    const originalModel = await Model.findById(mernId);
    if(!originalModel) {
      return res.status(400).json({ 
        errorMessage: "No Model with this ID was found. Please contact the developer."
      });
    }

    originalModel.title = title;
    originalModel.description = description;
    originalModel.code = code;

    const savedModel = await originalModel.save();

    res.json(savedModel);
  } catch(err) {
    res.status(500).send();
  }
});

Router.delete("/:id", async (req, res) => {
  try {
    const modelId = req.params.id;
    // validation
    if(!modelId) {
      return res.status(400).json({ 
        errorMessage: "Model ID not given. Please contact the developer."
      });
    }

    const existingModel = await Model.findById(modelId);
    if(!existingModel) {
      return res.status(400).json({ 
        errorMessage: "No Model with this ID was found. Please contact the developer."
      });
    }

    await existingModel.delete();

    res.json(existingModel);
  } catch(err) {
    res.status(500).send();
  }
})

module.exports = Router;