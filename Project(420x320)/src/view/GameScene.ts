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
    public char4_target:boolean = false;
    public message:Dialog;

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
        // this.startgroup.visible = true;
        //this.back_btn.visible = false;
        this.stopgroup.visible = false; 
        //把kake置顶
        //this.setChildIndex(this.kake1, this.numChildren - 1);
        //添加start事件
        //this.startgroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.gameStart, this);
        this.gameStart();
        this.back_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
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
        //this.startgroup.visible = false;
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

 
    private gameStop() {
        
        console.log("stop!");
        this.stop_up.visible = true;
        this.stop_over.visible = false;
        //var rad2 = Math.floor(Math.random() * 6 + 1);
  
        console.log(this.count);
        this.slider.stopScroll(this.count, (r) => {//r回调回来的结果，当r=true时，执行if里的操作
            if (r) {
                this.stop_up.visible = false;
                this.stop_over.visible = false;
                setTimeout(()=>{
                this.back_btn.visible = true;
                this.message = new Dialog();
                this.message.ready_btn.visible = false;
                this.message.char_name.text = "拉霸機";
                var num = Math.ceil(Math.random()*3)
                if(!this.char4_target)
                {
                switch(num)
                {
                case 1:
                this.message.lb_dialog_text.text = "嗶嗶.......恭喜抽到送禮自用兩相宜的紀念徽章一枚，還有其他機台去試試手氣吧！";
                break;
                case 2:
                this.message.lb_dialog_text.text = "嗶嗶.......恭喜抽到非常具有紀念價值的紀念徽章一枚，還有其他機台去試試手氣吧！";
                break;
                case 3:
                this.message.lb_dialog_text.text = "嗶嗶嗶嗶.....恭喜抽到的紀念徽章一枚，還有其他機台去試試手氣吧！";
                break;
                default:
                break;
                }
                }else{this.message.lb_dialog_text.text = "登登豋登登登登登登....................恭喜你抽到大獎!!!!!!!!!!";}
                this.addChild(this.message);
                },1000)
                
             //  this.back_btn.visible = true;
               
            }
        });
    }
}