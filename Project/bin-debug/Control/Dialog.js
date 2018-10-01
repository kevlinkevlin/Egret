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
        _this.firstscene = true;
        _this.name_test = [];
        _this.dia_test = [];
        _this.skinName = "resource/eui_skins/DialogOk.exml";
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
        this.back_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.Close();
        }, this);
        this.ready_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            var game = new GameScene(_this.count);
            egret.setTimeout(function () { _this.addChild(game); }, _this, 100);
        }, this);
    };
    Dialog.prototype.Show = function (view) {
        if (!view.contains(this)) {
            view.addChild(this);
        }
    };
    Dialog.prototype.Close = function () {
        this.dialog_name.visible = true;
        if (this.parent != null && this.name_test.length == 0) {
            this.parent.removeChild(this);
            this.ready_btn.visible = false;
            this.back_btn.visible = false;
        }
        else {
            if (this.name_test.length == 1 && this.firstscene == false) {
                this.ready_btn.visible = true;
                this.back_btn.visible = true;
            }
            else {
                this.ready_btn.visible = false;
                this.back_btn.visible = false;
            }
            this.lb_dialog_text.text = this.dia_test.shift();
            this.char_name.text = this.name_test.shift();
        }
    };
    return Dialog;
}(eui.Component));
__reflect(Dialog.prototype, "Dialog", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Dialog.js.map