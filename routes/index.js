var express = require('express');
var router = express.Router();

const Scan = require('../models/Scan');
const scanController = require('../controllers/scanController');


router.get('/', scanController.getScan);

router.post('/', scanController.createScan);

router.get('/scans/:id/edit', scanController.editScan);

router.post('/api', scanController.createScan_api);

module.exports = router;
