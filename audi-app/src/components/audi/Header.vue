<template>
  <div id="head-er">
    <div class="container-fluid p-0">
  <div class="d-flex justify-content-between mb-4">
    <a href="javascript:;">
      <img class="w-75" src="../../images/LOGO1.png">
    </a>
    <a href="javascript:;">
      <img class="w-75" src="../../images/logo.png">
    </a>
  </div>
  <div class="icon-w">
    <span class="iconfont icon-Menu"></span>
    <div>
      <span>欢迎<a href="javascript:;">{{name}}</a></span>
      <span><a href="javascript:;" @click="exit">注销登录</a></span>
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <ul id="head-ul" class="head-nav">
        <li @click="show" id="audi">奥迪车型
        </li>
        <li>奥迪官方认证二手车
          <ul>
            <li>销售服务</li>
            <li>置换收购服务</li>
            <li>官方认证活动</li>
          </ul>
        </li>
        <li>购车工具
          <ul>
            <li>限时购车方案</li>
            <li>老用户购车</li>
            <li>大用户&VIP</li>
            <li>贷款服务</li>
            <li>保险服务</li>
            <li>延长保修服务</li>
            <li>在线购车</li>
          </ul>
        </li>
        <li>售后服务
          <ul>
            <li>维修保养服务</li>
            <li>24小时道路救援</li>
            <li>原厂备件附件</li>
            <li>奥迪移动出行</li>
          </ul>
        </li>
        <li>创新科技
          <ul>
            <li>奥迪概念车</li>
            <li>奥迪设计</li>
            <li>奥迪quattro</li>
            <li>奥迪驾驶系统</li>
          </ul>
        </li>
        <li><a href="http://127.0.0.1:8080/#/Sport">奥迪品牌</a>
          <ul>
            <li>奥迪新闻</li>
            <li>奥迪体验活动</li>
            <li>奥迪车主俱乐部</li>
            <li>关于奥迪</li>
            <li>责任与贡献</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <div id="car" class="row">
    <div class="col-12 m-3">
      <ul>
        <li class="cars"><a href="javascript:;">A4</a></li>
        <li class="cars"><a href="javascript:;">A5</a></li>
        <li class="cars"><a href="javascript:;">A6</a></li>
        <li class="cars"><a href="javascript:;">A7</a></li>
        <li class="cars"><a href="javascript:;">A8</a></li>
        <li class="cars"><a href="javascript:;">Q5</a></li>
        <li class="cars"><a href="javascript:;">Q7</a></li>
        <li class="cars"><a href="javascript:;">TT</a></li>
        <li class="cars"><a href="javascript:;">R8</a></li>
        <li class="cars"><a href="javascript:;">RS</a></li>
        <li class="cars"><a href="javascript:;">e-tron</a></li>
      </ul>
    </div>
    <div class="col-4 p-0">
      <div class="a4">
        <ul class="carlist w-100">
          <li class="a4s"><a class="mr-7" href="javascript:;">RS 3 Limousine</a><img src="../../images/rs-1.png"></li>
          <li class="a4s"><a class="mr-8" href="javascript:;">RS 4 Avant</a><img src="../../images/rs-2.png"></li>
          <li class="a4s"><a class="mr-8" href="javascript:;">RS 5 Coupé</a><img src="../../images/rs-3.png"></li>
          <li class="a4s"><a class="mr-7" href="javascript:;">RS 7 Sportback</a><img src="../../images/rs-4.png"></li>
        </ul>
      </div>
    </div>
    <div class="col-8 p-0">
      <img class="w-80" src="../../images/a3sport.jpg">
      <div class="row">
        <div class="col-12">
          <h2><a href="javascript:;">RS 3 Limousine</a>
            <span class="iconfont icon-you1"></span>
          </h2>
        </div>
        <div class="col-7">
          <p>价格：起步价<b>286,800.00 RMB</b></p>
          <p>全新奥迪A4L搭载的2.0TFSI®发动机其最大输出功率高达185KW，搭配7速S tronic变速器，百公里加速仅需5.9秒，最高车速可达250Km/h，让您在畅快无忧的旅途中感受澎湃动感的极速激情。</p>
        </div>
        <div class="col-5">
          <ul class="ml-5">
            <li class="pb-3"><a href="javascript:;">查询新车库存</a><span class="iconfont icon-you2"></span></li>
            <li class="pb-3"><a href="javascript:;">定制您的奥迪</a><span class="iconfont icon-you2"></span></li>
            <li class="pb-3"><a href="javascript:;">预约试驾</a><span class="iconfont icon-you2"></span></li>
            <li class="pb-3"><a href="javascript:;">装备价格表</a><span class="iconfont icon-you2"></span></li>
            <span id="close" class="iconfont icon-iconfontclose
            "></span>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>
