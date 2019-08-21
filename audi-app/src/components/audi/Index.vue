<template>
  <div>
  <!--banner部分-->
  <div class="bg">
    <div class="fleft">
      <h1 class="title">Audi {{banner[0].tname}}</h1>
      <p class="font-weight-bold my-5">{{banner[0].ttitle}}</p>
      <button class="btn btn-light">
        <a class="text-dark a-size" href="#">查看详情</a>
      </button>
    </div>
    <img class="d-block w-100 pic1 mb-5" :src="banner[0].tpic">
  </div>
  <ul class="nav nav-tabs">
    <li class="nav-item px-3"><a class="nav-link active text-dark font_small bbr p-0 mt-3" data-toggle="tab" href="#tab1">车型</a></li>
    <li class="nav-item px-3"><a class="nav-link text-dark font_small bbr p-0 mt-3" data-toggle="tab" href="#tab2">车身类型</a></li>
    <!--选项卡内容-->
    <div class="tab-content">
      <div id="tab1" class="tab-pane active">
        <ul class="d-flex justify-content-between text-center list-unstyled text-light">
          <li class=" flex-nowrap">
          </li>
          <li v-for="(item,index) in carList" :key="index">
            <a href="#">
              <img :src="item.fimg">
              <p class="m-0">{{item.fname}}
                <ul class="d-flex justify-content-between text-center list-unstyled text-light d-none">
                </ul>
              </p>
            </a>
          </li>
        </ul>
      </div>
      <div id="tab2" class="tab-pane">
        <ul class="d-flex justify-content-between text-center list-unstyled text-light">
          <li v-for="(item,index) in carLei" :key="index">
            <a class="nav-link p-0" href="#">
              <img :src="item.fimg">
              <p>{{item.fname}}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </ul>
  <div class="row">
    <table></table>
    <div class="col-lg-8 col-sm-12 div2">
      <div>
        <div class="fs">
          <h2>预约试驾</h2>
          <button @click="toDetails" class="btn btn-dark a-size">即刻预约</button>
        </div>
        <img class="pic1" src="../../images/Book_a_testdrive.jpg">
      </div>
    </div>
    <div class="col-lg-4 col-sm-12 div2">
        <div>
          <div class="fs">
            <h2>购车工具</h2>
            <button class="btn btn-dark a-size">了解详情</button>
          </div>
          <img class="pic2" src="../../images/audi_tools.jpg">
        </div>
    </div>
  </div>
  <p class="bai my-4 mx-5">精彩推荐</p>
  <div class="row d-flex mx-5">
      <div class="col-lg-4 col-sm-12 my-sm-5 my-lg-0">
        <div class="mr-3">
        <ul>
          <li>
            <img class="w-100" src="../../images/teaser.jpg">
            <p>全新奥迪Q3 心无所限<br>
                线上预定可享免费车辆商业险</p>
            <a href="#">查看详情</a><span class="iconfont icon-you2"></span>
          </li>
        </ul>
      </div>
      </div>
      <div class="col-lg-4 col-sm-6">
        <div class="mr-3">
        <ul>
          <li>
            <img class="w-100" src="../../images/teaser_q2l.jpg">
            <p class="">全新奥迪Q2L<br>不拘一格</p>
            <a href="#">查看详情</a><span class="iconfont icon-you2"></span>
          </li>
        </ul>
      </div>
      </div>
        <div class="col-lg-4 col-sm-6">
          <div class="mr-3">
          <ul>
            <li>
              <img class="w-100" src="../../images/e-tron_gallery_01.jpg">
              <p>Audi e-tron<br>
                  全面开启预售</p>
              <a href="#">查看详情</a><span class="iconfont icon-you2"></span>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-4 col-sm-12 my-5">
        <div class="mr-3">
        <ul>
          <li>
            <img class="w-100" src="../../images/teaser_03_20190131.jpg">
            <a href="#">奥迪官方认证二手车 </a><span class="iconfont icon-you2"></span>
          </li>
        </ul>
        </div>
        </div>
        <div class="col-lg-4 col-sm-6 my-5">
          <div class="mr-3">
          <ul>
            <li>
              <img class="w-100" src="../../images/teaser_02_20190131.jpg">
              <a href="#">奥迪在线4S店</a><span class="iconfont icon-you2"></span>
            </li>
          </ul>
        </div>
        </div>
        <div class="col-lg-4 col-sm-6 my-5">
          <div class="mr-3">
          <ul>
            <li>
              <img class="w-100" src="../../images/audiservice.jpg">
              <a href="#">售后服务</a><span class="iconfont icon-you2"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row d-flex mt-2">
      <div class="col-lg-6 col-sm-12 bg-light pr-0">
        <p class="big_p">查询经销商</p>
        <p class="normal_p">用心倾听，及时回应，奥迪以贴心的服务态度，让您尽享非凡礼遇。如果您有任何疑问或建议，请与经销商平台联系。</p>
        <a class="a-font"><button class="btn btn-light mx-4">查询</button></a>
      </div>
      <div class="col-lg-6 col-sm-12 px-0">
        <img class="w-100" src="../../images/new-home-locate_your_dealer.jpg">
      </div>
    </div>
    <div class="row d-flex my-5 mx-4 p-0">
      <div class="col-lg-4 col-sm-12 p-0 pr-lg-2 pr-sm-0">
        <a href="#">
          <img class="w-100" src="../../images/wx.jpg">
        </a>
        <a href="#">奥迪官方<span class="span_f">微信</span><span class="iconfont icon-you2"></span>
            <br>随时掌握Audi最新动态。</a>
      </div>
      <div class="col-lg-4 col-sm-12 p-0 pr-lg-2 pr-sm-0">
        <a href="#">
          <img class="w-100" src="../../images/wb.jpg">
        </a>
        <a href="#">奥迪官方<span class="span_f">微博</span><span class="iconfont icon-you2"></span>
          <br>实时活动即时更新，信息尽在掌握。</a>
      </div>
      <div class="col-lg-4 col-sm-12 p-0 pr-sm-0">
        <a href="#">
          <img class="w-100" src="../../images/zh.jpg">
        </a>
        <a href="#">奥迪官方<span class="span_f">知乎</span><span class="iconfont icon-you2"></span>
          <br>以专业的背景与知识，解开您对车的全部疑问。</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      banner:[{}],
      carList:[{},{},{},{}],
      carLei:[{},{},{},{},{}]
    }
  },
  created(){
    this.$emit("header",true);
    this.$emit("footer",true);
    var obj1={fn:"fname",fi:"fimg"};
    var obj2={tn:"tname",tt:"ttitle",tp:"tpic"};
    this.axios.get("/carList",{params:obj1}).then(res=>{
      this.carList=res.data.data;
    this.axios.get("/carLei",{params:obj1}).then(res=>{
      this.carLei=res.data.data;
    this.axios.get("/getBanner",{params:obj2}).then(res=>{
      this.banner=res.data.data;
    })
    })
    })
  },
  methods:{
    toDetails(){
      this.$router.push("/Details");
    }
  }
}
</script>
<style scoped>
  .container-fluid{
    padding: 0;
  }
  a{
    font-size: 1rem;
    color:rgba(0, 0, 0, 0.8) !important;
    text-decoration: none !important;
  }
  ul>li>a>img{
    transition: all 1s;
  }
  ul>li>a>img:hover{
    transform: scale(1.1);
  }
  div.fleft h1.title{
    color:#fff;
  }
  div.fleft p.font-weight-bold{
    color:#fff;
  }
  ul{
    margin: 0;
    padding: 0;
  }
  ul>li{
    list-style: none;
  }
  .hr-style{
    height: 10px;
  }
  .fleft{
    position: absolute;
    top:10rem;
    left:4rem;
    z-index: 1;
  }
  .nav-tabs .nav-link.active,
  .nav-tabs .nav-item.show .nav-link {
    border: none;
  }
  h2{
    color:#fff;
  }
  .bai{
    color:#000;
    font-size: 2rem;
    padding:1rem;
    line-height: 2rem;
  }
  .bbr{
    border-bottom:2px solid rgba(0, 0, 0, 0.8) !important;
    float:left;
  }
  .nav-tabs {
    border-bottom: 0px;
  }
  .butt{
    border:1px solid #fff;
    border-radius: 0;
    background-color: transparent;
  }
  .div2{
    position: relative;
  }
  .btn-light{
    border: 1px solid #fff;
    width: 15rem;
    height:4rem;
    border-radius: 0;
  }
  .big_p{
    font-size: 1.4rem;
    margin:2rem 2rem;
  }
  .normal_p{
    padding:2rem 2rem;
    font-size: 1rem;
  }
  .span_f{
    font-size: 1.1rem;
    color:rgb(180, 120, 120);
  }
  .span_f:hover{
    color:rgb(204,0,51);
  }

  @media (min-width:1024px){
    .pic1{
      width: 100%;
      height: 100%;
    }
    .pic2{
      width: 100%;
      height: 100%;
    }
    div>div>div>h1{
      font-size:4rem;
      line-height: 4rem;
    }
    .fs{
      position: absolute;
      font-size: 2rem;
      line-height:10rem;
      top:18rem;
      left:4rem;
    }
    .btn-dark{
      background-color: transparent !important;
      border: 1px solid #fff;
      width: 15rem;
      height:4.5rem;
      border-radius: 0;
    }
    .a-size{
      font-size: 1rem;
      line-height: 2rem;
      color:#fff;
    }
  }
  @media (min-width:768px) and (max-width:1023px){
    .pic1{
      width: 100%;
      height: 100%;
    }
    .pic2{
      width: 100%;
      height: 100%;
    }
    .fs{
      top:20rem;
      position: absolute;
      top:20rem;
      left:10rem;
    }
    div>div>div>h1{
      font-size:2rem;
      line-height: 4rem;
    }
    .fs{
      font-size: 2rem;
      line-height:4rem;
    }
    .btn-dark{
      background-color: transparent !important;
      border: 1px solid #fff;
      width: 10rem;
      height:2rem;
      border-radius: 0;
    }
    .a-size{
      font-size: 0.5rem;
      line-height: 0.5rem;
      color:#fff;
    }
  }
  @media (max-width:767px){
    .pic1{
      width: 100%;
      height: 100%;
    }
    .pic2{
      width: 100%;
      height: 100%;
    }

    div>div>div>h1{
      font-size:2rem;
      line-height: 4rem;
    }
    .fs{
      position: absolute;
      top:15rem;
      left:7rem;
      font-size: 2rem;
      line-height:4rem;
    }
    .btn-dark{
      background-color: transparent !important;
      border: 1px solid #fff;
      width: 6rem;
      height:2rem;
      border-radius: 0;
    }
    .a-size{
      font-size: 0.5rem;
      line-height: 0.5rem;
      color:#fff;
    }
  }
</style>

