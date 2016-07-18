/**
 * Created by q on 2016/7/12.
 */
var player;
//player=JSON.parse(sessionStorage.sth);
player=["kill","civilian","civilian","civilian","civilian","civilian"];
var playernum=player.length;
console.log(playernum);
var hid=0;
var x=1;
var btn = document.getElementById('btn');
btn.onclick=function (){
    (function btntime(){
        btn.disabled = "disabled";
        setTimeout(function() {
            btn.disabled = '';
            console.log(btn.disabled);
        }, 1000);//1秒后才能点击
    })();
    (function playerrole(){
        if(hid=="0"){
            if(x==playernum){
                document.getElementById("identity").innerHTML="角色"+player[0];
                document.getElementById("identity").style.visibility="visible";
                document.getElementById("img1").src="picture/icon-turnover2.png";
                document.getElementById("btn").innerHTML="法官查看";
                window.location.href="task-js-2-3.html";
            }
            if(x<playernum){
                document.getElementById("headernum").innerHTML=x;
                document.getElementById("identity").innerHTML="角色"+player[0];
                document.getElementById("identity").style.visibility="visible";
                document.getElementById("img1").src="picture/icon-turnover2.png";
                x++;
                console.log("x="+x);
                document.getElementById("btn").innerHTML="隐藏并传递给"+x+"号";
                hid=1;
                console.log(hid);
                player.splice(0,1);
                console.log(player);
            }
        }
        else{
            document.getElementById("headernum").innerHTML=x;
            document.getElementById("identity").style.visibility="hidden";
            document.getElementById("img1").src="picture/flog.png";
            document.getElementById("btn").innerHTML="查看"+x+"号身份";
            hid=0;
        }
    })();
};
