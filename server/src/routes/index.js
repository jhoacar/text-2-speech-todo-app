const { Router } = require('express');

const api = require('./api');
const web = require('./web');

const router = Router();

router.use('/api', api);
router.use(web);

module.exports = router;
