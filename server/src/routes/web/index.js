const express = require('express');

const router = express.Router();

const client = require('../../client.dir');

router.use(express.static(client));

router.use('/*', (req, res) => res.sendFile(`${client}/index.html`));

module.exports = router;
