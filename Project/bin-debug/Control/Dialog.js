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
var Dialog = (function (_super) {
    __extends(Dialog, _super);
    function Dialog() {
        var _this = _super.call(this) || this;
        _this.game = new GameScene();
        _this.isThemeLoadEnd = false;
        //this.skinName = "resource/eui_skins/DialogOk.exml";
        _this.skinName = "resource/eui_skins/DialogOk.exml";
        _this.addEventListener(eui.UIEvent.COMPLETE, function () {
            _this.lb_dialog_text.text = "123123";
        }, _this);
        return _this;
    }
    Dialog.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Dialog.prototype.onThemeLoadComplete = function () {
        console.log("LoadSuccess");
        this.isThemeLoadEnd = true;
        this.createScene();
    };
    Dialog.prototype.createScene = function () {
        if (this.isThemeLoadEnd) {
            // this.startCreateScene();
            var gamescene = new GameScene();
            this.addChild(gamescene);
        }
    };
    Dialog.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        this.img_dialog_outer.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.Close();
        }, this);
        this.ready_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.addChild(_this.game);
        }, this);
        /*
        this.close_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            this.Close();
            
        }, this)

        this.btn_dialog_cancel.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            this.Close();
        }, this)
        */
    };
    Dialog.prototype.Show = function (view) {
        if (!view.contains(this)) {
            view.addChild(this);
        }
    };
    Dialog.prototype.Close = function () {
        if (this.parent != null && this.textedit == null) {
            this.parent.removeChild(this);
        }
        else {
            this.lb_dialog_text.text = this.textedit;
            this.textedit = null;
        }
    };
    return Dialog;
}(eui.Component));
__reflect(Dialog.prototype, "Dialog", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Dialog.js.map