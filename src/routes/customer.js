const customerController = require('../controllers/customerControllers');

const express = require('express');
const router = express.Router();


router.get('/',customerController.list);
router.post('/add',customerController.save);

module.exports = router;