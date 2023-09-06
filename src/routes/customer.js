const customerController = require('../controllers/customerControllers');

const express = require('express');
const router = express.Router();


router.get('/',customerController.list);


module.exports = router;