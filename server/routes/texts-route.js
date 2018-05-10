"use strict";

const { Router } = require("express");
const router = Router();
const { getCurrentText } = require("../controllers/texts-ctrl");

router.get("/texts/:phone", getCurrentText);

module.exports = router;
