const db = require("../models");

// Defining methods for the choresController
module.exports = {
  findAll: function (req, res) {
    db.Chore.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => {
        res.json(dbModel);
        console.log(dbModel);
      })

      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Chore.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    // console.log(req.body);
    db.Chore.create(req.body)
      // .then(({ _id }) => db.Households.findOneAndUpdate({}, { $push: { chores: _id } }, { new: true }))
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Chore.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Chore.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
