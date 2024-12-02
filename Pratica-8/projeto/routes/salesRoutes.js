const express = require('express');
const salesController = require('../controllers/salesController')

const router = express.Router();

router.post('/sales', salesController.creatSale);
router.get('/sales', salesController.getAllSales);
router.get('/sales/top',salesController.getTopProducts);

module.exports = router;
