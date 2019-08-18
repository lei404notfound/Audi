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
          <p class="sm-title">意向车型</p>
          <select name="" id="" v-model="chexiName">
            <option value="请选择车系" v-for="(item1,index) in cars">{{item1.chexi}}</option>
            <option :value="item1" v-for="(item1,index) in cars">{{item1.chexi}}</option>
          </select>
          <p class="sm-title">所在省份</p>
          <select name="" id="" v-model="shengName">
            <option :value="item2" v-for="(item2,index) in citys">{{item2.sheng}}</option>
          </select>
          <p class="sm-title">姓名</p>
          <input type="text" id="uname" class="name" @blur="reg_name">
          <p v-show="showName" class="reg">您的姓名不可为空</p>
          <div>
            <label class="sex_sel">
              <input class="uphone" type="radio" name="sex"><i class="sex_opt"></i>男
            </label>
            <label class="sex_sel">
              <input class="uphone" type="radio" name="sex"><i class="sex_opt"></i>女
            </label>
          </div>
          <p class="sm-title">手机号码</p>
          <input type="text" id="uphone" class="phone" @blur="reg_phone">
          <p v-show="showPhone" class="reg">您的移动电话不可为空</p>
          <p class="sm-title">计划购车时间</p>
          <select name="" id="" v-model="paytime">
            <option :value="item3" v-for="(item3,index) in payTime">{{item3}}</option>
          </select>
          <div id="pay_agree">
            <label class="sex_sel">
              <input type="checkbox" name="check" v-model="disabled"><i class="sel_i"></i>
              <span>同意隐私条款</span>
            </label>
          </div>
          <button :disabled="!disabled">提交</button>
        </div>
        <div id="myMap" class="col-7">
          <baidu-map center="成都" class="bm-view">
            <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>
          </baidu-map>
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
      sheng:"",
      disabled:false,
      chexiName:"",
      shengName:"",
      paytime:"",
      showName:false,
      showPhone:false,
      cars:[
        {
          chexi:"A4",
        },
        {
          chexi:"A5",
        },
        {
          chexi:"A6",
        },
        {
          chexi:"A7",
        },
        {
          chexi:"A8",
        },
        {
          chexi:"Q5",
        },
        {
          chexi:"Q7",
        },
        {
          chexi:"R8",
      }],
      citys:[
        {
          sheng:"四川省",
        },
        {
          sheng:"浙江省",
        },
        {
          sheng:"重庆市",
        },
        {
          sheng:"陕西省"
        },
        {
          sheng:"汉东省"
        },
        {
          sheng:"广东省"
        },
        {
          sheng:"辽宁省"
        }
      ],
      payTime:["当天","3天内","一周内","两周内","一个月内","半年内","一年以上"]
    }
  },
  created(){
    this.$emit("header",true);
    this.$emit("footer",true);
  },
  methods:{
    reg_name(){
      var iptName=document.getElementById("uname");
      if(iptName.value==""){
        console.log(iptName.value);
        this.showName=true;
      }else{
        this.showName=false;
      }
    },
    reg_phone(){
      var iptPhone=document.getElementById("uphone");
      if(iptPhone.value==""){
        console.log(iptPhone.value);
        this.showPhone=true;
      }else{
        this.showPhone=false;
      }
    },
  }
}
</script>
<style scoped>
*{margin: 0;padding: 0}
div.container{
  margin: 4rem auto;
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
ul.breadcrumb li a:hover{
  text-decoration: none;
  color:#cc0033;
}
ul.breadcrumb li a{
  color:#363636;
}
select,input.name,input.phone{
  width: 22rem;
  height: 2.5rem;
  line-height: 2.5rem;
  border: 1px solid #888;
  border-radius: 2px;
  outline: none;
}

div.col-5 p.reg{
  color:#cc0033;
  font-size: 0.6rem;
}
div.col-5 button{
  position:relative;
  right:-255px;
  background-color: #000;
  padding: 0.5rem 2rem;
  border: none;
  color:#fff;
  transition: .3s
}
div#pay_agree{
  position: relative;
  width: 60%;
  top: 1.8rem;
}
div.col-5 button:hover{
  background-color: #363636;
  transition: .3s;
}
div.col-5 button:disabled{
  background-color: rgb(201, 201, 201);
}
.sm-title{
  margin-top: .4rem;
  margin-bottom: .4rem;
}
div input[type="radio"]{
  position: absolute;
  opacity: 0;
  display: none;
}
label.sex_sel i.sex_opt{
  display: inline-block;
  position: relative;
  width: 1.2rem;
  height: 1.2rem;
  border: 3px solid rgb(99, 99, 99);
  background: #fff;
  border-radius: 50%;
  cursor: pointer;
  vertical-align: -4px;
  margin-right: 8px;
}
label.sex_sel input[type="radio"]:checked+.sex_opt{
  background-color: rgb(204,0,51);
  cursor: pointer;
  border: 1px solid #000;
}
div#myMap{
  width: 100%;
  height: 450px;
}
.bm-view{
  width: 100%;
  height: 450px;
  margin: 2.2rem 0;
}
</style>

