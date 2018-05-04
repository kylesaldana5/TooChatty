"use strict";

const { Router } = require("express");
const router = Router();
const { messageCovo  } = require("../controllers/sms-ctrl");


router.get("/smssent", messageCovo);

module.exports = router;