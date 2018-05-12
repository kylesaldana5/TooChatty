"use strict"

const { Router } = require("express");
const router = Router();
const { newName, getName } = require("../controllers/name-ctrl");

router.post("/name", newName);
router.get('/getName', getName)
module.exports = router;