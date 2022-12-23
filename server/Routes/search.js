const router = require('express').Router()

const {getFlipkart} = require('../controllers/flipkart_controller');
const {getAmazon} = require('../controllers/amazon_controller');
const {main_search} = require('../controllers/main_search_controller');

router.get('/:qs', main_search);
// router.get('/:qs', getAmazon);

module.exports = router;