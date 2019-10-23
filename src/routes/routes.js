const Router = require('express');
const router = Router();
const IndexController = require('../controllers/index_controller');

router.route('/').get(IndexController.hello);

router.route('/checkout').post(IndexController.checkout);

module.exports = router;
