var express1 = require('express');
var router = express1.Router();
// router.get('/', (rq, res) => {
//   res.redirect('index.html');
// });
var mysql1=require("mysql");
var bodyparser1=require("body-parser"); 
router.use(bodyparser1.urlencoded({extended:false}));//转码
//创建数据库连接池
var pool=mysql1.createPool({
  connectionLimit:20, 
  host:'127.0.0.1',
  port:3306,
   database:"Libary",
  user:'root',
  password:'xm'
});
//查询所有雇员
router.get('/book', (req, res) => {
  //从连接池中获取一次链接
  pool.getConnection((error,conn)=>{
    if(error)throw error;
    var salcha='SELECT id ,name,author ,DATE_FORMAT(created_date,"%Y-%m-%d") created_date,image FROM book1'
    //查询数据库，获取结果
    conn.query(salcha,(error,results,fields)=>{
      console.log(results[0].ename,results.length);
      res.send(results);
    });
    conn.release();
  });
});
//增加数据
router.post("/add",(req,res)=>{
  console.log(req.body,req.body.id);
  pool.getConnection((error,conn)=>{
    var sal='insert into book1(id,name,author,created_date)values(?,?,?,?)'    
    var data = [req.body.id,req.body.name,req.body.author,req.body.created_date];
    console.log(data);
    conn.query(sal,data,(error,results,fields)=>{
    if(error)throw error;
      console.log(results.affectedRows);
      res.send(" insert ok! xm");
    });
    conn.release();
  })
});
//删除
router.post("/delete",(req,res)=>{
  console.log(req.body,req.body.id);
  pool.getConnection((error,conn)=>{
    var sal='DELETE FROM book1  WHERE id=?'    
    var data = [req.body.id,req.body.name,req.body.author,req.body.created_date];
    console.log(data);
    conn.query(sal,data,(error,results,fields)=>{
    if(error)throw error;
      console.log(results.affectedRows);
      res.send(" delete ok! xm");
    });
    conn.release();
  })
});
module.exports = router