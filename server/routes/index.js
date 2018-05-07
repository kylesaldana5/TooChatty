'use strict';
const { Router } = require("express");
const router = Router();

router.use(require("./sms-route"))
router.use(require("./texts-route"))
router.use(require("./phone-number-route"))

module.exports = router;