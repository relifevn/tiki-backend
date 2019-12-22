const router = require('express').Router();
const {userValidators} = require('../validators');
const middleware = require('../middleware/auth');
const {shopController} = require('../controllers');

router.post('/', middleware, shopController.create);
router.get('/', shopController.search);
router.get('/own-shop', middleware, shopController.getOwnShop);
router.delete('/', middleware, shopController.remove);

module.exports = router;
