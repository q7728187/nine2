/**
 * Created by q on 2016/7/16.
 */
/**
 * Created by q on 2016/7/15.
 */
var day;
day=6;
//页面加载
function mymessage() {
    var daystring;
    daystring="";
    for(i=0;i<day;i++){
        var daynum;
        daynum="<div class='day' ><div class='day-header'>第"+(i+1)+"天<img id='img"+(i+1)+"'src='picture/xialajiantou_03.png'onclick='onlickimg()'>" +
            "</div><div class='day-footer' id='day"+(i+1)+"'><div class='day-footer-left'></div><div class='day-footer-right'><ul><img src='picture/sun.png'><li><p></p>"+
            "<p>杀手杀人</p>"+
            "</li><li><p></p><p>警察验人</p></li><li>" +
            "<p></p><p>狙击狙人</p></li><li><p></p>" +
            "<p>医生救人</p></li></ul><ul><img src='picture/moon.png'><li><p></p>" +
            "<p>亡灵发表遗言</p></li><li><p></p><p>玩家依次发言</p>" +
            "</li><li><p></p><p>投票</p></li></ul></div></div> </div>";
        daystring=daystring+daynum;
    }
    document.getElementById("asdf").innerHTML=daystring;
    document.getElementById("day"+day).style.display="block";
    var y=document.querySelector("#day"+day);
    y=y.querySelectorAll("li");
    y=y[0];
    y=y.querySelectorAll("p");
    y=y[1];
    console.log(y);
    console.log(y.toString());
    y.style.backgroundColor="red";
    y.setAttribute()
    y.addEventListener("click",onlickkill,false);
    //y.onclick="onlickkill()";
    console.log();
}
//跳杀手页面
function onlickkill() {
    console.log('1');
    location.href="task-js-2-3.html";
}
//下拉菜单
function onlickimg() {
    var x=event.target;
    x=x.parentNode;
    x=x.nextSibling;
    if ( x.style.display=="block"){
        x.style.display="none";
    }
    else{
        x.style.display="block";
    }
    x=x.childNodes[2];
}
