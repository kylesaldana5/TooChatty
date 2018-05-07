"use strict";

const { Router } = require("express");
const router = Router();
const { getNonDuplicates } = require("../controllers/phone-number-ctrl");

router.get("/numbers", getNonDuplicates);

module.exports = router;
