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
    Main.prototype.onAddToStage = function (event) {
        var imgLoader = new egret.ImageLoader;
        imgLoader.once(egret.Event.COMPLETE, this.imgLoadHandler, this);
        // imgLoader.load( "resource/cartoon-egret_00.png" );
        imgLoader.load("resource/project/1.PNG");
    };
    Main.prototype.imgLoadHandler = function (evt) {
        var bmd = new egret.Texture;
        bmd.bitmapData = evt.currentTarget.data;
        this._vcLocation = [
            new egret.Point(this.stage.stageWidth / 2, this.stage.stageHeight - bmd.textureHeight * 2),
            new egret.Point(this.stage.stageWidth / 2, this.stage.stageHeight / 2)
        ];
        this._bird = new egret.Bitmap(bmd);
        this._bird.touchEnabled = true;
        this._bird.addEventListener(egret.TouchEvent.TOUCH_TAP, this.launchTween, this);
        this._bird.anchorOffsetX = bmd.textureWidth / 2;
        this._bird.anchorOffsetY = bmd.textureHeight / 2;
        this.addChild(this._bird);
        /// 提示信息
        this._txInfo = new egret.TextField;
        this.addChild(this._txInfo);
        this._txInfo.size = 55;
        this._txInfo.x = 50;
        this._txInfo.y = 50;
        this._txInfo.width = this.stage.stageWidth - 50;
        this._txInfo.textAlign = egret.HorizontalAlign.CENTER;
        this._txInfo.textColor = 0x000000;
        this._txInfo.type = egret.TextFieldType.DYNAMIC;
        this._txInfo.lineSpacing = 6;
        this._txInfo.multiline = true;
        this._txInfo.text =
            "點擊圖像觸發動作";
        /*     this.stage.addEventListener( egret.TouchEvent.TOUCH_TAP, ()=>{
                 this.launchTween();
             }, this );
     */
        /// 开启显示
        this._idxCurrLocation = -1;
        this.updateRdmLocation(true);
    };
    Main.prototype.updateRdmLocation = function (bApply) {
        if (bApply === void 0) { bApply = false; }
        var vcIdxLocation = [0, 1];
        if (this._idxCurrLocation != -1) {
            vcIdxLocation.splice(this._idxCurrLocation, 1);
        }
        var loc = this._vcLocation[this._idxCurrLocation = vcIdxLocation[Math.floor(Math.random() * vcIdxLocation.length)]];
        if (bApply) {
            this._bird.x = loc.x;
            this._bird.y = loc.y;
            this._bird.scaleX = 3;
            this._bird.scaleY = 3;
        }
        return loc;
    };
    Main.prototype.launchTween = function () {
        var loc = this.updateRdmLocation();
        /*** 本示例关键代码段开始 ***/
        var funcChange = function () {
            //this._bird.rotation += 6 * iDirection;
        };
        var iDirection = Math.random() > .5 ? -1 : 1; /// 随机方向
        egret.Tween.get(this._bird, { onChange: funcChange, onChangeObj: this })
            .to({ x: loc.x, y: loc.y }, 300, egret.Ease.sineIn);
        /*** 本示例关键代码段结束 ***/
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map