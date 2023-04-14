const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');
const Controller = require('../app/controllers/SingController')

router.get('/stored/music', meController.storedCourses);
router.post('/music/store', Controller.add);

module.exports = router;
