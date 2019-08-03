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