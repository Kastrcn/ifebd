/**
 * Created by 赵天 on 2017/2/28.
 */
(function() {
    /*
     在注释下方写下代码
     给按钮button绑定一个点击事件
     在事件处理函数中
     获取aqi-input输入的值，并显示在aqi-display中
     */
    var button=document.getElementById("button");
    var val=document.getElementById("aqi-input");
var span=document.getElementById("aqi-display");
    button.addEventListener('click', function(ev) {
        span.textContent=val.value;
        });

})();