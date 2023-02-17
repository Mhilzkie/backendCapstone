const supplier =  require('../models/suppliers').model;

exports.getSupplier = async (req,res) =>{
    
    // console.log(products);
    
    try{
        console.log(req.params);
        const suppliers =  await supplier.findAll()
        res.send({results:suppliers});
    
      }catch(error){
        res.send(error);
      }
}
