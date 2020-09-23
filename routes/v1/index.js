const express = require('express');
const authRoute = require('./auth');
const scheduleRoute = require('./schedules');
const todolistRoute = require('./todolists');

const router = express.Router();

router.use('/auth', authRoute);
router.use('/schedules', scheduleRoute);
router.use('/todolists', todolistRoute);

module.exports = router;