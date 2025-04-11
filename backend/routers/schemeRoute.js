const express = require('express');
const router = express.Router();

const { getTopSchemes } = require("../controllers/schemeController")

router.get("/getTopSchemes", getTopSchemes);

module.exports = router;