class LoadingUI extends egret.Sprite implements RES.PromiseTaskReporter {

    public constructor() {
        super();
        this.createView();
    }

 private textField: egret.TextField;
    private uiContainer: egret.DisplayObjectContainer;
    private img_loadingBg: egret.Bitmap;
    private img_loading0: egret.Bitmap;
    private img_loading1: egret.Bitmap;
    private loadingBg = "resource/UI/dialog_bg.png";    //加载页面背景
    private loading0 = ""; //进度条的条
    private loading1 = "resource/Dialog/Dia01.png";  //进度条的 条背景    
    private w: number;
    private h: number;
    private r: number;
    private createView(): void {
        console.log("LoadingUI createView!!!");
        this.w = egret.Capabilities.boundingClientWidth;  //设备的宽
        this.h = egret.Capabilities.boundingClientHeight;
        this.textField = new egret.TextField();  //进度文字

        var urlLoader: egret.URLLoader = new egret.URLLoader();                      
        urlLoader.addEventListener(egret.Event.COMPLETE, this.onComplete, this);
        urlLoader.dataFormat = egret.URLLoaderDataFormat.TEXTURE;
        urlLoader.load(new egret.URLRequest(this.loadingBg));

        var urlLoader: egret.URLLoader = new egret.URLLoader();
        urlLoader.addEventListener(egret.Event.COMPLETE, this.onComplete, this);
        urlLoader.dataFormat = egret.URLLoaderDataFormat.TEXTURE;
        urlLoader.load(new egret.URLRequest(this.loading0));

        var urlLoader: egret.URLLoader = new egret.URLLoader();
        urlLoader.addEventListener(egret.Event.COMPLETE, this.onComplete, this);
        urlLoader.dataFormat = egret.URLLoaderDataFormat.TEXTURE;
        urlLoader.load(new egret.URLRequest(this.loading1));

        this.img_loadingBg = new egret.Bitmap();
        this.img_loading0 = new egret.Bitmap();
        this.img_loading1 = new egret.Bitmap();

        this.uiContainer = new egret.DisplayObjectContainer();
        this.addChild(this.uiContainer);
        this.addChildAt(this.img_loadingBg, 0);
        this.addChild(this.img_loading0);
        this.addChild(this.img_loading1);
        this.addChild(this.textField);

    }

    private onComplete(e: egret.Event): void {   
        var urlLoader: egret.URLLoader = <egret.URLLoader>e.target;
        var texture = urlLoader.data;
        if (urlLoader._request.url == this.loadingBg) {
            this.img_loadingBg.texture = texture;
            var bgW = this.img_loadingBg.width;     
            var bgH = this.img_loadingBg.height;

            console.log(bgW + "背景宽");
            console.log(bgH + "背景高");
            console.log(this.w + "视口宽");
            console.log(this.h + "视口高");
            if(this.w / 640 < this.h / 1136){       
                //W
                this.img_loadingBg.scaleX = 1;   
                this.img_loadingBg.scaleY = this.stage.stageHeight/bgH;

            }else{
                //H
                this.img_loadingBg.scaleY = 1;
                this.img_loadingBg.scaleX = this.stage.stageWidth/bgW;
            }

        } else if (urlLoader._request.url == this.loading0) {
            this.img_loading0.scale9Grid = new egret.Rectangle(5, 5, 10, 10);
            this.img_loading0.width = this.stage.stageWidth -140;
            this.img_loading0.height = 50;

            this.img_loading0.texture = texture;
            this.img_loading0.anchorOffsetX = this.img_loading0.width * 0.5;
            this.img_loading0.anchorOffsetY = this.img_loading0.height * 0.5;
            this.img_loading0.x = this.stage.stageWidth/2;
            this.img_loading0.y = this.stage.stageHeight- 100;

        } else if (urlLoader._request.url == this.loading1) {
            this.img_loading1.scale9Grid = new egret.Rectangle(5, 5, 10, 10);
            this.img_loading1.width = 0;
            this.img_loading1.height = 100;

            this.img_loading1.texture = texture;
            this.img_loading1.anchorOffsetX = this.img_loading1.width * 0.5;
            this.img_loading1.anchorOffsetY = this.img_loading1.height * 0.5;
            this.img_loading1.x = this.stage.stageWidth/7;
            this.img_loading1.y = this.stage.stageHeight*3/4;
            console.log(this.stage.stageWidth +"AAAA"+this.img_loading1.width );

            // this.img_loading1.scaleX =  10;
            this.textField.textColor = 0xffffff;
            this.textField.size = 20;
            this.textField.x = 10;
            this.textField.y = 130;
            this.textField.width = 400;
            this.textField.height = 100;
            this.textField.textAlign = "center";
        }
    }

    public onProgress(current: number, total: number): void {      //设计尺寸 640 1136 
        //进度文字
        this.textField.text = "" + Math.round((current / total) * 100) + "%";
        //进度条宽度
        if (this.img_loading1 != null) {
            this.img_loading1.width = 280 * (current / total);
        }
    }


/*
    private textField: egret.TextField;

    private createView(): void {
         var urlLoader: egret.URLLoader = new egret.URLLoader();   
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.x = 10;
        this.textField.y = 130;
        this.textField.width = 400;
        this.textField.height = 100;
        this.textField.textAlign = "center";
    }

    public onProgress(current: number, total: number): void {
        this.textField.text = `Loading...${current}/${total}`;
    
    }
    */
}
