/**
 * Created by q on 2016/7/6.
 */
var playernum;
playernum = document.getElementById("playernum").value;
document.onkeydown = function (event) {
    //兼容浏览器
    e = event ? event : (window.event ? window.event : null);
    if (e.keyCode == 13) {
        playernum = document.getElementById("playernum").value;
        if (playernum <= 18 && playernum >= 6 && !isNaN(playernum)) {
            console.log("true");
        }
        else {
            alert("请输入6-18数字");
        }
        return playernum;
    }
};
//失去焦点执行确认人数
function playerConfirm() {
    playernum = document.getElementById("playernum").value;
    if (playernum <= 18 && playernum >= 6 && !isNaN(playernum)) {
        console.log("true");
    }
    else {
        alert("请输入6-18数字");
    }
    console.log(playernum);
    return playernum;
}
var x=false;
//点击设置 分配杀手
function distribution() {
    var player = new Array;
    for (i = 0; i < playernum; i++) {
        player[i] = "平民";
    }
    player.length = playernum;
    if (playernum <= 18 && playernum >= 16) {
        var killer = 4;
    }
    if (playernum <= 15 && playernum >= 12) {
        var killer = 3;
    }
    if (playernum <= 11 && playernum >= 9) {
        var killer = 2;
    }
    if (playernum <= 8 && playernum >= 6) {
        var killer = 1;
    }
    console.log(killer);
    i = 0;
    do {
        var playerkill;
        playerkill = Math.floor(Math.random() * playernum);
        if (player[playerkill] = "水民") {
            player[playerkill] = "杀手";
            i++;
            console.log(i);
            x=true;
            console.log(x)
        }
        else {
            i = i;
        }
    }
    while (i < killer);
    var civilianNum = playernum - killer;
    document.getElementById("civilian-num").innerHTML = civilianNum + "人";
    document.getElementById("killer-num").innerHTML = killer + "人";
    //转换二维数组
    var playerdimension=new Array();
    for(var i=0;i<playernum;i++){
        playerdimension[i]=new Array();
        for(var j=0;j<3;j++){
            playerdimension[i][j]=1;
            if (j==1){
                playerdimension[i][j]=player[i];
            }
            if (j==0) {
                playerdimension[i][j]=0;
            }
            if (j==2){
                playerdimension[i][j]=0;

            }
        }
    }
console.log(playerdimension);

//检测杀手||平民人数
    var killernum=0;
    var civiliannum=0;
    for (i=0;i<playernum;i++){
        if (playerdimension[i][1]=="杀手"){
            killernum++;
            console.log("杀手"+killernum);
            if (killernum<=0){
            }
            else {
                console.log(killernum);
            }
        }
        if (playerdimension[i][1]=="平民"){
            civiliannum++;
            if (civiliannum<= 0){
            }
            else{
                console.log("平民"+civiliannum);
            }
        }
    }
    //转换JSON上传
    TotalArrStr = JSON.stringify(playerdimension);
    console.log(TotalArrStr+"1");
    sessionStorage.sth = TotalArrStr;
    console.log(sessionStorage.sth+"2");
    return player;
}
//判断是否点击设置
function JudgmentExecution() {
    if(x==true){
        window.location.href="task-js-2-2.html"
    }
    else {
        alert("请点击设置")
    }
}
