const { Router } = require('express');

const { create: createMiddleware } = require('../../middlewares/todo');
const {
  create: createController,
  index: getTodos,
  delete: deleteTodo,
} = require('../../controllers/todo');

const router = Router();

router.get('/', getTodos);
router.post('/', createMiddleware, createController);
router.delete('/:id', deleteTodo);

module.exports = router;
