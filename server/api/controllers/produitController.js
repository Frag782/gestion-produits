const mongoose = require('mongoose');
const Produit = require('../models/produitModel');


exports.list_all_produit = function(req, res) {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  Produit.find({})
    .skip((page - 1) * limit)
    .limit(limit)
    .exec(function(err, produits) {
      if (err)
        res.status(500).send(err);
      else
        res.json(produits);
    });
};


exports.create_a_produit = function(req, res) {
  var new_produit = new Produit(req.body);
  new_produit.save(function(err, produit) {
    if (err)
      res.send(err);
    res.json(produit);
  });
};


exports.read_a_produit = function(req, res) {
  Produit.findById(req.params.produitId, function(err, produit) {
    if (err)
      res.send(err);
    res.json(produit);
  });
};

exports.read_a_produit_by_code = function(req, res) {
  Produit.find({"code": req.params.produitCode}, function(err, produit) {
    if (err)
      res.send(err);
    res.json(produit);
  });
};


exports.update_a_produit = function(req, res) {
  Produit.findOneAndUpdate({_id: req.params.produitId}, req.body, {new: true}, function(err, produit) {
    if (err)
      res.send(err);
    res.json(produit);
  });
};


exports.delete_a_produit = function(req, res) {


  Produit.remove({
    _id: req.params.produitId
  }, function(err, produit) {
    if (err)
      res.send(err);
    res.json({ message: 'Produit successfully deleted' });
  });
};


/* Fonctionnalites additionnelles */

exports.create_many_produits = function(req, res) {
  let productArray = req.body;

  if (!Array.isArray(productArray)) {
    return res.status(400).send({ message: "Input should be an array of products" });
  }

  Produit.insertMany(productArray, function(err, products) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).json(products);
    }
  });
  };


exports.order_by_price = function(req, res) {
  const ascending = req.query.ascending === 'false' ? false : true;

  const sortDirection = ascending ? 1 : -1;

  Produit.find().sort({ prix: sortDirection }).exec(function(err, produits) {
    if (err)
      res.send(err);

    res.json(produits);
  });
};


exports.order_by_libelle = function(req, res) {
  const ascending = req.query.ascending === 'false' ? false : true;

  const sortDirection = ascending ? 1 : -1;

  Produit.find().sort({ libelle: sortDirection }).exec(function(err, produits) {
    if (err)
      res.send(err);

    res.json(produits);
  });
};


exports.order_by_libelle = function(req, res) {
  const ascending = req.query.ascending === 'false' ? false : true;

  const sortDirection = ascending ? 1 : -1;

  Produit.find().sort({ libelle: sortDirection }).exec(function(err, produits) {
    if (err)
      res.send(err);

    res.json(produits);
  });
};

