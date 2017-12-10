var User = require("./dbConnection_user").getUserModel();
var express = require("express");
var router = express.Router();

router.post("/",function(req,res){
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
});

router.delete("/:id",function(req,res){
    console.log("user delete in HistoryController");
    var id = req.params.id;
    console.log("user id is:"+id);
    if(!id){
        console.log("no valid id in url");
        res.json({success:false,message:"no valid id in url"});
    }else{
        User.remove({id:id},function(err,result){
            if(err){
                console.log("err in delete user by id from mongoDb");
                res.json({success:false,message:"err in delete user by id from mongoDb"});
            }else{
                console.log("user has been removed successfully from mongoDb");
                res.json({success:false,message:"user has been removed successfully from mongoDb"});
            }
        });
    }
});

module.exports = router;

