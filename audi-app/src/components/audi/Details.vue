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
          <select name="" id="" v-model="cid">
            <option v-bind:value="item1.cid" v-for="(item1,index) in cars" :key="index">{{item1.chexi}}</option>
          </select>
          <p class="sm-title">所在省份</p>
          <select name="" id="" v-model="sid">
            <option v-bind:value="item2.sid" v-for="(item2,index) in citys" :key="index">{{item2.sheng}}</option>
          </select>
          <p class="sm-title">姓名</p>
          <input type="text" id="uname" v-model="oname" class="name" @blur="reg_name">
          <p v-show="showName" class="reg">您的姓名不可为空</p>
          <div>
            <label class="sex_sel">
              <input class="uphone" type="radio"><i class="sex_opt"></i>男
            </label>
            <label class="sex_sel">
              <input class="uphone" type="radio"><i class="sex_opt"></i>女
            </label>
          </div>
          <p class="sm-title">手机号码</p>
          <input type="text" v-model="ophone" id="uphone" class="phone" @blur="reg_phone">
          <p v-show="showPhone" class="reg">您的移动电话不可为空</p>
          <p class="sm-title">计划购车时间</p>
          <select name="" id="" v-model="pid">
            <option v-for="(item3,index) in payTime" :key="index" v-bind:value="item3.pid">{{item3.time}}</option>
          </select>
          <div id="pay_agree">
            <label class="sex_sel">
              <input type="checkbox" name="check" v-model="disabled"><i class="sel_i"></i>
              <span>同意隐私条款</span>
            </label>
          </div>
          <button :disabled="!disabled" @click="Submit">提交</button>
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

      cid:"",
      sid:"",
      oname:"",
      ophone:"",
      pid:"",

      disabled:false,
      chexiName:"",
      shengName:"",
      showName:false,
      showPhone:false,
      cars:[
        {
          cid:1,
          chexi:"A4",
        },
        {
          cid:2,
          chexi:"A5",
        },
        {
          cid:3,
          chexi:"A6",
        },
        {
          cid:4,
          chexi:"A7",
        },
        {
          cid:5,
          chexi:"A8",
        },
        {
          cid:6,
          chexi:"Q5",
        },
        {
          cid:7,
          chexi:"Q7",
        },
        {
          cid:8,
          chexi:"R8",
      }],
      citys:[
        {
          sid:1,
          sheng:"四川省",
        },
        {
          sid:2,
          sheng:"浙江省",
        },
        {
          sid:3,
          sheng:"重庆市",
        },
        {
          sid:4,
          sheng:"陕西省"
        },
        {
          sid:5,
          sheng:"汉东省"
        },
        {
          sid:6,
          sheng:"广东省"
        },
        {
          sid:7,
          sheng:"辽宁省"
        }
      ],
      payTime:[
        {
          pid:1,
          time:"当天"
        },
        {
          pid:2,
          time:"3天内"
        },
        {
          pid:3,
          time:"一周内"
        },
        {
          pid:4,
          time:"两周内"
        },
        {
          pid:5,
          time:"一个月内"
        },
        {
          pid:6,
          time:"半年内"
        },
        {
          pid:7,
          time:"一年以上"
        }
      ]
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
    Submit(){
      var url = "setInfo";
      var cid = this.cid;
      var sid = this.sid;
      var oname = this.oname;
      var ophone = this.ophone;
      var pid = this.pid;
      var obj = {cid:cid,sid:sid,oname:oname,ophone:ophone,pid:pid};
      this.axios.get(url,{params:obj}).then((res)=>{
        if(res.data.data==-1){
          this.$toast("提交失败,请检查表单信息");
        }else{
          this.$toast("提交成功,感谢预约");
          this.cid = null;
          this.sid = null;
          this.oname = null;
          this.ophone = null;
          this.pid = null;
        }
      })
    }
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

