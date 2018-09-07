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
var sentText = (function (_super) {
    __extends(sentText, _super);
    function sentText(_otext, _isLeft) {
        var _this = _super.call(this) || this;
        //已经分配的字符长度
        _this.stringNum = 0;
        _this.stringArray = [];
        _this.spriteArray = [];
        _this.lengthArray = [];
        _this.otext = _otext;
        _this.isLeft = _isLeft;
        _this.create();
        return _this;
    }
    sentText.prototype.create = function () {
        this.textSprite = new egret.Sprite();
        this.addChild(this.textSprite);
        this.createText(0, this.otext);
        for (var i_1 = 0; i_1 < this.stringArray.length; i_1++) {
            // if (this.stringArray[i].length != 0) {
            this.createSprite = new createSprite(this.stringArray[i_1]);
            // }
            this.createSprite.y = 30 + i_1 * 60;
            this.addChild(this.createSprite);
            this.spriteArray.push(this.createSprite);
            this.lengthArray.push(this.createSprite.width);
        }
        var len = this.lengthArray.length;
        for (var i = 0; i < len; i++) {
            for (var j = 0; j < len - 1 - i; j++) {
                if (this.lengthArray[j] < this.lengthArray[j + 1]) {
                    var temp = this.lengthArray[j + 1]; // 元素交换
                    this.lengthArray[j + 1] = this.lengthArray[j];
                    this.lengthArray[j] = temp;
                }
            }
        }
        if (this.isLeft == true)
            this.textSprite.graphics.beginFill(0x808080);
        if (this.isLeft == false)
            this.textSprite.graphics.beginFill(0x008000);
        this.textSprite.graphics.drawRect(0, 0, this.lengthArray[0], (this.stringArray.length - 1) * 60);
        this.textSprite.graphics.endFill();
    };
    /**
     * 文本分割
     * @param 要分割文字开始的位置
     * @param 要分割的文字
     */
    sentText.prototype.createText = function (i, _text) {
        this.stringNum += i;
        var firstText = new egret.TextField();
        for (var i_2 = this.stringNum; i_2 < _text.length; i_2++) {
            if (firstText.width <= 300) {
                firstText.text += _text[i_2];
            }
        }
        //如果输入文字的宽度大于300，判断最后字母是否有表情
        var remNum = 0;
        if (firstText.width >= 290) {
            for (var i_3 = firstText.text.length - 3; i_3 < firstText.text.length; i_3++) {
                if (firstText.text[i_3] == '&') {
                    remNum = firstText.text.length - i_3;
                }
            }
        }
        firstText.text = firstText.text.substring(remNum - 1, firstText.text.length - remNum);
        this.stringArray.push(firstText.text);
        if (this.stringNum < _text.length) {
            this.createText(firstText.text.length, _text);
        }
    };
    return sentText;
}(egret.Sprite));
__reflect(sentText.prototype, "sentText");
//# sourceMappingURL=sentText.js.map