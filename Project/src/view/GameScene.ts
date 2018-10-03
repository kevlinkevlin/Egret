class GameScene extends eui.Component {
    
    public startgroup: eui.Group;
    public stopgroup: eui.Group;
    public stop_over: eui.Image;
    public stop_up: eui.Image;
    public kake1: eui.Image;
    public back_btn:eui.Image;
    //申明声音
    private mus_star;
    private mus_move;
    private mus_stop;
    private count:number;//控制拉霸結果 
    public slider: Slider.SliderScroll;//为了调用sliderscroll里面的方法

    public constructor(num : number) {
        super();
        this.skinName = "resource/eui_skins/SlotViewSkin.exml";
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.count = num;
    }
    /**
     * 处理一些遮罩，优化图片和开始
     */
    private onAddToStage(event: egret.Event) {
        
        
        //把slider添加到框里
        this.slider = new Slider.SliderScroll();
        this.addChild(this.slider);

        //把kake置顶
        this.stopgroup.visible = false;


        //this.back_btn.visible = false;


        
        this.setChildIndex(this.kake1, this.numChildren - 1);
        //添加start事件
        this.startgroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.gameStart, this);
        this.back_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
        this.startgroup.visible = true;
        this.Close();
		}, this);

    }



    private Close() {
		if (this.parent != null)
			this.parent.removeChild(this);
	}
    /**
     * 动态生成图片
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
        mask.graphics.drawRect(x, y, 105, 201);
        mask.graphics.endFill();
        return mask;
    }

    /**
     * 添加start
     */
    private gameStart() {
        console.log("start!");
        this.back_btn.visible = false;
        this.startgroup.visible = false;
        this.stopgroup.visible = true;
        this.stop_up.visible = false;
        this.stop_over.visible = true;
        

        this.removeChild(this.slider);
        this.slider = new Slider.SliderScroll();//添加新的slider
        this.addChild(this.slider);
        //把kake置顶
        this.setChildIndex(this.kake1, this.numChildren - 1);
        //控制slider开始翻滚
        this.slider.startRoll();
        //添加stop
        this.stop_over.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.gameStop, this);
        this.stop_over.addEventListener(egret.TouchEvent.TOUCH_TAP, this.gameStop, this);

        //播放开始声音
        /*
        this.mus_star = new MusicScene();
        this.mus_star.addMusic("mus_start_mp3", 0, 1);
        this.mus_move = new MusicScene();
        this.mus_move.addMusic("mus_move_mp3", 0, -1);
        */

    }

    /**
     * 添加stop
     */
    private gameStop() {
        
        console.log("stop!");
        this.stop_up.visible = true;
        this.stop_over.visible = false;

        //var rad2 = Math.floor(Math.random() * 6 + 1);
       

        //停止声音
        /*
        this.mus_move.musicSound(0.3);
        this.mus_stop = new MusicScene();
        this.mus_stop.addMusic("guzhang_mp3", 0, -1);
        */
        //控制slider停止翻滚
        console.log(this.count);
        this.slider.stopScroll(this.count, (r) => {//r回调回来的结果，当r=true时，执行if里的操作
            if (r) {
                this.stop_up.visible = false;
                this.stop_over.visible = false;
               this.back_btn.visible = true;
               
            }
        });
    }
}