</template>
<script>
import {setCookie,delCookie, getCookie} from "./js/cookie.js"
export default {
  data(){
    return {
      name:""
    }
  },
  mounted(){
    let uname=getCookie("uname");
    this.name=uname;
    if(uname==""){
      this.$router.push("/Index")
    }
  },
  methods:{
    show(){
      $("#audi").mouseover(function(){
      $("#car").css("display","flex").css("opacity","1").css("transition","all .5s linear")
      })
      $("span#close").click(function(){
        $("#car").css("display","none");
      })
      $(function(){
        $.ajax({
          url:"header.html",
          type:"get",
          success:function(result){
            $(result).replaceAll("#header");
            $(`<link rel="stylesheet" href="../css/header.css">`);
          }
        })
      })
    },
    exit(){
      delCookie("uname");
      this.$router.push("/Login");
    }
  },
}
</script>
<style scoped>
  *{margin:0;padding:0}
  body{
    box-sizing: border-box;
    font-family: sans-serif;
  }
  .w-80{
    width: 730px;
  }
  .mr-7{
    margin-right:7rem;
  }
  .mr-8{
    margin-right: 8.8rem;
  }
  ul{
    list-style: none;
  }
  li,a{
    color:#212529;
  }
  a:hover{
    color:red;
  }
  div.icon-w div{
     float:right;
     margin:0 4rem;
  }
  .icon-w{
    width: 100%;
  }
  ul#head-ul>li{
    width:90px; height:30px;
    border: 0;
    float:left;
    margin-left: 8rem;
    line-height:30px;
    position: relative;
  }
  ul#head-ul>li:nth-child(2){
    width:180px;
  }
  ul#head-ul>li:hover{
    height:30px; line-height:30px;
    cursor:pointer;
  }
  ul>li>ul>li{
    font-size: 14px;
    margin: 2px 0;
    text-align:left;
    width:150px;
    height:30px; line-height:30px;
  }
  ul>li>ul{
  /* 如果只做单纯的显示，就这个：display:none; */
    top:35px;
    height:0px;
    opacity:1;
    background-color: #fff !important;
    overflow:hidden;
    transition: all .2s linear;
    width:130px;
    border-top:0;
    position: absolute;
    z-index: 10;
  }
  ul>li:hover>ul{
    /* 如果只做单纯的显示，就这个：display:block; */
    opacity:1;
    box-shadow: 2px 2px 1px rgb(231, 231, 231);
    height:100px;
    background-color: #fff;
  }
  ul>li>ul>li:hover{
    color:red;
  }
  div>div>ul>li.cars{
    float: left;
    margin-right: 3rem;
  }
  div>div>ul>li.a4s>img{
    width: 90px;
  }
  div>div>ul>li.a4s{
    border-bottom: 1px solid #aaa;
    margin: 15px 0;
  }
  div>div>ul.carlist:first-child{
    border-top: 1px solid #aaa;
  }
  #car{
    opacity: 0;
    background-color: #fff;
    position: absolute;
    transition: all .5s linear;
    z-index: 20;
  }
  span#close:hover{
    transform: scale(1.3);
    transition: all .3s linear;
  }
  @media (max-width:767px) {
    div>ul#head-ul{
      display:none;
    }
    div>span.iconfont{
      display:block;
    }
  }
  @media (min-width:768px) and (max-width:992px) {
    div>ul.head-nav{
      position: absolute;
      left:110px;
    }
    div>ul#head-ul{
      display:none;
    }
    div>span.iconfont{
      display:block;
    }
  }
  @media (min-width:992px) and (max-width:1200px) {
    div>ul.head-nav{
      left:170px;
    }
    div>ul#head-ul{
      display: block;
    }
    div>span.iconfont{
      display:none;
    }
  }
  @media (min-width:1200px) {
    div>ul.head-nav{
      left:370px;
    }
    div>ul#head-ul{
      display: block;
    }
    div>span.iconfont{
      display:none;
    }
  }
</style>

