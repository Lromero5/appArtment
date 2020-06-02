const db = require("../models");

// Defining methods for the choresController
module.exports = {
  findAll: function(req, res) {
    db.Transaction
      .find({house_id: req.params.id})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Transaction
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    const id = req.params.id
    console.log(id)
    db.Transaction
      .create(req.body)
      .then(({_id}) => {
        console.log(_id);
        db.Household.findOneAndUpdate({_id:id}, {$push: {transactions: [_id]}},{new:true})
        .then(() => res.json({success: true}))
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Transaction
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function({params}, res) {
    // console.log(`Delete ${body.name} (${body._id})`)
    db.Transaction
      // .findById(req.body._id)
      // .then(dbModel => dbModel.remove())
      .deleteOne({_id: params.txID})
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  }
};
