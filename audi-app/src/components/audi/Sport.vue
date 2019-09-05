<template>
  <div>
    <div class="guding">
    <div class="head-bg">
    <ul>
      <li><a href="javascript:;"><img class="l-logo" src="../../images/sport/logo1.png" alt="一汽-大众"></a></li>
      <li><a id="index" class="head-a" href="http://127.0.0.1:8080/#/Index">首页</a></li>
      <li>
        <a class="head-a list-open" href="javascript:;">运动车型
          <ul>
            <li>R8</li>
            <li>RS</li>
            <li>S</li>
          </ul>
        </a>
      </li>
      <li>
        <a class="head-a list-open" href="javascript:;">奥迪运动基因
          <ul>
            <li>百年赛道历史</li>
            <li>体验运动基因</li>
          </ul>
        </a>
      </li>
      <li>
        <a class="head-a list-open" href="javascript:;">热门赛事
          <ul>
            <li>WEC比赛</li>
            <li>DTM房车赛</li>
            <li>R8 LMS Cup</li>
          </ul>
        </a>
      </li>
      <li>
        <a class="head-a list-open" href="javascript:;">驾控体验中心
          <ul>
            <li>定制赛道体验</li>
            <li>道路试驾体验</li>
            <li>Audi Sport 赛道</li>
          </ul>
        </a>
      </li>
      <li>
        <a class="head-a list-open" href="javascript:;">奥迪运动商城
          <ul>
            <li>运动精品</li>
          </ul>
        </a>
      </li>
      <li><a href="javascript:;"><img class="mt-2" src="../../images/sport/logo2.png" alt="Audi"></a></li>
    </ul>
    </div>
    </div>
    <div class="container-fluid p-0">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <a href=""><img class="d-block w-100" src="../../images/sport/PC-01.jpg"></a>
          </div>
          <div class="carousel-item">
            <a href=""><img class="d-block w-100" src="../../images/sport/PC-02.jpg"></a>
          </div>
          <div class="carousel-item">
            <a href=""><img class="d-block w-100" src="../../images/sport/PC-03.jpg"></a>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
    <div class="container-fluid body-bg pb-2">
      <div class="row">
        <div class="col-12 mt-5 mb-4 p-0">
          <img class="list" src="../../images/sport/other-1-img.png">
        </div>
        <div class="col-12 p-0">
          <img class="list" src="../../images/sport/other-2-img.png">
        </div>
      </div>
    </div>
    <div class="fo">
    <div class="foo">
      <ul class="foot">
        <li v-for="(ftext,index) in foottext" :key="index" class="left"><a href="javascript:;">{{ftext}}</a></li>
        <li class="right"><a href="javascript:;">
          <img src="../../images/sport/xl.png">
        </a></li>
        <li @mouseenter="changeIndex" class="right"><a href="javascript:;">
          <img id="qr" src="../../images/sport/qr.png">
          <img id="wx" src="../../images/sport/wx.png">
        </a></li>
        <li class="right"><a href="javascript:;">
          <img src="../../images/sport/tm.png">
        </a></li>
      </ul>
    </div>
    </div>
  </div>
</template>
<script>
import sport from "./js/sport.js"
export default {
  data(){
    return {
      foottext:["预约试驾","查询经销商","一汽-大众奥迪","联系我们","版权说明"]
    }
  },
  components:{},
  created(){
    this.$emit("header",false);
    this.$emit("footer",false);
  },
  methods:{
    changeIndex(){
      $("#wx").mouseenter(function() {
      $("#qr").css("display","block");
      });
      $("#wx").mouseleave(function() {
      $("#qr").css("display","none");
      });
    }
  },
}
</script>
<style scoped>
  *{margin:0;padding:0}
  body{
    width: 100%;
    min-width: 1000px;
    font-family: "microsoft yahei";
  }
  div>.mb-4{margin-bottom: 35px !important}
  .guding{
    position: fixed;
    z-index: 100;
    width: 100%;
  }
  .head-bg>ul{
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: space-between;
    padding:0.2rem 1rem;
    margin-bottom: 0;
    background: url(../../images/sport/bg.png);
  }
  .body-bg{
    display: flex;
    background: url(../../images/sport/bodybg.jpg) repeat;
    z-index: 44;
  }
  .carousel-control-prev,.carousel-control-next{
    position: absolute;
    top:50% !important;
    width: 3% !important;
    height: 8%;
    top:200px;
    background-color: #aaa;
  }
  .d-block{margin-top: 56.38px}
  .carousel-indicators li{
    width: 0.6rem;  height: 0.6rem;
    background: #fff;
    margin-left: 6px;
    margin-right: 6px;
  }
  .carousel-indicators .active{
    background: #0aa1ed;
  }
  #p1,#p2,#p3,#p4{width: 100%;}
  .l-logo{margin-top:1.3rem}
  li{
    list-style: none;
    text-align: center;
    align-items: center;
  }
  li>a.head-a{
    line-height: 50px;
    font-style: oblique;
    font-weight: bolder;
    color:#838383;
    text-decoration: none;
    background-color: transparent;
  }
  ul>li>a>ul{
    clear:both;
    position:absolute;
    top:60px;
    height:0px;
    opacity:0;
    overflow:hidden;
    transition:all .3s linear;
  }
  ul>li>a>ul>li{
    display:block;
    float: left;
    background-color:#fff;
    text-align:left;
    width:120px;
    height:2rem; line-height:2rem;
  }
  ul>li>a:hover>ul{
    position: absolute;
    opacity:1;
    height:2rem;
    z-index: 10;
  }
  .head-bg>ul>li>#index:hover{
    color:red;
  }
  div>img.list{
    width: 100%;
  }
  div>ul.foot>li.left{
    float: left;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  div>ul.foot>li.right{
    float:right;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  div.fo{position: relative;}
  div.foo{
    background: #1b1b1b repeat-x;
    height: 5rem;
    width: 100%;
    position: absolute;
    top:0;
  }
  div.foo>ul>li>a{
    line-height: 5rem;
    color:#888b85;
    text-decoration: none;
    font-family:"microsoft yahei";
  }
  ul.foot>li.right{position: relative;}
  #qr{
    position: absolute;
    top:-130px;left:-40px;
    display: none;
  }
  div.foo>ul>li>a:hover{
    color:#fff;
  }
</style>