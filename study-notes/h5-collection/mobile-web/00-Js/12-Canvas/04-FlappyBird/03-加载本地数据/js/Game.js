
(function () {
    window.Game = Class.extend({
        init : function (option) {
            option = option || {};
            // 0.备份this
            var self = this;
            // 1.fps
            this.fps = option.fps || 60;
            // 2.创建帧工具类
            this.frameUtil = new FrameUtil();
            // 3.获取画布和上下文
            this.canvas = document.getElementById(option.canvasId);
            this.ctx = this.canvas.getContext('2d');
            // 4.创建加载数据对象
            this.staticSourceUtil = new StaticSourceUtil();
            // 5.保存所有的图片数据
            this.allImageObj = {};
            // 5.加载数据
            // 所有图片对象,图片的总个数,已经加载好的图片个数
            this.staticSourceUtil.loadImage('r.json',function (allImageObj,allImgCount,loadImgCount) {
                // 所有的图片对象加载完毕后再保存
                if(allImgCount == loadImgCount){
                    // 所有的图片对象已经加载完毕
                    self.allImageObj = allImageObj;
                    // 运行游戏
                    self.run();
                }
            })
        },
        
        // 开始游戏
        run : function () {
            // 备份this
            var self = this;
            // 定时器
            this.timer = setInterval(function () {
                self.runLoop();
            },1000/self.fps); // 1帧需要的时间 fps = 50 1s/50 1000ms/50
        },

        // 运行循环,每一帧执行1次
        runLoop : function () {
            // 0.清屏
            this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
            // 1.计算FPS
            this.frameUtil.countFps();
            // 2.绘制FPS和FNO
            this.ctx.fillText('FPS /'+this.frameUtil.realFps,15,15);
            this.ctx.fillText('FNO /'+this.frameUtil.currentFrame,15,30);

        },

        // 暂停游戏
        pause : function () {
            clearInterval(this.timer);
        },
        
        // 结束游戏
        gameOver : function () {
            
        }
    });
})();