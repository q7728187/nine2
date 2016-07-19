/**
 * Created by q on 2016/7/18.
 */
var playerdimension;
playerdimension=[["杀手","平民",1],["投票","平民",2],[0,"杀手",40],[0,"平民",40],[0,"平民",40],[0,"平民",40]];
function mymessage() {
    playerdimensionposition=playerdimension.concat();
    console.log(playerdimensionposition);
    //获取死亡人数 添加id
    var deathnum;
    deathnum=0;
    for(i=0;i<playerdimension.length;i++){
        playerdimensionposition[i][3]=i+1;
        if(playerdimension[i][2]!==40){
            deathnum++;
        }
    }
    //死亡冒泡排序
    var temp=0;
    for(i=0;i<playerdimension.length-1;i++){
        for(var j=i+1;j<playerdimension.length;j++)
        {
            if(playerdimensionposition[i][2]>playerdimensionposition[j][2])
            {
                temp=playerdimensionposition[i];
                playerdimensionposition[i]=playerdimensionposition[j];
                playerdimensionposition[j]=temp;
            }
        }
    }
    console.log(deathnum);

    console.log(playerdimensionposition);
    //li插入
    document.createElement("li");
    var para=document.createElement("li");
    var textul=document.getElementById("ultext");
    textul.appendChild(para);
    var text=document.createTextNode("123");
    para.appendChild(text)



}
