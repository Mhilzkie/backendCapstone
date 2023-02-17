// const product =  require('../models/products').model;
const user = require('../models/users').model;
// const customer = require('../models/customers').model;


exports.getuserCount = async (req,res) =>{
    
    // console.log(products);
    
    try{
        const users =  await user.findAll();
        res.send({results:users});
    
      }catch(error){
        res.send(error);
      }
}

