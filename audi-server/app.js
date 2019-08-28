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
  var sql_log = "SELECT id,uname FROM user WHERE uname = ? AND upwd= ? ";
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
      req.session.uname=result[0].uname;
      console.log(req.session.id);
      console.log(req.session.uname);
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
});
//获取用户登录状态
server.get("/getUname",(req,res)=>{
  var id=req.session.id;
  if(!id){
    res.send({code:-1,msg:"未登录"});
  }else{
    var IDsql="SELECT uname FROM user WHERE id= ?";
    pool.query(IDsql,[id],(err,result)=>{
      if(err) throw err;
      var uname=req.session.uname;
      res.send({code:1,msg:"已登录",data:uname});
    })
  }
});
server.get("/getImg",(req,res)=>{
  var sql = "SELECT fname,fimg,price,fdetail FROM car_family";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send({code:1,msg:"success",data:result});
  })
})
//获取首页车型列表图片及车型名
server.get("/carList",(req,res)=>{
  var fid=req.query.fid;
  var sql="SELECT fname,fimg FROM car_family WHERE fid IN(3,5,6,9) GROUP BY fid";
  pool.query(sql,[fid],(err,result)=>{
    if(err) throw err;
    res.send({code:1,msg:"查询成功",data:result});
  })
});
//获取首页车型类型列表图片及类型名
server.get("/carLei",(req,res)=>{
  var fid=req.query.fid;
  var sql="SELECT fname,fimg FROM car_family WHERE fid IN(11,4,16,7,14) GROUP BY fid"
  pool.query(sql,[fid],(err,result)=>{
    if(err) throw err;
    res.send({code:1,msg:"查询成功",data:result})
  })
})
//首页banner图
server.get("/getBanner",(req,res)=>{
  var tid=req.query.tid;
  var sql="SELECT tname,ttitle,tpic FROM car_top WHERE tid = 0"
  pool.query(sql,[tid],(err,result)=>{
    if(err) throw err;
    res.send({code:1,msg:"查询成功",data:result})
  })
})
//获取预约页面表格中的数据,保存在数据库中
server.get("/setInfo",(req,res)=>{
  var cid = req.query.cid;
  var sid = req.query.sid;
  var oname = req.query.oname;
  var ophone = req.query.ophone;
  var pid = req.query.pid;
  var sql = "INSERT INTO order_list (cid,sid,oname,ophone,pid) VALUE (?,?,?,?,?)";
  pool.query(sql,[cid,sid,oname,ophone,pid],(err,result)=>{
    if(err) throw err;
    if(result.affectedRows<0){
      res.send({code:-1,msg:"提交失败"});
    }else{
      res.send({code:1,msg:"提交成功"});
    }
  })
})