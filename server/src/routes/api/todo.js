const { Router } = require('express');

const {
  create: createMiddleware,
} = require('../../middlewares/todo');

const {
  create: createController,
  index: getController,
  show: showController,
  delete: deleteController,
  update: updateController,
} = require('../../controllers/todo');

const { auth: authMiddleware } = require('../../middlewares/auth');

const router = Router();

router.get('/', authMiddleware, getController);
router.post('/', authMiddleware, createMiddleware, createController);
router.get('/:id', authMiddleware, showController);
router.put('/:id', authMiddleware, updateController);
router.delete('/:id', authMiddleware, deleteController);

module.exports = router;
