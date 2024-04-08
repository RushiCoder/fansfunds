'use strict';

/**
 * node modules
 */
const router = require('express').Router();

/**
 * custom module
 */
const { home } = require('../controllers/home.controller')

router.get('/', home);

module.exports = router;
