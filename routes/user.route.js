const router = require('express').Router();
const { userValidators } = require('../validators');
const middleware = require('../middleware');
const { userController } = require('../controllers');

router.post('/login', middleware(userValidators.userLogin, 'body'), userController.userLogin);
router.get('/list-users', userController.getListUsers);

module.exports = router;
