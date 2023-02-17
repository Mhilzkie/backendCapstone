const product =  require('../models/products').model;

exports.getProducts = async (req,res) =>{
    
    // console.log(products);
    
    try{
        // console.log(req.params);
        const products =  await product.findAll();
        res.send({results:products});
    
      }catch(error){
        res.send(error);
      }
}