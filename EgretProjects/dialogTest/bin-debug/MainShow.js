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
/**
 * Created by Administrator on 12/21 0021.
 */
var MainShow = (function (_super) {
    __extends(MainShow, _super);
    function MainShow() {
        var _this = _super.call(this) || this;
        _this.skinName = MainShowSkin;
        _this.verticalCenter = 0;
        _this.horizontalCenter = 0;
        return _this;
    }
    MainShow.prototype.childrenCreated = function () {
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.createGameScene, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeGameScene, this);
    };
    MainShow.prototype.createGameScene = function () {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.createGameScene, this);
        this.lblSend.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSure, this);
        this.lblSendBase.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBase, this);
        this.dialogList.itemRenderer = DialogTestRenderer;
        EventManager.inst.addEventListener("refresh", this.refreshMessage, this);
    };
    MainShow.prototype.removeGameScene = function () {
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeGameScene, this);
    };
    MainShow.prototype.refreshMessage = function () {
        var msg = DialogController.inst.getList();
        this.dialogList.dataProvider = new eui.ArrayCollection(msg);
    };
    MainShow.prototype.onSure = function () {
        if (!this.editText.text.length) {
            window.alert("请输入正确的内容！");
            return;
        }
        DialogController.inst.pushText(this.editText.text);
        this.editText.text = null;
    };
    MainShow.prototype.onBase = function () {
        DialogController.inst.pushBaseText();
    };
    return MainShow;
}(eui.Component));
__reflect(MainShow.prototype, "MainShow");
//# sourceMappingURL=MainShow.js.map