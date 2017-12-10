var express = require("express");
var app = express();
var path = require("path");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var router = express.Router();
var bodyParser = require("body-parser");
//var UserPostController = require("./routes/UserPostController");
//var UserByIdController = require("./routes/UserByIdController");
//var DeleteUserByIdController  =require("./routes/DeleteUserByIdController");
//var getAllUsersController = require("./routes/getAllUsersController");

var UserController = require("./routes/UserController");
var HistoryController = require("./routes/HistoryController");

app.use(express.static(__dirname+"/client/dist/"));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/home",UserController);
app.use("/history",HistoryController);

//router.post("/home/users",UserPostController);
//router.post("/home/users/:id",UserByIdController);
//router.use("/history",getAllUsersController);
//router.delete("/history",DeleteUserByIdController);

app.get("*",function(req,res){   //"*"is important!,make sure all requests to index.html,put '*' at last!
    res.sendFile(path.join(__dirname+"/client/dist/index.html"));
});

app.listen(3000,function(){
    console.log("3000");
});