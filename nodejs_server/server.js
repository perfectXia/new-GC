var express1=require("express");
var path1=require("path");
var router1=require('./router1.js');


var app=express1();
//app
app.use((req,res,next)=>{
  res.header('Access-Control-Allow-Origin',"*");
  res.header('Access-Control-Allow-Headers',"Origin,X-Requested-With,Content-Type,Accpet");
  next();
})
//设置静态资源路径
var sever1=express1.static(path1.join(__dirname,'public'));
//使用静态资源
app.use(sever1);
//使用路由设置
app.use('/',router1);
// app.get('/user',(req,res)=>{
//   res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
//   res.write("<a href='/'>首页</a><br/>");
//   res.write("<a href='/user'>用户</a><br/>");
//   res.write("<a href='/a*c'>正则表达式</a><br/>");
//   res.write(" get /user");
//   res.send();
// });

app.listen(3000,()=>{
  console.log("Server is running now! xm");
  // console.log(router1)
})