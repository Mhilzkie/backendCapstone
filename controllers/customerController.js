const customer =  require('../models/customers').model;

exports.getCustomers = async (req,res) =>{
    
    // console.log(products);
    
    try{
        const customers =  await customer.findAll();
        res.send({results:customers});
    
      }catch(error){
        res.send(error);
      }
}
