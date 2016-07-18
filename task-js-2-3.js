/**
 * Created by q on 2016/7/15.
 */
var player;
player=["kill","civilian","civilian","civilian","civilian","civilian"];
var playernum=player.length;
function mymessage() {
    var listring;
    listring="";
    for(i=0;i<playernum;i++){
        var li;
        li="<li><div class='box'><div class='box-header'>"+player[i]+"</div><div class='box-footer'>"+(i+1)+"</div></div></li>";
        listring=listring+li;
    }
    document.getElementById("liWrapper").innerHTML=listring;
}
