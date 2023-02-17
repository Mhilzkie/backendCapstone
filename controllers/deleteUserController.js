const user =  require('../models/users').model;
exports.deleteUser = async (req,res) =>{
    
    // console.log(products);
    try{
        console.log(req.params)
        const users =  await user.destroy({ 
          where :{
            id: req.params.id
          }
          
         });
        res.send({results:users});
    
      }catch(error){
        res.send(error);
      }
}
