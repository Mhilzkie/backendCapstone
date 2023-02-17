const customer =  require('../models/customers').model;
exports.deleteCustomer = async (req,res) =>{
    // console.log(req.params);
    try{
        // console.log(customers)
        const customers=  await customer.destroy(
          { 
          where :{
            id: req.params.id
          }
          
         });
        res.send({results:customers});
    
      }catch(error){
        res.send(error);
      }
}
