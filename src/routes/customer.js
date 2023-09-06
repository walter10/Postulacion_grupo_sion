const customerController = require('../controllers/customerControllers');

const express = require('express');
const router = express.Router();

//router.get ('/',loadLogin.charge);
router.get('/',customerController.list);
router.post('/add',customerController.save);
router.get('/delete/:id',customerController.delete);
router.get('/update/:id',customerController.edit);

module.exports = router;