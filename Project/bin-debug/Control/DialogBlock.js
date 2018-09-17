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
var DialogBlock = (function (_super) {
    __extends(DialogBlock, _super);
    function DialogBlock() {
        return _super.call(this) || this;
    }
    DialogBlock.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    DialogBlock.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return DialogBlock;
}(eui.Component));
__reflect(DialogBlock.prototype, "DialogBlock", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=DialogBlock.js.map