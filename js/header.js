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