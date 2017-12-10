var mongoose = require("mongoose");
var dbUrl = "mongodb://127.0.0.1:27017/cs701";
var connection = null;
var model = null;
var Schema = mongoose.Schema;

var userSchema = new Schema({
    avatar_url:{type:String,default:null},
    url:{type:String,default:null},
    login:{type:String,default:null},
    id:{type:Number,unique:true},
    score:{type:Number,default:0.00},
    html_url:{type:String,default:null},
    followers_url:{type:String,default:null},
    following_url:{type:String,default:null},
    subscriptions_url:{type:String,default:null},
    organizations_url:{type:String,default:null},
    repos_url:{type:String,default:null},
    received_events_url:{type:String,default:null},
    blog:{type:String,default:null},
    location:{type:String,default:null},
    email:{type:String,default:null},
    public_repos:{type:String,default:null},
    public_gists:{type:String,default:null},
    followers:{type:String,default:null},
    following:{type:String,default:null},
    created_at:{type:String,default:null},
    updated_at:{type:String,default:null},
    comment:{type:String,default:null},
    tags:[{type:String,default:null}]
});

userSchema.methods.findTag = function(currTag){
     return this.tags.includes(currTag);
}

module.exports.getUserModel = function (){

    if(connection == null){
        console.log("cs701 user_schema creating connection...");
        connection = mongoose.createConnection(dbUrl,function(err,db){
            if(err){
                console.log('cs701 user_schema can not be create!');
            }
        });
        model = connection.model("User",userSchema);
    }
    return model;
}
