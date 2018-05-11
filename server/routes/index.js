'use strict';
const { Router } = require("express");
const router = Router();

router.use(require('./auth-route'));
router.use(require("./sms-route"))
router.use(require("./texts-route"))
router.use(require("./phone-number-route"))
router.use(require("./name-route"))

module.exports = router;