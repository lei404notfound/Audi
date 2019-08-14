$("#uname").blur(function(){
  var reg=/^\s*$/;
  var uname=$("input#uname").val();
  if(reg.test(uname)==true){
    console.log("姓名不能为空");
  }else{
    console.log("验证通过");
  }
})
$(".uphone").blur(function(){
  var reg=/^[1][3-8]\d{9}$/;
  var phone=$("input.uphone").val();
  if(reg.test(phone)==false){
    console.log("手机号格式错误");
  }else{
    console.log("验证通过");
  }
})