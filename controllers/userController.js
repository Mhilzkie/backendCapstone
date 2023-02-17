const user =  require('../models/users').model;

exports.getUsers = async (req,res) =>{
    
    // console.log(products);
    
    try{
        const users =  await user.findAll();
        res.send({results:users});
    
      }catch(error){
        res.send(error);
      }
}
