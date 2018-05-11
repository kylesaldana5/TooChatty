"use strict"

const { Router } = require("express");
const router = Router();
const { newName } = require("../controllers/name-ctrl");

router.post("/name", newName);

module.exports = router;