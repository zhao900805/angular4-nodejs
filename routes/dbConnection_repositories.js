var mongoose = require("mongoose");
var dbUrl = "mongodb://127.0.0.1:27017/cs701";
var connection = null;
var model = null;
var Schema = mongoose.Schema;

var repositoriesSchema = new Schema({
    id:{type:Number,unique:true},
    name:{type:String,default:null},
    fullname:{type:String,default:null},
    owner:{type:String,default:null},
    owner_login:{type:String,default:null},
    owner_id:{type:Number,unique:true},
    owner_avatar_url:{type:String,default:null},
    owner_url:{type:String,default:null}
});

module.exports.getRepositoryModel = function(){
    if(connection == null){
        console.log("cs701 repositories_Schema is creating connection...");
        connection = mongoose.createConnection(dbUrl,function(err,db){
            if(err){
                console.log('repositories_Schema can not be create!');
            }
        });
        model = connection.model("Repository",repositoriesSchema);
    }
    return model;
}
