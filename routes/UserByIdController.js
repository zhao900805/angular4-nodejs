var User = require("./dbConnection_user").getUserModel();

module.exports = function UserByIdController(req,res,next){
    console.log("user post /home/users/:id");
    var id = req.body.id;
    console.log("user id is:"+id);
    if(!id){
        console.log("no valid id in url");
        res.json({success:false,message:"no valid id in url"});
    }else{
        User.findOne({id:id},function(err,user){
            if(err){
                console.log("err in find user by id from mongoDb");
                res.json({success:false,message:"err in find user by id from mongoDb"});
            }else{
                if(!user){
                    console.log("no existed user by current id");
                    res.json({success:false,message:"no existed user by current id"});
                }else{
                    console.log("user login found by current id:"+user.login);
                    res.json({success:true,user:user});
                }
            }
        });
    }  
}