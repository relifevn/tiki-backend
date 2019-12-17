const router = require('express').Router();
const { userValidators } = require('../validators');
const middleware = require('../middleware');
const { userController } = require('../controllers');

router.post('/login', middleware(userValidators.userLogin, 'body'), userController.userLogin);

module.exports = router;
