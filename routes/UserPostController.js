var User = require("./dbConnection_user").getUserModel();

module.exports = function UserPostController(req,res,next){
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
                tags:req.body.newUser.tags
            });
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
}