//web服务器
const express = require("express");
//mysql驱动
const mysql = require("mysql");
//跨域
const cors = require("cors");
//session
const session = require("express-session");
//2:配置数据库连接池:提高数据效率
var pool = mysql.createPool({
   host:"127.0.0.1",  //数据库地址
   user:"root",       //数据库用户名
   password:"",       //数据库密码
   port:3306,         //数据库端口
   database:"audi",     //数据库名称
   connectionLimit:15 //连接数量
});
var server = express();
//3:配置跨域模块
server.use(cors({
   //允许跨域访问程序地址列表
   origin:["http://127.0.0.1:8080",
   "http://localhost:8080"],
   credentials:true //请求验证
}))
//4:配置session模块
server.use(session({
  secret:"128位字符串",    //安全字符串
  resave:true,            //请求时更新数据
  saveUninitialized:true  //保存初始数据
}));
server.use(express.static("public"));
//5:启动监听
server.listen(3000);
server.get("/login",(req,res)=>{
  //1:参数:获取网页传递两个数据 uname upwd
  //参数方式一:?uname=tom&upwd=123 查询字符串
  //参数方式二:/tom/123            参数
  var uname = req.query.uname;
  var upwd = req.query.upwd;
  //2:sql:查询sql语句
  //数据库 库名 表名 列名 小写字母
  var sql_log = "SELECT id FROM user WHERE uname = ? AND upwd= ? ";
  //3:json:{code:1,msg:"登录成功"}
  pool.query(sql_log,[uname,upwd],(err,result)=>{
     //执行sql语句回调函数
    if(err)throw err;
     //判断
    if(result.length==0){
      res.send({code:-1,msg:"用户名或密码有误"});
    }else{
      //1.将登录成功凭据保存在session中
      //result=[{id:1}]
      req.session.id=result[0].id;
      console.log(req.session.id);
      //2.将成功消息发送到脚手架
      res.send({code:1,msg:"登录成功"})    
    }
  })
});
//注册
server.get("/register",(req,res)=>{
  var uname=req.query.uname;
  var upwd=req.query.upwd;
  var sql_reg="INSERT INTO user (uname,upwd) VALUES (?,?)";
  pool.query(sql_reg,[uname,upwd],(err,result)=>{
    if(err) throw err;
    console.log(result);
    if(result.affectedRows<0){
      res.send({code:-1,msg:"注册失败"});
    }else{
      res.send({code:1,msg:"注册成功"});
    }
  })
})