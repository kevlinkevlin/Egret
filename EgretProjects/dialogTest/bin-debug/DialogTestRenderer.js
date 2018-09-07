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
var DialogTestRenderer = (function (_super) {
    __extends(DialogTestRenderer, _super);
    function DialogTestRenderer() {
        var _this = _super.call(this) || this;
        _this.skinName = DialogTxtRenderer;
        return _this;
    }
    DialogTestRenderer.prototype.dataChanged = function () {
        _super.prototype.dataChanged.call(this);
        this.lblShow.text = this.data;
    };
    return DialogTestRenderer;
}(eui.ItemRenderer));
__reflect(DialogTestRenderer.prototype, "DialogTestRenderer");
//# sourceMappingURL=DialogTestRenderer.js.map