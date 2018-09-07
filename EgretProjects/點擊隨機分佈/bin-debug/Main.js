var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Main.prototype.onAddToStage = function (evt) {
        var _this = this;
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, function () {
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, _this.onGroupComplete, _this);
            RES.loadGroup("preload");
        }, this);
        RES.loadConfig("resource/resources.json", "resource/test/");
    };
    Main.prototype.onGroupComplete = function () {
        var _this = this;
        /// 设计纹理的ID时，确定某个规律 将有助于你在程序中巧妙的获取到这些资源
        var vcBirds = new Array();
        for (var i = 1; i < 9; ++i) {
            /*** 本示例关键代码段开始 ***/
            //  var txtr:egret.Texture = RES.getRes( "atlas.cartoon-egret_0"+i+"_small" );
            var txtr = RES.getRes("A" + i);
            /*** 本示例关键代码段结束 ***/
            var bird = new egret.Bitmap(txtr);
            var wHalfBird = bird.anchorOffsetX = txtr.textureWidth / 2;
            var hHalfBird = bird.anchorOffsetY = txtr.textureHeight / 2;
            bird.x = wHalfBird + (this.stage.stageWidth - wHalfBird * 2) * Math.random();
            bird.y = hHalfBird + (this.stage.stageHeight - hHalfBird * 2) * Math.random();
            bird.scaleX = 2;
            bird.scaleY = 2;
            vcBirds.push(bird);
            this.addChild(bird);
        }
        /// 提示信息
        this._txInfo = new egret.TextField;
        this._txInfo.size = 50;
        this._txInfo.x = 50;
        this._txInfo.width = this.stage.stageWidth - 100;
        this._txInfo.y = 50;
        this._txInfo.textAlign = egret.HorizontalAlign.CENTER;
        this._txInfo.textColor = 0x000000;
        this._txInfo.type = egret.TextFieldType.DYNAMIC;
        this._txInfo.lineSpacing = 6;
        this._txInfo.wordWrap = true;
        this._txInfo.multiline = true;
        //this._txInfo.background = true;
        //this._txInfo.backgroundColor = 0xFFFFFF;
        this._txInfo.text =
            "點擊觸發隨機分佈圖";
        this._bgInfo = new egret.Shape;
        this.addChild(this._bgInfo);
        this.addChild(this._txInfo);
        this._bgInfo.x = this._txInfo.x;
        this._bgInfo.y = this._txInfo.y;
        this._bgInfo.cacheAsBitmap = true;
        this._bgInfo.graphics.clear();
        this._bgInfo.graphics.beginFill(0xffffff, .5);
        this._bgInfo.graphics.drawRect(0, 0, this._txInfo.width, this._txInfo.height);
        this._bgInfo.graphics.endFill();
        /// 增加一点互动
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            for (var i = 0; i < 8; ++i) {
                var bird = vcBirds[i];
                bird.x = wHalfBird + (_this.stage.stageWidth - wHalfBird * 2) * Math.random();
                bird.y = hHalfBird + (_this.stage.stageHeight - hHalfBird * 2) * Math.random();
            }
        }, this);
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map