'use strict';

/**
 * node modules
 */
const router = require('express').Router();

/**
 * custom module
 */
const { checkout } = require('../controllers/checkout.controller');

router.post('/', checkout);

module.exports = router;
