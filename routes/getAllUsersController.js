var User = require("./dbConnection_user").getUserModel();

module.exports = function getAllUsersController(req,res,next){
    console.log("getAllUsersController in get /history");
    User.find({},function(err,users){
        if(err){
            console.log("err in finding users from mongoDb");
            res.json({success:false,message:"err in find users from mongoDb"}); 
        }else{
            if(!users){
                console.log("no users found in mongoDb");
                res.json({success:false,message:"no users found in mongoDb"});
            }else{
                console.log("found all the users from mongoDb");
                res.json({success:true,users:users});
            }
        }
    });
}