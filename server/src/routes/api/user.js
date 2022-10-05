const { Router } = require('express');

const { create: createMiddleware } = require('../../middlewares/user');
const { create: createController, index: getUsers, delete: deleteUser } = require('../../controllers/user');

const router = Router();

router.get('/', getUsers);
router.post('/', createMiddleware, createController);
router.delete('/:id', deleteUser);

module.exports = router;
