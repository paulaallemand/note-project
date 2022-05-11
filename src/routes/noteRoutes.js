const express = require("express");
const router = express.Router();

const controller = require("../controllers/noteControllers");

router.get("/all", controller.getAll);

module.exports = router