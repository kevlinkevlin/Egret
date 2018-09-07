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
 *
 */
var GridItem = (function (_super) {
    __extends(GridItem, _super);
    function GridItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "GameGridItem";
        _this.touchEnabled = false; //不能点击
        _this.anchorOffsetX = _this.width >> 1;
        _this.anchorOffsetY = _this.height >> 1;
        return _this;
    }
    GridItem.prototype.setData = function (data) {
        this.data = data;
        this.grid.fillColor = data.bg;
        if (data.num > 0) {
            this.numTxt.visible = true;
            this.numTxt.text = data.num + "";
            this.numTxt.size = data.size;
            this.numTxt.textColor = data.color;
        }
        else {
            this.numTxt.visible = false;
        }
    };
    Object.defineProperty(GridItem.prototype, "num", {
        get: function () {
            return this.data.num;
        },
        enumerable: true,
        configurable: true
    });
    return GridItem;
}(eui.Component));
__reflect(GridItem.prototype, "GridItem");
//# sourceMappingURL=GridItem.js.map