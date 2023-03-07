const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log('router loaded');


router.post('/Add', homeController.Add);
router.delete('/delete', homeController.delete);

module.exports = router;