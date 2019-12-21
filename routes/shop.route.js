const router = require('express').Router();
const {userValidators} = require('../validators');
const middleware = require('../middleware/auth');
const {shopController} = require('../controllers');

router.post('/', middleware, shopController.create);
router.get('/own-shop', middleware, shopController.getOwnShop);

module.exports = router;
