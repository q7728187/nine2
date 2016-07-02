var lastone=null;
var boxlast=null;
var colorlast=null;
function getColorByRandom(colorlist){
    var box=[1,2,3,4,5,6,7,8,9];
    if (boxlast==null){

    }
    else {
        box.splice(boxlast-1,1);
    }

    if (lastone==null){

    }
    else {
        document.getElementById("box-"+lastone).style.backgroundColor= "#e8830d";
    }
    var colorlist=["red","green","blue"];
    var boxIndex=Math.floor(Math.random()*colorlist.length);
    var color;
    color=colorlist[boxIndex];
    var boxnumber;
    boxnumber=box[Math.floor((Math.random()*box.length))];
    boxlast=boxnumber;
    document.getElementById("box-"+boxnumber).style.backgroundColor=color;
    lastone=boxnumber;
    var colorname;
    if (color=="red"){
        colorname="红色";
    }
    else{
        if(color=="green"){
            colorname="绿色";
        }
        else {
            colorname="蓝色";
        }
    }
    console.log("格子"+boxnumber+colorname+box+"/"+lastone);

}

setInterval("getColorByRandom()",1000);
