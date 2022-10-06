const { Router } = require('express');

const { create: createMiddleware } = require('../../middlewares/todo');
const {
  create: createController,
  index: getController,
  delete: deleteController,
  update: updateController,
} = require('../../controllers/todo');

const router = Router();

router.get('/', getController);
router.post('/', createMiddleware, createController);
router.put('/:id', updateController);
router.delete('/:id', deleteController);

module.exports = router;
