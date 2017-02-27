/**
 * Created by 赵天 on 2017/2/28.
 */

var aqiData = [
    ["北京", 90],
    ["上海", 50],
    ["福州", 10],
    ["广州", 50],
    ["成都", 90],
    ["西安", 100]
];

(function () {

    /*
     在注释下方编写代码
     遍历读取aqiData中各个城市的数据
     将空气质量指数大于60的城市显示到aqi-list的列表中
     */
    var item=[];
    var ul=document.getElementById("aqi-list");
    for(var i=0; i<aqiData.length;i++){
        if(aqiData[i][1]>60){
            ul.insertAdjacentHTML('afterend',"<li>第一名："+aqiData[i][0]+"，"+aqiData[i][1]+"</li>")
        }
    }
})();