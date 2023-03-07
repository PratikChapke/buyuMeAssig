
// import Products from "../models/user";
const Products = require('../models/user')

module.exports.Add = async function(req, res){
    
try{
  let newProduct  = await Products.create({
    productId: req.body.productId,
    quantity: req.body.quantity,
     operation : req.params.operation,
   })

  return res.json({newProduct})
        
    

}catch(err){
    console.log("Error  :", err )
} 
}

//  remove product 

module.exports.delete = async function(req, res){
    
    try{
        await Products.findByIdAndDelete(req.params.productId);
        return res.status(200).json({
           data: { massage : " Product deleted Successfully " }
        });
    }
    catch(err){
        console.log("Error  :  ", err )

    }
}