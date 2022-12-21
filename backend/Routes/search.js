const router = require('express').Router()

const {getFlipkart} = require('../controllers/flipkart_controller');
const {getAmazon} = require('../controllers/amazon_controller');

router.get('/:qs', getFlipkart, getAmazon);
// router.get('/:qs', getAmazon);

module.exports = router;