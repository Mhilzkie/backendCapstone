const customer =  require('../models/customers').model;
exports.addNewCustomer = async (req,res) =>{
    
    // console.log(products);
    try{
        console.log(req.body)
        const customers =  await customer.create({ 
          customer_Name: req.body.customer_Name,
          customer_ContactNo: req.body.customer_ContactNo,
          customer_Address: req.body.customer_Address,
          customer_Status: req.body.customer_Status,
           createdAt:true,
           updatedAt:false
          
         });
        res.send({results:customers});
    
      }catch(error){
        res.send(error);
      }
}
