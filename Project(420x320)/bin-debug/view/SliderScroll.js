var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
* slider类的所有控制机制
*/
var Slider;
(function (Slider) {
    /**
    * slider滚动动画
    */
    var SliderScroll = (function (_super) {
        __extends(SliderScroll, _super);
        function SliderScroll() {
            var _this = _super.call(this) || this;
            /**控制滚动速度*/
            _this.speed1 = 0;
            _this.speed2 = 0;
            _this.speed3 = 0;
            /**slider框的宽*/
            _this.sliderboxwidth = 109.5 * 2;
            /**slider框的高*/
            _this.sliderboxheight = 201.5 * 2;
            /**slider本身的高度*/
            _this.sliderHeight = 840;
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
            return _this;
        }
        /**初始化*/
        SliderScroll.prototype.onAddToStage = function (event) {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
            this.rowCount = Math.ceil(this.sliderboxheight / this.sliderHeight) + 1; //计算在当当前slider框中，需要的图片数量
            //创建第一组sliderBox
            // this.bmpArr1 = [];
            // this.addSliderBox(139.5, 489, 137.25, 492, this.rowCount, this.bmpArr1);
            //创建第二组sliderBox
            this.bmpArr2 = [];
            //this.addSliderBox(267.5, 489, 265.25, 540, this.rowCount, this.bmpArr2);
            this.addSliderBox(this.stage.stageWidth / 2 - 100, -800, this.stage.stageWidth / 2 - 100, this.stage.stageHeight / 2 - 120, this.rowCount, this.bmpArr2);
            //创建第三组sliderBox
            // this.bmpArr3 = [];
            // this.addSliderBox(395.5, 489, 393.25, 492, this.rowCount, this.bmpArr3);
        };
        /**
         * 添加三个slider框，addSliderBox(sliderX,sliderY,maskX,maskY,count，bmpA)其它bmpA是存入slider的组，里面不止一个slider图片
         */
        SliderScroll.prototype.addSliderBox = function (sliderX, sliderY, maskX, maskY, count, bmpA) {
            for (var i = 0; i < count; i++) {
                var slider;
                //slider = this.createImgSlide("slider_ok_nobg_png");
                slider = this.createImgSlide("slider_big_png");
                //slider的長和寬是固定的，x，y是有三组。下面只是設置了一组。
                slider.width = 210;
                slider.height = 840;
                slider.x = sliderX;
                slider.y = sliderY + this.sliderHeight * i;
                bmpA.push(slider);
                this.addChild(slider);
                //添加遮罩
                var rectmask = this.drawMask(maskX, maskY);
                this.addChild(rectmask);
                slider.mask = rectmask;
            }
        };
        /**
         * 開始滾動
         */
        SliderScroll.prototype.startRoll = function () {
            /*
            this.mus_star = new MusicScene();
            this.mus_star.addMusic("laba_mp3",0,-1)
            this.mus_star.musicSound(0.3);
            */
            this.removeEventListener(egret.Event.ENTER_FRAME, this.enterFrameHandler, this);
            this.addEventListener(egret.Event.ENTER_FRAME, this.enterFrameHandler, this);
            //添加計時功能實現阻尼
            this.stimer = new egret.Timer(100, 0);
            this.stimer.addEventListener(egret.TimerEvent.TIMER, function timerFunc() {
                if (this.speed2 > 70) {
                }
                else {
                    //this.speed2 = this.speed2 - 5;
                    this.speed2 = 70;
                }
            }, this);
            this.stimer.start();
        };
        /**
         * 逐幀動畫
         */
        SliderScroll.prototype.enterFrameHandler = function (event) {
            for (var i = 0; i < this.rowCount; i++) {
                //第二组
                var bgBmp2 = this.bmpArr2[i];
                bgBmp2.y += this.speed2;
                if (this.bmpArr2[0].y >= 880) {
                    this.bmpArr2[0].y = this.bmpArr2[0].y - 1680;
                }
                if (this.bmpArr2[1].y >= 880) {
                    this.bmpArr2[1].y = this.bmpArr2[1].y - 1680;
                }
            }
        };
        /**
         * stop事件
         */
        SliderScroll.prototype.stopScroll = function (rad2, callback) {
            //开始减速
            this.stimer.stop();
            this.flag = false;
            this.etimer = new egret.Timer(100, 0);
            this.etimer.addEventListener(egret.TimerEvent.TIMER, function timerFunc() {
                var _this = this;
                //第二组
                if (this.speed2 < 18 && this.speed2 > 16) {
                    this.etimer.stop();
                    var count2 = 0;
                    setTimeout(function () {
                        _this.addEventListener(egret.Event.ENTER_FRAME, function AdjustmentSlider() {
                            var stopsign2 = 0;
                            stopsign2 = (-1) * (rad2) * 140 + 600; //调整slider的吻合
                            if ((this.bmpArr2[0].y > -6 + stopsign2) && (this.bmpArr2[0].y < 6 + stopsign2)) {
                                this.speed2 = 0;
                                //控制返回状的回调
                            }
                            else if ((this.bmpArr2[1].y > -6 + stopsign2) && (this.bmpArr2[1].y < 6 + stopsign2)) {
                                this.speed2 = 0;
                                //控制返回状的回调
                            }
                            if (this.speed2 == 0 && !this.flag) {
                                this.flag = true;
                                callback(this.flag);
                                // this.mus_star.musicStop();//////////////////////////////  
                            }
                        }, _this);
                    }, 500);
                }
                else {
                    this.speed2 = this.speed2 - 10.5;
                }
            }, this);
            this.etimer.start();
        };
        /**
         * 動態生成圖片
         */
        SliderScroll.prototype.createImgSlide = function (name) {
            var result = new egret.Bitmap();
            var texture = RES.getRes(name);
            result.texture = texture;
            return result;
        };
        /**
         * 生成矩形，mask
         */
        SliderScroll.prototype.drawMask = function (x, y) {
            var mask = new egret.Shape();
            mask.graphics.beginFill(0xff0000, 1);
            mask.graphics.drawRect(x, y, 210, 140);
            mask.graphics.endFill();
            return mask;
        };
        return SliderScroll;
    }(egret.DisplayObjectContainer));
    Slider.SliderScroll = SliderScroll;
    __reflect(SliderScroll.prototype, "Slider.SliderScroll");
})(Slider || (Slider = {}));
//# sourceMappingURL=SliderScroll.js.map