const user =  require('../models/users').model;
exports.addNewUser = async (req,res) =>{
    
    // console.log(products);
    try{
        console.log(req.body)
        const users =  await user.create({ 
          user_Username	: req.body.user_Username,
          user_Password	: req.body.user_Password	,
          user_CompleteName	: req.body.user_CompleteName,
          user_AccountType	: req.body.user_AccountType,
           createdAt:true,
           updatedAt:false,
          });
          res.send({results:users});
      
        }catch(error){
        res.send(error);
      }
    }