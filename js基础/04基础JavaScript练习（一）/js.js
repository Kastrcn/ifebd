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



function liHandle(linum) {
    for(var i=0;i<linum.length;i++){
        linum[i].addEventListener("click",function () {
            this.remove();
        })
    }
}
function  removeFrist(linum) {

    linum[0].remove();
}
function  removeLast(linum) {

    linum[linum.length-1].remove();
}

function  addLast(temp,val) {
    var li = document.createElement("li");
    li.textContent=val.value;
    li.style.height=val.value+"px";
    console.log(li);
    temp.appendChild( li);
}
function  addFrist(temp,val) {
    var li = document.createElement("li");
    li.textContent=val.value;
    li.style.height=val.value+"px";
    var linum = temp.getElementsByTagName("li");
    temp.insertBefore(li,linum[0]);

}
function init() {
    var temp = document.getElementById('list');
    var linum = temp.getElementsByTagName("li");
    liHandle(linum);
    document.getElementById("sort").addEventListener("click",function () {
        var linums = document.querySelectorAll("li");
        for(var i=0 ;i< linums.length;i++){
            for(var j=0;j<i;j++){
                // console.log(linums[i].textContent<linums[j].textContent)

                if(parseInt(linums[i].textContent)<parseInt(linums[j].textContent)){
                    // console.log(linums[j].textContent,linums[i].textContent)
                    var temps=linums[j].textContent;
                    var h=linums[j].offsetHeight
                    linums[j].textContent=linums[i].textContent;
                    console.log(linums[i].offsetHeight)
                    linums[j].style.height=linums[i].offsetHeight;
                    linums[i].textContent=temps;
                    linums[j].style.height=h;
                    // console.log(linums[j],linums[i],temps)
                }
            }
        }

        temp.innerHTML="";
        for(var m=0;m<linums.length;m++){
            temp.appendChild(linums[m]);
            console.log(linums[m]);
        }

    });

    var letfOut= document.getElementById("letfOut");
    var rightOut= document.getElementById("rightOut");
    var leftIn= document.getElementById("leftIn");
    var rightIn= document.getElementById("rightIn");
    var val=document.getElementById("val")
    letfOut.addEventListener("click",function () {
            removeFrist(linum)
        });

    rightOut.addEventListener("click",function () {
        removeLast(linum)
    });
    rightIn.addEventListener("click",function () {
        addLast(temp,val)
    });
    leftIn.addEventListener("click",function () {
        addFrist(temp,val)
    });


}

init();