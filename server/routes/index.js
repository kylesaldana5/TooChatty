'use strict';
const { Router } = require("express");
const router = Router();

router.use(require("./sms-route"))

module.exports = router;