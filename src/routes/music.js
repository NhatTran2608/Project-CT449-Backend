const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/SingController');

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.put('/:id/edit', courseController.update);
router.delete('/:id', courseController.destroy);
router.get('/:id/edit', courseController.showId);
router.get('/:slug', courseController.show);
module.exports = router;
