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
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    function GameScene(num) {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/SlotViewSkin.exml";
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        _this.count = num;
        return _this;
    }
    /**
     * 处理一些遮罩，优化图片和开始
     */
    GameScene.prototype.onAddToStage = function (event) {
        var _this = this;
        //把slider添加到框里
        this.slider = new Slider.SliderScroll();
        this.addChild(this.slider);
        //把kake置顶
        this.stopgroup.visible = false;
        //this.back_btn.visible = false;
        this.setChildIndex(this.kake1, this.numChildren - 1);
        //添加start事件
        this.startgroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.gameStart, this);
        this.back_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.startgroup.visible = true;
            _this.Close();
        }, this);
    };
    GameScene.prototype.Close = function () {
        if (this.parent != null)
            this.parent.removeChild(this);
    };
    /**
     * 动态生成图片
     */
    GameScene.prototype.createImgSlide = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    /**
     * 生成矩形，mask
     */
    GameScene.prototype.drawMask = function (x, y) {
        var mask = new egret.Shape();
        mask.graphics.beginFill(0xff0000, 1);
        mask.graphics.drawRect(x, y, 105, 201);
        mask.graphics.endFill();
        return mask;
    };
    /**
     * 添加start
     */
    GameScene.prototype.gameStart = function () {
        console.log("start!");
        this.back_btn.visible = false;
        this.startgroup.visible = false;
        this.stopgroup.visible = true;
        this.stop_up.visible = false;
        this.stop_over.visible = true;
        this.removeChild(this.slider);
        this.slider = new Slider.SliderScroll(); //添加新的slider
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
    };
    /**
     * 添加stop
     */
    GameScene.prototype.gameStop = function () {
        var _this = this;
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
        this.slider.stopScroll(this.count, function (r) {
            if (r) {
                _this.stop_up.visible = false;
                _this.stop_over.visible = false;
                _this.back_btn.visible = true;
            }
        });
    };
    return GameScene;
}(eui.Component));
__reflect(GameScene.prototype, "GameScene");
//# sourceMappingURL=GameScene.js.map