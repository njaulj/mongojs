//app.js

var databaseUrl="mydb";
var collections=["users","reports"];
var db=require("mongojs").connect(databaseUrl,collections);

//find  user
　db.users.find({sex:"female"},function(err, users){
  　　if( err ||!users) console.log("No female users found");
 　　 else users.forEach(function(femaleUser){
    　　console.log(femaleUser);
  　　});
　　});


//insert  user
db.users.save({email:"717010686@qq.com", password:"iLoveMongo", sex:"male"},function(err, saved){
  　　if( err ||!saved ) console.log("User not saved");
  　　else console.log("User saved");
　　});

　　

　db.users.save({email:"18251888949@163.com", password:"iLoveMongo", sex:"female"},function(err, saved){
  　　if( err ||!saved ) console.log("User not saved");
  　　else console.log("User saved");
　　});

//update user.psw
db.users.update({email:"717010686@qq.com"},{$set:{password:"iReallyLoveMongo"}},function(err, updated){
  　　if( err ||!updated ) console.log("User not updated");
  　　else console.log("User updated");
　　});


