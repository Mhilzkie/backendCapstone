const deleteusercontroller = require('../controllers/deleteUserController');

const express = require('express');
const router = express.Router();



router.delete('/:id',deleteusercontroller.deleteUser)
    
module.exports = router