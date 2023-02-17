const product =  require('../models/products').model;
exports.addNewProduct = async (req,res) =>{
    
    // console.log(products);
    try{
        console.log(req.body.product_Unit)
        const products =  await product.create({ 
           product_Name: req.body.product_Name, 
           product_Description: req.body.product_Description,
           product_Unit: req.body.product_Unit,
           product_Quantity: req.body.product_Quantity,           
           product_Price: req.body.product_Price,
           createdAt:true,
           updatedAt:false
          
         });
        res.send({results:products});
    
      }catch(error){
        res.send(error);
      }
}
