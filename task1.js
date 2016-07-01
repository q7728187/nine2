/**
 * Created by q on 2016/7/1.
 */
var lastone=0;
function colorchange() {
    var boxnumber;
    var colornumber;
    var box=document.getElementsByClassName("square");
    var boxcolor;
    var colorname;
    box[lastone].style.backgroundColor="#e8830d";
    colornumber=Math.floor(Math.random()*3);
    switch(colornumber) {
        case 0:
            boxcolor="red";
            colorname="红色";
            break;
        case 1:
            boxcolor="green";
            colorname="绿色";
            break;
        case 2:
            boxcolor="blue";
            colorname="蓝色";
            break;
    }
    boxnumber=Math.floor(Math.random()*9);
    box[boxnumber].style.backgroundColor=boxcolor;
    console.log("格子"+(boxnumber+1)+colorname);
    lastone=boxnumber;
}
setInterval("colorchange()",1000);
