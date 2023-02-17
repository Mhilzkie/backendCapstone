const supplier =  require('../models/suppliers').model;
exports.addNewSupplier = async (req,res) =>{
    
    // console.log(products);
    try{
        console.log(req.body)
        const suppliers =  await supplier.create({ 
          supplierName: req.body.supplierName,
          supplierContactPerson: req.body.supplierContactPerson,
          supplierEmail: req.body.supplierEmail,
          suppliercontactNumber: req.body.suppliercontactNumber,
          supplierStreetAdd: req.body.supplierStreetAdd,
          supplierCityMunicipality:req.body.supplierCityMunicipality,
          supplierStateProvince:req.body.supplierStateProvince,
          supplierPostalZipcode:req.body.supplierPostalZipcode,
           createdAt:true,
           updatedAt:false
          
         });
        res.send({results:suppliers});
    
      }catch(error){
        res.send(error);
      }
}
