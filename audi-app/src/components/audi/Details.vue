<template>
  <div>
    <!-- head -->
    <div class="container">
      <div class="head">
        <span class="bigtit"><b>预约试驾</b></span>
        <ul class="breadcrumb">
          <li><a href="javascript:;">登录</a></li>
          <li><a href="javascript:;">注册</a></li>
        </ul>
      </div>
      <hr>
      <!-- 二级联动菜单 -->
      <div class="row">
        <div class="col-5">
          <span>意向车型</span>
          <select name="" id="" v-model="chexiName">
            <option :value="item1" v-for="(item1,index) in cars">{{item1.chexi}}</option>
          </select>
          <select name="" id="" v-model="chexingName">
            <option :value="item1" v-for="(item1,index) in chexi.chexing">{{item1}}</option>
          </select>
          <select name="" id="" v-model="shengName">
            <option :value="item2" v-for="(item2,index) in citys">{{item2.sheng}}</option>
          </select>
          <span>意向经销商</span>
          <select name="" id="" v-model="shiName">
            <option :value="item2" v-for="(item2,index) in sheng.shi">{{item2}}</option>
          </select>
          <p>姓名</p>
          <input type="text" class="name" @blur="reg_name">
          <p v-show="showName">您的姓名不可为空</p>
          <input type="radio" name="sex" id="man">
          <input type="radio" name="sex" id="woman">
          <p>手机号码</p>
          <input type="text" class="phone" @blur="reg_phone">
          <p v-show="showPhone">您的移动电话不可为空</p>
          <p>计划购车时间</p>
          <select name="" id="" v-model="payTime">
            <option :value="item3" v-for="(item3,index) in payTime">{{item3}}</option>
          </select>
          <input type="checkbox" name="" id="">
          <p>同意隐私条款</p>
          <mt-button>提交</mt-button>
        </div>
        <div class="col-7">
          <div id="allmap"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      chexi:"",
      chexing:"",
      sheng:"",
      shi:"",
      chexiName:"",
      chexingName:"",
      shengName:"",
      shiName:"",
      payTime:"",
      showName:false,
      showPhone:false,
      cars:[
        {
          chexi:"A4",
          chexing:["A4L","A4 quattro","S4","RS4 Avant"],
        },
        {
          chexi:"A5",
          chexing:["A5 Sport","S5 Sport","A5 quattro","S5 Sport","S5 Avant"],
        },
        {
          chexi:"A6",
          chexing:["A6L","A6 quattro","S6","RS6 Avant"],
        },
        {
          chexi:"A7",
          chexing:["A7 Sport","S7 Sport","A7 quattro","S7 Sport","S7 Avant"],
        },
        {
          chexi:"A8",
          chexing:["A8 Sport","A8 quattro","S8 Sport","S8 Avant"],
        },
        {
          chexi:"Q5",
          chexing:["Q5 Sport","Q5 quattro","Q5L Sport","Q5L Avant"],
        },
        {
          chexi:"Q7",
          chexing:["Q7 Sport","Q7L Sport"],
        },
        {
          chexi:"R8",
          chexing:["R8 quattro","R8 Avant"]
      }],
      citys:[
        {
          sheng:"四川省",
          shi:["成都市","德阳市","广安市","广元市","眉山市","乐山市","宜宾市","泸州市"],
        },
        {
          sheng:"浙江省",
          shi:["杭州市","丽水市","舟山市","金华市","温州市","嘉兴市","台州市","绍兴市","湖州市"],
        }
      ],
      payTime:["当天","3天内","一周内","两周内","一个月内","半年内","一年以上"]
    }
  },
  methods:{
    reg_name(){
      var iptName=document.getElementsByClassName("name");
      if(iptName.value==""){
        showName=true;
      }
    },
    reg_phone(){
      var iptPhone=document.getElementsByClassName("phone");
      if(iptPhone.value==""){
        showPhone=true;
      }
    }
  }
}
</script>
<style scoped>
*{margin: 0;padding: 0}
div.container{
  margin: 0 auto;
}
.container .head{
  display: flex;
  justify-content: space-between;
}
.head .bigtit b{font-size: 20px;}
.head .breadcrumb{
  background: #fff;
}
.breadcrumb > li + li:before {
  content: " > ";
  padding: 0 5px;
}
ul li a:hover{
  text-decoration: none;
  color:#cc0033;
}
select,input.name,input.phone{
  width: 18rem;
  height: 2.5rem;
  line-height: 2.5rem;
  border: 1px solid #888;
  border-radius: 2px;
  outline: none;
}
</style>

