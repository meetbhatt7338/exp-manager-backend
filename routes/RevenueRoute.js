const revenueController = require('../controllers/RevenueController');
const router = require('express').Router();


router.post('/addrevenue',revenueController.createRevenue);
router.get('/getrevenue/:id',revenueController.getAllRevenueByUserId);
router.get('/getrevenuebyid/:id',revenueController.getAllRevenueById);
router.delete('/removerevenue/:id',revenueController.removeRevenue);
router.put('/updaterevenue/:id',revenueController.updateRevenue);

module.exports = router;
