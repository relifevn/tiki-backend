const router = require('express').Router();
const {userValidators} = require('../validators');
const middleware = require('../middleware/auth');
const {productController} = require('../controllers');

router.post('/', middleware, productController.create);
router.get('/', productController.search);
router.post('/update', middleware, productController.update);
router.delete('/:id', middleware, productController.remove);

module.exports = router;
