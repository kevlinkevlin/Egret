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
        //this.skinName = "resource/eui_skins/DialogOk.exml";
        _this.skinName = "resource/eui_skins/DialogOk.exml";
        _this.addEventListener(eui.UIEvent.COMPLETE, function () {
            _this.lb_dialog_text.text = "123123";
            //this.width = this.stage.stageWidth;
            //this.height = this.stage.stageHeight;
        }, _this);
        return _this;
    }
    Dialog.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Dialog.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        this.img_dialog_outer.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.Close();
        }, this);
        this.close_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.Close();
        }, this);
        /*
                this.btn_dialog_cancel.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
                    this.Close();
                }, this)*/
    };
    Dialog.prototype.Show = function (view) {
        if (!view.contains(this)) {
            view.addChild(this);
        }
    };
    Dialog.prototype.Close = function () {
        if (this.parent != null)
            this.parent.removeChild(this);
    };
    return Dialog;
}(eui.Component));
__reflect(Dialog.prototype, "Dialog", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Dialog.js.map