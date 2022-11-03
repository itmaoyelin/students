//页面加载完毕再执行js
window.addEventListener('load', function () {
    var leftbtn = this.document.querySelector('.leftbtn');
    var rightbtn = this.document.querySelector('.rightbtn');
    var focus = this.document.querySelector('.focus');
    var focusWidth = focus.clientWidth;//图片宽度

    focus.addEventListener('mouseenter', function () {
        leftbtn.style.display = 'block';
        rightbtn.style.display = 'block';
        // 关闭定时器
        clearInterval(timer);
        timer = null;
    });
    focus.addEventListener('mouseleave', function () {
        leftbtn.style.display = 'none';
        rightbtn.style.display = 'none';
        //开启定时器
       timer = window.setInterval(function () {
            rightbtn.click(); //手动调用点击事件
        },2000)
    })

    //动态生成小圆圈
    var picture = this.document.querySelector('.picture');
    var circle = this.document.querySelector('.circle');
    console.log('图片个数' + picture.children.length);
    
    var num = 0;
    var circlenum = 0;

    for (var i = 0; i < picture.children.length; i++){
        //创建一个小li
        var li = this.document.createElement('li');
        //把小li插入ol里面
        circle.appendChild(li);

        li.setAttribute('index', i); //每个小li设置一个索引

        //排它思想
      
        li.addEventListener('click', function () {
            // 把所有的li的current类名移除
            for (var i = 0; i < circle.children.length; i++){
                circle.children[i].className = '';

            }
            //留下自己的current类名
            this.className = 'current';
            //ul移动距离 每个li的索引号*图片宽度
            
            // console.log(focusWidth);
            var index = this.getAttribute('index');//得到当前小li索引号
            // console.log(index);
            num = index;  //当点击了小li就把索引号给num
            circlenum = index;//当点击了小li就把索引号给circlenum

            animate(picture,-index*focusWidth);//调用动画函数

            })
        
    }
    //把第一个小li添加一个类名current，改变颜色
    circle.children[0].className = 'current';
    //克隆第一张图片
    var first = picture.children[0].cloneNode(true);
    picture.appendChild(first);
   
    //点击右侧按钮图片滚动一张
    var flag = true; 
    rightbtn.addEventListener('click', function () {
        if (flag) {
            flag = false; //关闭节流阀

            if (num ==picture.children.length - 1) {
                picture.style.left = 0;
                num = 0;
            }
            num++;
            animate(picture, -num * focusWidth, function () {
                flag = true;//打开节流阀
            });
          
            circlenum++;
            if (circlenum == circle.children.length) {
                circlenum = 0;
            }
            //清除其他小圆圈背景颜色
            for (var i = 0; i < circle.children.length; i++){
                circle.children[i].className = '';
    
            }
            circle.children[circlenum].className = 'current';
        }
      
    });
    
    //点击左侧按钮图片滚动一张

    leftbtn.addEventListener('click', function () {
        if (flag) {
            flag = false;//关闭节流阀
            if (num == 0) {
                num =picture.children.length - 1;
                picture.style.left =(-num*focusWidth)+'px';
                
            }
            num--;
            animate(picture, -num * focusWidth, function () {
                flag = true;//打开节流阀
            });
          
            circlenum--;
            if (circlenum <0 ) {
                circlenum = circle.children.length-1;
            }
            for (var i = 0; i < circle.children.length; i++){
                circle.children[i].className = '';
    
            }
            circle.children[circlenum].className = 'current';
        }
        
    });
    
    //自动轮播功能
   var  timer = this.setInterval(function () {
        rightbtn.click(); //手动调用点击事件
    }, 2000);


})