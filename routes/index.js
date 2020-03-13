const express = require('express');
const path = require('path');
const router = express.Router();
const {getHomePage} = require('./homepage');
const {PlayerPage} = require('./player');
router.get('/index', (req, res, next) => res.send({ msg: 'Hello, Scaffold !!'}));
router.get('/about', (req, res, next) => res.send({ msg: 'Hello, about !!'}));



module.exports = router;
