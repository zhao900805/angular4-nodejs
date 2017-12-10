var User = require("./dbConnection_user").getUserModel();

module.exports = function DeleteUserByIdController(req,res,next){
    console.log("delete history user by id");
    if(req.body.id==null){
        console.log("no id is selected to delete");
        res.json({success:false,message:"no id selected!"});
    }else{
        var curr_id = req.body.id;
        User.find({id:curr_id},function(err,user){
            if(err){
                console.log("err in finding user by id in DeleteUserByIdController");
                res.json({success:false,message:"failed to delete the user by id!"});
            }else{
                if(!user){
                    console.log("err in finding user by id in DeleteUserByIdController");
                    res.json({success:false,message:"failed to delete the user by id!"});
                }else{
                    user.remove(function(err){
                        if(err){
                            console.log("err in finding user by id in DeleteUserByIdController");
                            res.json({success:false,message:"failed to delete the user by id!"});
                        }else{
                            console.log("successfully deleted the user by id!");
                            res.json({success:true,message:"successfully deleted the user by id"});
                        }
                    });
                }
            }
        });
    }
}