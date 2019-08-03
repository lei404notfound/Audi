<template>
  <div id="app">
    <div class="bg-1">
      <div class="login p-r">
        <h2 class="h-center my-4">登录</h2>
        <p class="my-4">用户名</p>
        <div class="position-relative">
          <input class="w-100 py-2 err-name" name="uname" type="text" placeholder="请输入用户名">
          <img src="../../images/login/uname-error.png" alt="" class="yz-pass">
        </div>
        <p class="my-4">密码</p>
        <div  class="position-relative">
          <input class="w-100 py-2 err-pwd" type="password" name="upwd" placeholder="请输入密码">
          <img src="../../images/login/upwd-error.png" alt="" class="yz-pass">
        </div>
        <div class="a-right mt-3"><a href="javascript:;">忘记密码?</a></div>
        <div>
          <a href="javascript:;">
            <button class="btn login-btn w-100 my-4">登录</button>
          </a>
        </div>
        <div class="h-center my-4">第三方登录</div>
        <div class="w-100 h-center my-4">
          <a href="javascript:;"><img class="w-5 mr-2" src="../../images/login/wx.png"></a>
          <a href="javascript:;"><img class="w-5 mr-2" src="../../images/login/qq.png"></a>
          <a href="javascript:;"><img class="w-5 mr-2" src="../../images/login/wb.png"></a>
        </div>
        <div class="h-center"><a href="#">立即注册</a></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {}
  },
  methods:{
    login(){
      /*当文本框获得焦点时，清除文本框旁边的div的class*/
      //1. 查找触发事件的元素
      var txtName=document.getElementsByName("uname")[0];
      var txtPwd=document.getElementsByName("upwd")[0];
      //2. 绑定事件处理函数
      /*文本框失去焦点，验证当前文本框的内容，修改提示信息
      的样式*/
      //为姓名文本框绑定失去焦点事件
      txtName.onblur=function(){
        //定义正则表达式
        var reg=/^\s*$/;
        //this->txtName
        //调用公共的验证方法vali
        vali.call(this,reg);
      }
      function vali(reg){
        //查找当前文本框旁边的div
        var img=this.nextElementSibling;
        //如果正则验证文本框的内容通过就修改div的className为yz-pass
        if(reg.test(this.value)==false){
          img.className="yz-pass";
        }else{
          //否则就修改div的className为vali_fail
          img.className="yz-error";
        }
      }
      txtPwd.onblur=function(){
        //定义正则表达式
        var reg=/^\s*$/;
        //this->txtPwd
        vali.call(this,reg);
        //调用公共的验证方法vali
      }
    }
  }
}
</script>
<style scoped>
  *{margin:0;padding:0}
  body{
    font-size: 1rem;
    font-family: "黑体";
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
  div.bg-1{
    width: 100%;
    height: 100%;
    position: absolute;
    background: url(../../images/login/bg.jpg) no-repeat;
    background-size: 100% 100%;
    z-index: -1;
  }
  .login{
    width:500px;
    height:750px;
    background-color: #fff;
    padding:4rem 3rem;
    position: absolute;
    left:50%;top:50%;
    transform: translate(-50%,-50%);
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
    border-bottom: 0.1rem solid #b9b9b9;
  }
  div>input:hover{
    border-bottom: 0.1rem solid #1cc3e3;
  }
  div.close{
    display: inline-block;
  }
  .login-btn{
    background:linear-gradient(to right,#0ff,#f0f);
    border:0;
    border-radius: 23.5px;
    line-height: 2.2rem;
  }
  .login-btn:hover{
    background:linear-gradient(to right,#f0f,#0ff);
  }
  a>img.w-5{
    width:3rem;
  }
  .yz-pass{
    position:absolute;
    top:10px;left:293px;
    display:none;
  }
  .yz-error{
    position:absolute;
    top:10px;left:293px;
    display:block;
  }
</style>


