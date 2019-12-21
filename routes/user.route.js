const router = require('express').Router();
const {userValidators} = require('../validators');
const middleware = require('../middleware');
const {userController} = require('../controllers');

router.post('/login', userValidators.login, userController.login);
router.post('/register', userValidators.register, userController.register);
router.get('/list-users', userController.getListUsers);

module.exports = router;
