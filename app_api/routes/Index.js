const express = require('express');
const router = express.Router();

const sellersController = require('../controllers/sellers');

router.route('/sellers').get(sellersController.sellersList);

router.route('/sellers/:vendorID').get(sellersController.getSingleSeller);

module.exports = router;
