<template>
  <div id="app">
    <div class="bg-1">
      <!-- Login Page -->
      <div class="login p-r" v-show="showLog">
        <div style="text-align:center;font-size:25px;">
          <span id="sp1">登录</span>
        </div>
        <div id="div2">
          <p class="my-4">用户名</p>
          <div class="position-relative show">
            <input class="w-100 py-2" name="uname" type="text" placeholder="请输入用户名" v-model="uname">
          </div>
          <p class="my-4">密码</p>
          <div  class="position-relative show">
            <input class="w-100 py-2" type="password" name="upwd" placeholder="请输入密码" v-model="upwd">
          </div>
        </div>
          <div class="a-right mt-3"><a href="javascript:;">忘记密码?</a></div>
          <div>
            <a href="javascript:;">
              <button @click="login" class="btn login-btn w-100 my-4">登录</button>
            </a>
          </div>
          <div class="h-center my-4">第三方登录</div>
          <div class="w-100 h-center my-4">
            <a href="javascript:;"><img class="w-5 mr-2" src="../../images/login/wx.png"></a>
            <a href="javascript:;"><img class="w-5 mr-2" src="../../images/login/qq.png"></a>
            <a href="javascript:;"><img class="w-5 mr-2" src="../../images/login/wb.png"></a>
          </div>
          <div class="h-center">没有账号?<a href="#" @click="toReg">立即注册</a></div>
      </div>
      <!-- Register Page -->
      <div class="login p-r" v-show="showReg">
        <div style="text-align:center;font-size:25px;">
          <span id="sp1">注册</span>
        </div>
        <div id="div2">
          <p class="my-4">用户名</p>
          <div class="position-relative show">
            <input class="w-100 py-2" name="uname" type="text" placeholder="请输入用户名" v-model="newUname">
          </div>
          <p class="my-4">密码</p>
          <div  class="position-relative show">
            <input class="w-100 py-2" type="password" name="upwd" placeholder="请输入密码" v-model="newUpwd">
          </div>
          <p class="my-4">确认密码</p>
          <div  class="position-relative show">
            <input class="w-100 py-2" type="password" name="upwdToo" placeholder="请再次输入密码" v-model="upwdToo">
          </div>
        </div>
          <div>
            <a href="javascript:;">
              <button @click="Register" class="btn login-btn w-100 my-4">注册</button>
            </a>
          </div>
          <div class="h-center">已有账号?<a href="#" @click="toLog">立即登录</a></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      uname:"",
      upwd:"",
      newUname:"",
      newUpwd:"",
      upwdToo:"",
      showLog:true,
      showReg:false,
    }
  },
  components:{},
  created(){
    this.$emit("header",false);
    this.$emit("footer",false);
  },
  methods:{
    login(){
      var uname=this.uname;
      var upwd=this.upwd;
      var url="login";
      var obj={uname:uname,upwd:upwd};
      if(this.uname==""||this.upwd==""){
        this.$toast("用户名和密码不能为空");
      }else{
        this.axios.get(url,{params:obj}).then((res)=>{
          if(res.data.code==-1){
            this.$toast("用户名或密码错误");
          }else{
            this.$toast("登录成功,即将进入主页");
            this.$router.push("/Index");
            setTimeout(function(){
              this.$router.push("/Index");
            }.bind(this),1000);
          }
        })
      }
    },
    Register(){
      if(this.newUname==""||this.newUpwd==""||this.upwdToo==""){
        this.$toast("用户名和密码不能为空");
      }else if(this.newUpwd!=this.upwdToo){
        this.$toast("两次输入的密码不匹配");
      }else{
        var url="register";
        var obj={uname:this.newUname,upwd:this.newUpwd};
        this.axios.get(url,{params:obj}).then((res)=>{
          if(res.data.code==-1){
            this.$toast("注册失败,请重新注册");
          }else{
            this.$toast("注册成功,请登录");
            this.showReg=false;
            this.showLog=true;
          }
        })
      }
    },
    toReg(){
      this.showReg=true;
      this.showLog=false;
    },
    toLog(){
      this.showLog=true;
      this.showReg=false;
    }
  }
}
</script>
<style scoped>
  *{margin:0;padding:0}
  body{
    font-size: 1rem;
    font-family: "Microsoft YaHei";
    color:rgb(51, 51, 51);
    box-sizing: border-box;
  }
  a{
    color:rgb(112, 112, 112);
  }
  a:hover{
    color:#7f67eb;
    text-decoration: none;
  }
  span:hover{
    cursor: pointer;
    color:#6d78ff;
    transition: .3s;
  }
  div.bg-1{
    width: 100%;
    height: 100%;
    position: absolute;
    background: url(../../images/login/login.jpg) no-repeat;
    background-size: 100% 100%;
    z-index: -1;
  }
  .login{
    width:450px;
    height:75vh;
    background-color: #fff;
    padding:4rem 3rem;
    position: absolute;
    left:50%;top:50%;
    border-radius: 2%;
    transform: translate(-50%,-50%);
    opacity: .9;
  }
  .p-r{
    position: relative;
  }
  a>button{color:#fff;}
  .h-center{text-align:center;}
  .a-right{text-align:right;}
  div>input{
    border:0;
    outline:0;
  }
  div.close{
    display: inline-block;
  }
  .login-btn{
    position: relative;
    width: 100%;
    height: 2.5rem;
    border: 0;
    border-radius: 1.25rem;
    background: linear-gradient(75deg, #6d78ff, #00ffb8);
    z-index: 1;
  }
  .login-btn::after{
    content: '';
    width: 100%;
    height: 2rem;
    position: absolute;
    background: inherit;
    top: 1.5rem;
    left:0;
    filter: blur(1rem);
    opacity: 0.7;
    z-index: -1;
  }
  .login-btn:hover{
    background:linear-gradient(to right,#f0f,#0ff);
  }
  a>img.w-5{
    width:3rem;
  }
  .show {
    border: 0;
    outline: none;
  }
  .show:after {
    border-bottom: 0 solid transparent;
    transition: all 0.35s;
    content: '';
    position: absolute;
    width: 0;
  }
  .show:after {
    border-bottom: 2px solid rgb(120, 25, 150);
    bottom: -10px;
    left: 0px;
  }
  .show:hover:after {
    width: 100%;
  }
</style>