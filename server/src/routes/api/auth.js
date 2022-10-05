const { Router } = require('express');

const { login: middleware } = require('../../middlewares/auth');
const { login: controller } = require('../../controllers/auth');

const router = Router();

router.post('/login', middleware, controller);

module.exports = router;
