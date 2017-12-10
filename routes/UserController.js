var User = require("./dbConnection_user").getUserModel();
var express = require("express");
var router = express.Router();
var app = express();

    router.post("/users",function(req,res){
        console.log("user post /home");
        if(req.body.newUser.login==null){
            console.log("can not save a user with no name");
            res.json({success:false,message:"can not save a user with no name"});//in angular,use "res.json().success"!!!
        }else{
            var newUser = new User({
                avatar_url:req.body.newUser.avatar_url,
                url:req.body.newUser.url,
                login:req.body.newUser.login,
                id:req.body.newUser.id,
                score:req.body.newUser.score,
                html_url:req.body.newUser.html_url,
                followers_url:req.body.newUser.followers_url,
                following_url:req.body.newUser.following_url,
                subscriptions_url:req.body.newUser.subscriptions_url,
                organizations_url:req.body.newUser.organizations_url,
                repos_url:req.body.newUser.repos_url,
                received_events_url:req.body.newUser.received_events_url,
                blog:req.body.newUser.blog,
                location:req.body.newUser.location,
                email:req.body.newUser.email,
                public_repos:req.body.newUser.public_repos,
                public_gists:req.body.newUser.public_gists,
                followers:req.body.newUser.followers,
                following:req.body.newUser.following,
                created_at:req.body.newUser.created_at,
                updated_at:req.body.newUser.updated_at,
                comment:req.body.newUser.comment,
                tags:req.body.newUser.tags
            });
            console.log("newUser:"+newUser);
            User.find({id:req.body.newUser.id},function(err,user){
                console.log(user.length);
                if(user.length==0){
                    console.log("no saved user before!");
                    newUser.save(function(err){
                        if(err){
                            console.log("err in saving the new user into mongoDb");
                            res.json({success:false,message:"err in saving the new user into mongoDb"});
                        }else{
                            console.log("successfully saved!");
                            res.json({success:true,id:req.body.newUser.id});
                        }
                    });
                }else{
                    res.json({success:false,message:"you have saved the user before!"});
                }
            });
            
        }
    });

    router.post("/users/:id",function(req,res){
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
    });

    router.delete("/users/:id",function(req,res){
        console.log("user delete /home/users/:id");
        var id = req.params.id;
        console.log("deleted user id is:"+id);
        if(!id){
            console.log("no valid id in url");
            res.json({success:false,message:"no valid id in url"});
        }else{
            User.find({id:id},function(err,user){
                if(err){
                    console.log("err in finding user by id");
                    res.json({success:false,message:"err in finding user by current id"});
                }else{
                    if(!user){
                        console.log("err in finding user by id");
                        res.json({success:false,message:"no user found by current id"});
                    }else{
                        User.remove({id:id},function(err){
                            if(err){
                                console.log("err in deleting user by id");
                                res.json({success:false,message:"err in deleting user by id"});
                            }else{
                                console.log("succeed deleting user by id");
                                res.json({success:true,message:"successfully deleted the user by id"});
                            }
                        });
                    }
                }
            });
    
        }
    });

    router.put("/users/:id",function(req,res){
        console.log("user update /users/:id");
        var id = req.body.user.id;
        var comment = req.body.user.comment;
        var tags = req.body.user.tags;
        if(id==null){
            console.log("id is not valid");
            res.json({success:false,message:"id is not valid"});
        }else{
            User.update({id:id},{$set:{comment:comment,tags:tags}},function(err,result){
                if(err){
                    console.log("err in updating the user by id");
                    res.json({success:false,message:"err in updating user by id"});
                }else{
                    User.find({id:id},function(err,user){
                        if(err){
                            console.log("err in finding user by id");
                            res.json({success:false,message:"no user found by current id"});
                        }else{
                            console.log("succeed updating user by id");
                            res.json({success:true,user:user});
                        }
                    });
                }
            });
        }
    });

    router.post("/users/tag/:tag",function(req,res){
        console.log("user post /users/:tag");
        var tag = req.body.tag;
        var users_by_tag = [];
        if(tag==null){
            console.log("tag is not valid");
            res.json({success:false,message:"tag is not valid"});
        }else{
            User.find({},function(err,users){
                if(err){
                    console.log("err in finding all the users");
                }else{
                    users.map(function(user){
                             if(user.findTag(tag)){
                                console.log("found!!!current user's tags:"+user.tags);
                                users_by_tag.push(user);
                             }
                    });
                    console.log("users_by_tag:"+users_by_tag);
                    if(users_by_tag.length!=null){
                        console.log("found users by the tag");
                        res.json({success:true,user:users_by_tag});
                    }else{
                        console.log("can not found users by the tag");
                        res.json({success:false,message:"can not found users by the tag"});
                    }
                }
            });
        }
    });
   

module.exports = router;