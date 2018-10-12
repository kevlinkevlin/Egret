/**
* slider类的所有控制机制
*/
module Slider {
    /**
    * slider滚动动画
    */
    export class SliderScroll extends egret.DisplayObjectContainer {

        /**图片引用*/
        private bmpArr1: egret.Bitmap[];
        private bmpArr2: egret.Bitmap[];
        private bmpArr3: egret.Bitmap[];
        /**图片数量*/
        private rowCount: number;
        /**纹理本身的高度*/
        private textureHeight: number;
        /**控制滚动速度*/
        private speed1: number = 0;
        private speed2: number = 0;
        private speed3: number = 0;
        /**slider框的宽*/
        private sliderboxwidth: number = 109.5*2;
        /**slider框的高*/
        private sliderboxheight: number = 201.5*2;
        /**slider本身的高度*/
        private sliderHeight: number = 420*2;
        /**添加计时，阻尼用*/
        private stimer: egret.Timer;
        /**添加计时，阻尼用*/
        private etimer: egret.Timer;
        private flag: boolean;

        private mus_star;

        public constructor() {
            super();
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        }

        /**初始化*/
        private onAddToStage(event: egret.Event) {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
            this.rowCount = Math.ceil(this.sliderboxheight / this.sliderHeight) + 1;//计算在当当前slider框中，需要的图片数量

            //创建第一组sliderBox
           // this.bmpArr1 = [];
           // this.addSliderBox(139.5, 489, 137.25, 492, this.rowCount, this.bmpArr1);
            //创建第二组sliderBox
            this.bmpArr2 = [];
            //this.addSliderBox(267.5, 489, 265.25, 540, this.rowCount, this.bmpArr2);
            this.addSliderBox(this.stage.stageWidth/2-100 ,this.stage.stageHeight/2 +20
            ,this.stage.stageWidth/2-100 , this.stage.stageHeight/2-120, this.rowCount, this.bmpArr2);
            //创建第三组sliderBox
           // this.bmpArr3 = [];
           // this.addSliderBox(395.5, 489, 393.25, 492, this.rowCount, this.bmpArr3);
        }

        /**
         * 添加三个slider框，addSliderBox(sliderX,sliderY,maskX,maskY,count，bmpA)其它bmpA是存入slider的组，里面不止一个slider图片
         */
        private addSliderBox(sliderX, sliderY, maskX, maskY, count, bmpA) {
            for (var i: number = 0; i < count; i++) {
                var slider: egret.Bitmap;
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
                var rectmask: egret.Shape = this.drawMask(maskX, maskY);
                this.addChild(rectmask);
                slider.mask = rectmask;

            }

        }

        /**
         * 開始滾動
         */
        public startRoll(): void {
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
                if (this.speed2 <= -70) {

                } else {
                    //this.speed2 = this.speed2 - 5;
                    this.speed2 = -70
                }
            }, this);
            this.stimer.start();
        }

        /**
         * 逐幀動畫
         */
        private enterFrameHandler(event: egret.Event): void {

            for (var i: number = 0; i < this.rowCount; i++) {
                
                //第二组
                var bgBmp2: egret.Bitmap = this.bmpArr2[i];
                bgBmp2.y += this.speed2;
                if (this.bmpArr2[0].y < -500*3) {
                    this.bmpArr2[0].y = this.bmpArr2[0].y + 1680;
                }
                if (this.bmpArr2[1].y < -500*3) {
                    this.bmpArr2[1].y = this.bmpArr2[1].y + 1680;
                }

         
            }
        }

        /**
         * stop事件
         */
        public stopScroll(rad2, callback): void {
            //开始减速
            this.stimer.stop();
            this.flag = false;
            this.etimer = new egret.Timer(100, 0);

            this.etimer.addEventListener(egret.TimerEvent.TIMER, function timerFunc() {
    
                //第二组
                if (this.speed2 == -35/2) {
                  
                    this.etimer.stop();
                    var count2 = 0;
                    setTimeout(() => {//保存this不变
                        this.addEventListener(egret.Event.ENTER_FRAME, function AdjustmentSlider() {
                            var stopsign2 = 0;
                        stopsign2 = (-1) * (rad2) * 140 - 240;//调整slider的吻合
                            if ((this.bmpArr2[0].y > -6 + stopsign2) && (this.bmpArr2[0].y  < 6 + stopsign2)) {
                                this.speed2 = 0;
                                //控制返回状的回调
                            } else if ((this.bmpArr2[1].y  > -6 + stopsign2) && (this.bmpArr2[1].y  < 6 + stopsign2)) {
                                this.speed2 = 0;
                                //控制返回状的回调
                            }
                            if ( this.speed2 == 0 && !this.flag) {
                                    this.flag = true;
                                    callback(this.flag);
                                   // this.mus_star.musicStop();//////////////////////////////  
                                }

                        }, this);
                    }, 500);

                } else {
                    this.speed2 = this.speed2 + 10.5;
                }

            

            }, this);
            this.etimer.start();
        }

        /**
         * 動態生成圖片
         */
        private createImgSlide(name: string): egret.Bitmap {
            let result = new egret.Bitmap();
            let texture: egret.Texture = RES.getRes(name);
            result.texture = texture;
            return result;
        }

        /**
         * 生成矩形，mask
         */
        private drawMask(x: number, y: number) {
            var mask: egret.Shape = new egret.Shape();
            mask.graphics.beginFill(0xff0000, 1);
            mask.graphics.drawRect(x, y, 105*2, 70*2);
            mask.graphics.endFill();
            return mask;
        }

    }


}
