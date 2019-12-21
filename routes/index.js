const router = require('express').Router();

router.use('/user', require('./user.route'));
router.use('/category', require('./category.route'));
router.use('/shop', require('./shop.route'));

module.exports = router;
