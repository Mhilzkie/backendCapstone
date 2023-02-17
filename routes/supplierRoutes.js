const supplier = require('../models/suppliers').model;
const supplierController = require('../controllers/supplierController');
// const user = require('../models/user').model;
const express = require('express');
const router = express.Router();
// const app = require('../app');

/* GET tasks by Id*/

// exports.productRouter = async (req,res) =>{
//     const products =  await product.findAll();
//     res.send(products);
// }
router.get('/',supplierController.getSupplier)
    


module.exports = router;
