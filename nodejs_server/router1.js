var express1 = require('express');
var router = express1.Router();
var mysql1=require("mysql");
var bodyparser1=require("body-parser"); 
router.use(bodyparser1.urlencoded({extended:false}));//转码
//创建数据库连接池
var pool=mysql1.createPool({
  connectionLimit:20, 
  host:'127.0.0.1',
  port:3306,
   database:"beautymakeup",
  user:'root',
  password:'xm'
});
//1.查询用户信息
//查询beautymakeup数据库里面user_info表中的所有信息
router.get('/select_user_info', (req, res) => {
  //从连接池中获取一次链接
  pool.getConnection((error,conn)=>{
    if(error)throw error;
    var salcha='SELECT id ,username,PASSWORD,phone,email,titleimage FROM user_info'
    //查询数据库，获取结果
    conn.query(salcha,(error,results,fields)=>{
      console.log(results[0].username,results.length);
      res.send(results);
    });
    conn.release();
  });
});
//2.用户注册，插入数据api
//户注册，插入数据到user_info表，有新用户
router.post("/add_user_info", (req, res) => {
  console.log(req.body, req.body.username)
  pool.getConnection((error, conn) => {
    if (error) throw error
    var sql = "insert into user_info(username,password,email,phone,titleimage) values(?,?,?,?,?)"
    var data = [req.body.username, req.body.email, req.body.password,req.body.phone, req.body.titleimage]
    conn.query(sql, data, (error, results, fields) => {
      if (error) throw error
      console.log(results.affectedRows)
      res.send("ok")
    })
    conn.release()
  })
})

//3查询数据库评论数据渲染到页面上
router.get('/select_think_comment', (req, res) => {
  //从连接池中获取一次链接
  pool.getConnection((error,conn)=>{
    if(error)throw error;
    var salcha='SELECT id ,comment_date,connent,user_id,think_id FROM think_comment'
    //查询数据库，获取结果
    conn.query(salcha,(error,results,fields)=>{
      console.log(results.length);
      res.send(results);
    });
    conn.release();
  });
});
//4.删除某一条评论
router.post("/delete_think_comment",(req,res)=>{
  console.log(req.body,req.body.id);
  pool.getConnection((error,conn)=>{
    var sal='DELETE FROM think_comment WHERE id=?'    
    var data = [req.body.id];
    console.log(data);
    conn.query(sal,data,(error,results,fields)=>{
    if(error)throw error;
      console.log(results.affectedRows);
      res.send(" delete ok! xm");
    });
    conn.release();
  })
});
//6.添加某一条评论
//增加一条评论，把评论存在数据库
router.post("/insert_think_comment", (req, res) => {
  console.log(req.body, req.body.username)
  pool.getConnection((error, conn) => {
    if (error) throw error
    var sql = "insert into think_comment(id ,comment_date,connent,user_id,think_id) values(?,?,?,?,?)"
    var data = [req.body.id , req.body.comment_date, req.body.connent,req.body.user_id, req.body.think_id]
    conn.query(sql, data, (error, results, fields) => {
      if (error) throw error
      console.log(results.affectedRows)
      res.send("insert think_comment ok")
    })
    conn.release()
  })
})

module.exports = router