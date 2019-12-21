const router = require('express').Router();
const {userValidators} = require('../validators');
const middleware = require('../middleware');
const {categoryController} = require('../controllers');

router.get('/', categoryController.list);

module.exports = router;
