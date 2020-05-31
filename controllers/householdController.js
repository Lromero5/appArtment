const db = require("../models");


// Defining methods for the houseHoldController
module.exports = {
  findAll: function(req, res) {
    db.Household
      .find(req.query)
      // .populate("transactions")
      .populate("members")
      .populate("chores")
      .sort({ date: -1 })
      .then(dbModel => {res.json(dbModel) })
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Household
      .findById(req.params.id)
      // .populate("transactions")
      .populate("members")
      .populate("chores")
      .then(houseData => res.json(houseData))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Household
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  update: function(req, res) {
      db.Household
        .findByIdAndUpdate({_id: req.params.id}, {$push: req.body}, {new: true, useFindAndModify: false})
        .then(dbModel => {
          return res.json(dbModel);
        })
        .catch(console.log);
    },
    
  remove: function(req, res) {
    db.Household
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  updateMember: function(req, res){
    db.Household
        .findByIdAndUpdate({_id: req.params.id}, {$pull: req.body} ,{new: true, useFindAndModify: false})
        .then(dbModel => {
          return res.json(dbModel);
        })
        .catch(console.log);
  }

};
