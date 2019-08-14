export function setCookie(uname,value){
  var date=new Date();
  date.setSeconds(date.getSeconds());
  document.cookie=uname+";"+escape(value);
  console.log(document.cookie);
}
export function getCookie(uname){
  if(document.cookie.length>0){
    let cStart=document.cookie.indexOf(uname+"=");
    if(cStart!=-1){
      cStart=cStart+uname.length+1;
      let cEnd=document.cookie.indexOf(";"+cStart);
      if(cEnd==-1){
        cEnd=document.cookie.length;
      }
      return unescape(document.cookie.substring(cStart,cEnd));
    }
  }
  return ""
}
export function delCookie(uname){
  setCookie(uname,"",-1);
}