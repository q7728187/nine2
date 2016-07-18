/**
 * Created by q on 2016/7/17.
 */
var playerdimension=[];
playerdimension=[[3,"杀手"],[2,"平民"],[3,"平民"],[3,"平民"],[3,"平民"],[3,"平民"]];
var playernum=playerdimension.length;
function mymessage() {
    var listring;
    listring="";
    for(i=0;i<playerdimension.length;i++){
        var li;
        li= " <div class='box' id='box" +
            (i+1) +
            "' onclick='boxfootstyle(this.id)'> <div class='box-header'> <div class='box-name'> <span>" +
            playerdimension[i][1] +
            "</span> </div> <div class='box-number'> <span>" +
            (i+1) +
            "号</span> </div> </div> <div class='box-footer'> <ul> <li class='kill' onclick='killhuman(this)'></li> <li class='search'></li> <li class='aim'></li> <li class='salvation'></li> </ul> </div> </div>"
        ;
        listring=listring+li;
    }
    document.querySelector(".main").innerHTML=listring;

    //杀手||死亡禁止点击判定
    for (i=0;i<playernum;i++){
        console.log("asedasdasd");
        if (playerdimension[i][1]=="杀手"){
            document.getElementById("box"+(i+1)).onclick=null;
        }
        if (playerdimension[i][0]!==0){
            console.log(document.getElementById("box"+(i+1)));
            console.log(i);
            document.getElementById("box"+(i+1)).onclick=null;
            var deathcolor=document.querySelectorAll(".box-name");
            console.log(deathcolor[i]);
            deathcolor[i].className="box-name box-dead";
        }
    }
}
//点击显示刀
function boxfootstyle(id) {
    if(document.querySelector("#"+id+" ul").style.visibility=="hidden"){
        document.querySelector("#"+id+" ul").style.visibility="visible";
    }
    else{
        document.querySelector("#"+id+" ul").style.visibility="hidden";
    }

}
//杀人||投票 修改数组
function killhuman () {
        eventdead=event.target.parentNode.parentNode.parentNode.id;
        var deathnum=eventdead.replace(new RegExp("box"),"");//提取数字
        deathnum=deathnum-1;
        playerdimension[deathnum][0]="杀手";
        playerdimension[deathnum][2]=1;

    console.log(playerdimension);
        var allbox=playerdimension.length;
        for (i=0;i<playerdimension.length;i++){
            document.getElementById("box"+(i+1)).onclick=null;
            document.querySelector("#box"+(i+1)+" ul").style.visibility="hidden";
        }
        console.log(allbox.onlick)
    }
//跳转
var day=1;
var jump;
    jump=document.querySelector(".assign");
    jump.onclick=function () {
        TotalArrStr = JSON.stringify(playerdimension);
        sessionStorage.sth = TotalArrStr;
        day++;
        location.href="task-js-2-3.html";
    };
