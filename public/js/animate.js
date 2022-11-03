//动画函数
// 封装动画函数  obj目标对象，target目标位置
//给不同元素指定不同定时器(给对象里面添加属性)

function animate(obj, target, callback) {
    //先清除以前的定时器，只保留当前一个定时器执行
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        //每一次移动距离  //缓动公式：（目标位置的值-现在位置的值—）/10
        var step = (target - obj.offsetLeft) / 10;// 向上取整

        step = step < 0 ? Math.floor(step) : Math.ceil(step); //小于零向下取整，大于零向上取整
        if (obj.offsetLeft == target) {

            clearInterval(obj.timer);
            if (callback) {
                callback();
            }
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15);
};

//纵向运动

function animateY(obj, target, callback) {

    //先清除以前的定时器，只保留当前一个定时器执行
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {

        //每一次移动距离  //缓动公式：（目标位置的值-现在位置的值—）/10
        var step = (target - obj.offsetTop) / 10;// 向上取整

        step = step < 0 ? Math.floor(step) : Math.ceil(step); //小于零向下取整，大于零向上取整
        if (obj.offsetTop == target) {

            clearInterval(obj.timer);
            if (callback) {  //定时器结束,判断是否存在回调函数
                callback();  //调用回调函数
            }
        }
        obj.style.top = obj.offsetTop + step + 'px';

    }, 15);
}
