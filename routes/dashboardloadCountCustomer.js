// const product = require('../models/products').model;
const dashboardloadController = require('../controllers/dashboardloadCountCustomerController');
// const user = require('../models/user').model;
const express = require('express');
const router = express.Router();
// const app = require('../app');

/* GET tasks by Id*/

// exports.productRouter = async (req,res) =>{
//     const products =  await product.findAll();
//     res.send(products);
// })
router.get('/',dashboardloadController.getCustomersCount)


module.exports = router;

