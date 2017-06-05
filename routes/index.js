var express = require('express');
var router = express.Router();

const Cafe = require('../models/Cafe');
const cafeController = require('../controllers/cafeController');


router.get('/', cafeController.getCafe);

router.post('/', cafeController.createCafe);

router.get('/cafes/:id/edit', cafeController.editCafe);

router.post('/cafes/:id/edit', cafeController.updateCafe);

module.exports = router;
