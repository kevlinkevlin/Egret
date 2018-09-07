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
var gameScene = (function (_super) {
    __extends(gameScene, _super);
    function gameScene() {
        var _this = _super.call(this) || this;
        //哪个是否为左面的玩家发送
        _this.isLeft = false;
        //聊天滚动框
        _this.scrollView = new egret.ScrollView();
        _this.emojiArray = [];
        _this.spriteArray = [];
        _this.create();
        return _this;
    }
    gameScene.prototype.create = function () {
        this.gameLoad = new egret.DisplayObjectContainer();
        this.gameLoad.width = 640;
        this.addChild(this.gameLoad);
        this.bg = new egret.Shape();
        this.bg.graphics.lineStyle(10, 0x00000);
        this.bg.graphics.beginFill(0xffffff);
        this.bg.graphics.drawRect(0, 0, 640, 1136);
        this.bg.graphics.endFill();
        this.gameLoad.addChild(this.bg);
        this.headbox = new egret.Shape();
        this.headbox.graphics.beginFill(0x9999FF);
        this.headbox.graphics.drawRect(20, 10, 600, 100);
        this.headbox.graphics.endFill();
        this.gameLoad.addChild(this.headbox);
        this.avatar1 = new egret.Bitmap(RES.getRes('point_png'));
        this.avatar1.width = this.avatar1.height = 50;
        this.avatar1.x = 40;
        this.avatar1.y = 35;
        this.gameLoad.addChild(this.avatar1);
        this.avatar1.touchEnabled = true;
        this.avatar1.name = 'avatar1';
        this.avatar2 = new egret.Bitmap(RES.getRes('shile_jpg'));
        this.avatar2.width = this.avatar2.height = 50;
        this.avatar2.x = 550;
        this.avatar2.y = this.avatar1.y;
        this.gameLoad.addChild(this.avatar2);
        this.avatar2.touchEnabled = true;
        this.avatar2.name = 'avatar2';
        this.inputBox = new egret.TextField();
        this.inputBox.type = egret.TextFieldType.INPUT;
        this.inputBox.border = true;
        this.inputBox.textColor = 0x0000;
        this.inputBox.height = 50;
        this.inputBox.width = 400;
        this.inputBox.x = 20;
        this.inputBox.y = 1050;
        this.inputBox.name = 'addText';
        this.inputBox.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.gameLoad.addChild(this.inputBox);
        this.first = new egret.Bitmap(RES.getRes('first'));
        this.first.x = 450;
        this.first.y = 1055;
        this.first.scaleX = this.first.scaleY = 2;
        this.gameLoad.addChild(this.first);
        this.first.touchEnabled = true;
        this.first.name = 'first';
        this.sentText = new egret.TextField();
        this.sentText.text = '发送';
        this.sentText.size = 40;
        this.sentText.textColor = 0x0000;
        this.sentText.border = true;
        this.sentText.textAlign = egret.HorizontalAlign.CENTER;
        this.sentText.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.sentText.y = 1055;
        this.sentText.x = 530;
        this.sentText.name = 'sent';
        this.gameLoad.addChild(this.sentText);
        this.sentText.touchEnabled = true;
        this.otextShape = new egret.Shape();
        this.otextShape.graphics.beginFill(0xCCCCCC);
        this.otextShape.graphics.drawRect(20, 130, 600, 900);
        this.otextShape.graphics.endFill();
        this.gameLoad.addChild(this.otextShape);
        this.promptText = new egret.TextField();
        this.promptText.text = '点击两边的头像更换发送的对象';
        this.promptText.textColor = 0x0000;
        this.promptText.anchorOffsetX = this.promptText.width / 2;
        this.promptText.x = 320;
        this.promptText.y = 568;
        this.gameLoad.addChild(this.promptText);
        this.scrollSprite = new egret.Sprite();
        this.gameLoad.addChild(this.scrollSprite);
        this.scrollView = new egret.ScrollView();
        this.scrollView.width = 600;
        this.scrollView.height = 900;
        this.scrollView.x = 20;
        this.scrollView.y = 130;
        this.gameLoad.addChild(this.scrollView);
        this.scrollView.setContent(this.scrollSprite);
        this.emojiLoad = new egret.Sprite();
        this.emojiLoad.graphics.lineStyle(1, 0x0000);
        this.emojiLoad.graphics.beginFill(0xffffff, 1);
        this.emojiLoad.graphics.drawRect(0, 0, 450, 280);
        this.emojiLoad.x = 60;
        this.emojiLoad.y = 730;
        this.emojiLoad.graphics.endFill();
        this.gameLoad.addChild(this.emojiLoad);
        this.emojiLoad.visible = false;
        this.promptAvatar = new egret.Bitmap(RES.getRes('shile_jpg'));
        this.promptAvatar.width = this.promptAvatar.height = 75;
        this.promptAvatar.x = (640 - 75) / 2;
        this.promptAvatar.y = 25;
        this.gameLoad.addChild(this.promptAvatar);
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 5; j++) {
                var emoji = new egret.Bitmap(RES.getRes('&_31'));
                emoji.width = emoji.height = 50;
                emoji.x = 5 + i * 55;
                emoji.y = 5 + j * 55;
                this.emojiLoad.addChild(emoji);
                this.emojiArray.push(emoji);
            }
        }
        for (var i = 0; i < this.emojiArray.length; i++) {
            if (i < 39) {
                this.emojiArray[i].touchEnabled = true;
            }
            this.emojiArray[i].texture = RES.getRes('&_' + (i + 10).toString());
            this.emojiArray[i].name = '&_' + (i + 10).toString();
        }
        this.addEventListener(egret.Event.RESIZE, this.onResize, this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.Click, this);
    };
    /**
     * 点击事件
     */
    gameScene.prototype.Click = function (e) {
        if (e.target.name[0] == '&') {
            this.emojiLoad.visible = false;
            this.inputBox.text += e.target.name;
        }
        switch (e.target.name) {
            case 'first':
                if (this.emojiLoad.visible == true) {
                    this.emojiLoad.visible = false;
                }
                else {
                    this.emojiLoad.visible = true;
                }
                break;
            case 'avatar1':
                this.promptAvatar.texture = RES.getRes('point_png');
                this.isLeft = true;
                break;
            case 'avatar2':
                this.promptAvatar.texture = RES.getRes('shile_jpg');
                this.isLeft = false;
                break;
            case 'sent':
                if (this.inputBox.text != '') {
                    //创建头像1的聊天内容
                    var avatarSprite = new egret.Sprite();
                    this.scrollSprite.addChild(avatarSprite);
                    this.spriteArray.push(avatarSprite);
                    //创建头像
                    if (this.isLeft == true) {
                        var avatarImage = new egret.Bitmap(RES.getRes('point_png'));
                        avatarImage.x = 0;
                    }
                    else {
                        var avatarImage = new egret.Bitmap(RES.getRes('shile_jpg'));
                        avatarImage.x = 550;
                    }
                    avatarImage.width = avatarImage.height = 50;
                    avatarSprite.addChild(avatarImage);
                    this.otext = new sentText(this.inputBox.text, this.isLeft);
                    if (this.isLeft == false) {
                        this.otext.x = avatarImage.x - this.otext.width - 10;
                    }
                    else {
                        this.otext.x = 60;
                    }
                    // this.otext.y = -30;
                    avatarSprite.addChild(this.otext);
                    //聊天内容框添加内容
                    this.scrollSprite.removeChildren();
                    for (var i = 0; i < this.spriteArray.length; i++) {
                        this.scrollSprite.addChild(this.spriteArray[i]);
                        if (i == 0) {
                            this.spriteArray[i].y = 30;
                        }
                        else {
                            this.spriteArray[i].y = this.spriteArray[i - 1].y + this.spriteArray[i - 1].height + 20;
                        }
                    }
                }
                if (this.scrollSprite.height > 850) {
                    this.scrollView.scrollTop = this.scrollSprite.height - 850;
                }
                this.inputBox.text = '';
                break;
        }
    };
    /**
     * 重置缩放
     * */
    gameScene.prototype.onResize = function (e) {
        console.log('ss');
        this.stageHeight = egret.MainContext.instance.stage.stageHeight;
        this.gameLoad.scaleX = this.gameLoad.scaleY = this.stageHeight / 1136;
    };
    return gameScene;
}(egret.Sprite));
__reflect(gameScene.prototype, "gameScene");
//# sourceMappingURL=gameScene.js.map