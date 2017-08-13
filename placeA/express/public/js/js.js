/**
 * Created by lenovo on 2017/8/9.
 */
$(function () {
    subMenu()


    function subMenu() {
        $('.banner-text').hover(function () {
            $(this).children('ul').show()
        }, function () {
            $(this).children('ul').hide()
        })
    };




    //获取图片的数量
    var imgLength = $(".pagination li").length;
    //创建一个变量，保存当前显示图片的索引
    var i=0;
    //点击小红点切换图片
    $(".pagination").delegate("li","click",function () {
        //使当前白点变成选中状态
        $(this).addClass("active").siblings().removeClass("active");
        //将i修改为当前超链接的索引
        i = $(this).index();
        //切换到对应的图片
        $(".slides").animate({left:-100 * i + "%"})

    })
    //右边按钮点击事件
    $(".controls li:last").on("click.a", function () {
        i++;
        if(i > imgLength-1){
            i=0;
        }
        $(".pagination li").eq(i).addClass("active").siblings().removeClass("active");
        $(".slides").stop().animate({left:-100 * i + "%"})
    });
    //左边按钮点击事件
    $(".controls li:first").on("click.b", function () {
        i--;
        if(i < 0){
            i=imgLength-1;
        }
        $(".pagination li").eq(i).addClass("active").siblings().removeClass("active");
        $(".slides").stop().animate({left:-100 * i + "%"})
    });

    var play = (function () {

        //创建一个变量，来保存定时器的标识
        var timer;

        return function () {

            //判断是否正在自动播放图片
            if(timer){

                console.log("定时器关闭了~~");

                //如果timer有值，则证明定时器已经开启，则关闭它
                clearInterval(timer);
                //将timer设置为null
                timer = null;
                //退出函数
                return;
            }

            console.log("定时器开启了~~");

            timer = setInterval(function(){
                //触发下一页的按钮的单击事件
                $(".controls>li:eq(1)").click();
            },3000);

        };

    }())
    play();
    $("#slider").hover(play);
})