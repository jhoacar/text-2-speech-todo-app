const { Router } = require('express');

const router = Router();

router.use('/auth', require('./auth'));
router.use('/users', require('./user'));
router.use('/todos', require('./todo'));

module.exports = router;
