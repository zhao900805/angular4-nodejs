var mongoose = require("mongoose");
var dbUrl = "mongodb://127.0.0.1:27017/cs701";
var connection = null;
var model = null;
var Schema = mongoose.Schema;
var dbConnection_post = require("./dbConnection_post");

var issueSchema = new Schema({
    url:{type:String,default:null},
    repository_url:{type:String,default:null},
    labels_url:{type:String,default:null},
    comments_url:{type:String,default:null},
    events_url:{type:String,default:null}
});

module.exports.getIssueModel = function(){
    if(connection == null){
        console.log("cs701 issueSchema is creating connection...");
        connection = mongoose.createConnection(dbUrl,function(err,db){
            if(err){
                console.log('cs701 issueSchema can not be create!');
            }
        });
        model = connection.model("Issue",issueSchema);
    }
}