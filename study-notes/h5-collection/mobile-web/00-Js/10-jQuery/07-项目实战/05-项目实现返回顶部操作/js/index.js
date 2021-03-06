/**
 * Created by Administrator on 2018/7/18.
 */
$(function () {
    /*****001 实现吸顶操作*******/
    /*
    * 实现思路
    * (1) 监听页面的滚动,获取滚动条距离窗口顶部的位移 top
    * (2) 获取比较的这段位移的长度                  nav_top
    * (3) 检查 top > nav_top 显示顶部 + 显示logo,否则就恢复
    * */
    //获取nav标签距离窗口顶部的相对位移
    var nav_top = $(".nav").offset().top;

    //监听页面的滚动
    $(window).on("scroll",function () {
        //先获取滚动条距离顶部的位移
        var top  = $(window).scrollTop();
        //检查比较大小
        if(top > nav_top)
        {
            //显示顶部效果
            $(".nav").css({
                "position":"fixed",
                "top":0,
                "box-shadow":"0px 1px 3px rgba(0,0,0,0.3)"
            })

            //logo图片显示出来
            $(".left img").css({
                opacity:1
            })

            //显示返回顶部标签
            $(".back_top").stop().slideDown();
        }else
        {
            $(".nav").css({
                "position":"absolute",
                "top":"100px",
                "box-shadow":"none"
            })

            $(".left img").css({
                opacity:0
            })

            $(".back_top").stop().slideUp();
        }
    })


    /*****002 实现返回顶部操作*******/
    /*
    * 实现思路
    * (1) 在页面中添加对应的标签,设置样式(右下角)
    * (2) 监听页面的滚动,当滚动到一定距离的时候显示或者是隐藏
    * (3) 给标签添加点击事件,事件触发的时候,回到顶部
    * */
    $(".back_top").click(function () {
        $("html").stop().animate({
            "scrollTop":0
        })
    })


})