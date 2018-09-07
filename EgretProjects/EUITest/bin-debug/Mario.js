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
var Mario = (function (_super) {
    __extends(Mario, _super);
    function Mario() {
        return _super.call(this) || this;
    }
    Mario.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Mario.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        this.Group_btn.touchEnabled = true;
        this.Group_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            var the_btn = e.target;
            if (the_btn.selected && the_btn.selected != undefined) {
                _this.toggleBtn(the_btn);
            }
            else {
                the_btn.selected = true;
            }
        }, this);
    };
    Mario.prototype.toggleBtn = function (btn) {
        for (var i = 0; i < this.Group_btn.numChildren; i++) {
            var the_btn = this.Group_btn.getChildAt(i);
            the_btn.selected = false;
        }
        btn.selected = true;
    };
    return Mario;
}(eui.Component));
__reflect(Mario.prototype, "Mario", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Mario.js.map