const router = require('express').Router();
const {userValidators} = require('../validators');
const middleware = require('../middleware/auth');
const {orderController} = require('../controllers');

router.post('/', middleware, orderController.create);
router.post('/change_state/:id', middleware, orderController.changeState());

module.exports = router;
