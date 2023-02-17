const product =  require('../models/products').model;
const user = require('../models/users').model;
const customer = require('../models/customers').model;
const productcritical = require('../models/products').model;
const { Op } = require("sequelize");

exports.getproductCount = async (req,res) =>{
    
    // console.log(products);
    
    try{
        const products =  await product.findAll();
        const users =  await user.findAll();
        const customers =  await customer.findAll();

        const productcriticals =  await productcritical.findAll({
          where:{
            product_Quantity: {
              [Op.lte]: 5
            }
          }
        });
      
        


        res.send({results: {products,users,customers,productcriticals}});
        // res.send({results:users});
        // res.send({results:customers});
        // console.log("this is results" + {results:results});
    
      }catch(error){
        res.send(error);
      }

      // try{
      //   const users =  await user.findAll();
      //   res.send({results:users});
    
      // }catch(error){
      //   res.send(error);
      // }
      
      // try{
      //   const customers =  await customer.findAll();
      //   res.send({results:customers});
    
      // }catch(error){
      //   res.send(error);
      // }
     
}


