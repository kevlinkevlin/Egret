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
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.loadingBg = ""; //加载页面背景
        _this.loading0 = ""; //进度条的条
        _this.loading1 = "resource/Dialog/Dia01.png"; //进度条的 条背景    
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        console.log("LoadingUI createView!!!");
        this.w = egret.Capabilities.boundingClientWidth; //设备的宽
        this.h = egret.Capabilities.boundingClientHeight;
        this.textField = new egret.TextField(); //进度文字
        var urlLoader = new egret.URLLoader();
        urlLoader.addEventListener(egret.Event.COMPLETE, this.onComplete, this);
        urlLoader.dataFormat = egret.URLLoaderDataFormat.TEXTURE;
        urlLoader.load(new egret.URLRequest(this.loadingBg));
        var urlLoader = new egret.URLLoader();
        urlLoader.addEventListener(egret.Event.COMPLETE, this.onComplete, this);
        urlLoader.dataFormat = egret.URLLoaderDataFormat.TEXTURE;
        urlLoader.load(new egret.URLRequest(this.loading0));
        var urlLoader = new egret.URLLoader();
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
    };
    LoadingUI.prototype.onComplete = function (e) {
        var urlLoader = e.target;
        var texture = urlLoader.data;
        if (urlLoader._request.url == this.loadingBg) {
            this.img_loadingBg.texture = texture;
            var bgW = this.img_loadingBg.width;
            var bgH = this.img_loadingBg.height;
            console.log(bgW + "背景宽");
            console.log(bgH + "背景高");
            console.log(this.w + "视口宽");
            console.log(this.h + "视口高");
            if (this.w / 640 < this.h / 1136) {
                //W
                this.img_loadingBg.scaleX = 1;
                this.img_loadingBg.scaleY = this.stage.stageHeight / bgH;
            }
            else {
                //H
                this.img_loadingBg.scaleY = 1;
                this.img_loadingBg.scaleX = this.stage.stageWidth / bgW;
            }
        }
        else if (urlLoader._request.url == this.loading0) {
            this.img_loading0.scale9Grid = new egret.Rectangle(5, 5, 10, 10);
            this.img_loading0.width = this.stage.stageWidth - 140;
            this.img_loading0.height = 50;
            this.img_loading0.texture = texture;
            this.img_loading0.anchorOffsetX = this.img_loading0.width * 0.5;
            this.img_loading0.anchorOffsetY = this.img_loading0.height * 0.5;
            this.img_loading0.x = this.stage.stageWidth / 2;
            this.img_loading0.y = this.stage.stageHeight - 100;
        }
        else if (urlLoader._request.url == this.loading1) {
            this.img_loading1.scale9Grid = new egret.Rectangle(5, 5, 10, 10);
            this.img_loading1.width = 0;
            this.img_loading1.height = 100;
            this.img_loading1.texture = texture;
            this.img_loading1.anchorOffsetX = this.img_loading1.width * 0.5;
            this.img_loading1.anchorOffsetY = this.img_loading1.height * 0.5;
            this.img_loading1.x = this.stage.stageWidth / 7;
            this.img_loading1.y = this.stage.stageHeight * 3 / 4;
            console.log(this.stage.stageWidth + "AAAA" + this.img_loading1.width);
            // this.img_loading1.scaleX =  10;
            this.textField.textColor = 0xffffff;
            this.textField.size = 20;
            this.textField.x = 10;
            this.textField.y = 130;
            this.textField.width = 400;
            this.textField.height = 100;
            this.textField.textAlign = "center";
        }
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        //进度文字
        this.textField.text = "" + Math.round((current / total) * 100) + "%";
        //进度条宽度
        if (this.img_loading1 != null) {
            this.img_loading1.width = 280 * (current / total);
        }
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
//# sourceMappingURL=LoadingUI.js.map