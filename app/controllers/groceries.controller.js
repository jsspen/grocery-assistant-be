const db = require("../models");
const Groceries = db.groceries;
const Op = db.Sequelize.Op;

// Create and Save a new Grocery Item
exports.create = (req, res) => {};

// Retrieve all Grocery Items from the database.
exports.findAll = (req, res) => {};

// Find a single Grocery Item with an id
exports.findOne = (req, res) => {};

// Update a Grocery Item by the id in the request
exports.update = (req, res) => {};

// Delete a Grocery Item with the specified id in the request
exports.delete = (req, res) => {};

// Delete all Grocery Items from the database.
exports.deleteAll = (req, res) => {};

// Find all published Grocery Items
exports.findAllPublished = (req, res) => {};
