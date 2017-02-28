/**
 * Created by 赵天 on 2017/2/28.
 */

/**
 * getData方法
 * 读取id为source的列表，获取其中城市名字及城市对应的空气质量
 * 返回一个数组，格式见函数中示例
 */
function getData() {
    /*
     coding here
     */

    /*
     data = [
     ["北京", 90],
     ["北京", 90]
     ]
     */
    var temp = document.getElementById('source');
    var linum = temp.getElementsByTagName("li");
    var data=[];
    for(var i=0;i<linum.length;i++){
        data.push(new Array(linum[i].textContent.substring(0,2),linum[i].textContent.substring(7)));
        // console.log(linum[i].textContent.substring(0,2));
        // console.log(linum[i].textContent.substring(7));
    }
    return data;

}

/**
 * sortAqiData
 * 按空气质量对data进行从小到大的排序
 * 返回一个排序后的数组
 */
function sortAqiData(data) {
  return  data.sort(function(a,b){
        return b[1]-a[1]});

}

/**
 * render
 * 将排好序的城市及空气质量指数，输出显示到id位resort的列表中
 * 格式见ul中的注释的部分
 */
function render(data) {
   var resort= document.getElementById("resort");
   var name=["一","二","三","四","五","六","七","八"];
    for(var i=0; i<data.length;i++){
            resort.insertAdjacentHTML('beforeend',"<li>第"+name[i] +"名："+data[i][0]+"，"+data[i][1]+"</li>")
    }

}

function btnHandle() {
    var aqiData = getData();
    aqiData = sortAqiData(aqiData);
    render(aqiData);
}

function init() {

    // 在这下面给sort-btn绑定一个点击事件，点击时触发btnHandle函数
    var btn=document.getElementById("sort-btn");
    btn.addEventListener("click",function () {
        btnHandle();
    })

}

init();