const product =  require('../models/products').model;

exports.getProducts = async (req,res) =>{
    
    // console.log(products);
    
    try{
        const products =  await product.findAll();
        res.send({results:products});
    
      }catch(error){
        res.send(error);
      }
}

exports.getSelectedProduct= async (req,res) =>{

  try{
      console.log(req.params)
      const productSelected =  await product.findOne({
          where :{
            id: req.params.id
          }
         });
      res.send({results:productSelected});
    }catch(error){
      res.send(error);
    }
}
