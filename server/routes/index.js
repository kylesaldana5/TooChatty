'use strict';
const { Router } = require("express");
const router = Router();

router.use(require("./sms-route"))
router.use(require("./texts-route"))

module.exports = router;