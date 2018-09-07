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
var createSprite = (function (_super) {
    __extends(createSprite, _super);
    function createSprite(_otext) {
        var _this = _super.call(this) || this;
        //记录数
        _this.array = [];
        _this.positionArray = [];
        _this.otext = _otext;
        _this.create();
        return _this;
    }
    createSprite.prototype.create = function () {
        var createText = new egret.TextField();
        createText.textColor = 0x0000;
        var _text = new egret.TextField();
        for (var i = 0; i < this.otext.length; i++) {
            if (this.otext[i] == '&') {
                this.positionArray.push(_text.width);
                this.num = this.otext.indexOf(this.otext[i]);
                this.str = this.otext[i] + this.otext[i + 1] + this.otext[i + 2] + this.otext[i + 3];
                this.otext = this.otext.replace(this.str, '       ');
                this.array.push({ str: this.str });
            }
            _text.text += this.otext[i];
        }
        createText.text = this.otext;
        this.addChild(createText);
        for (var i = 0; i < this.array.length; i++) {
            var emoji = new egret.Bitmap(RES.getRes(this.array[i].str));
            emoji.width = emoji.height = 60;
            emoji.y = -30;
            emoji.x = this.positionArray[i];
            this.addChild(emoji);
        }
    };
    return createSprite;
}(egret.Sprite));
__reflect(createSprite.prototype, "createSprite");
//# sourceMappingURL=createSprite.js.map