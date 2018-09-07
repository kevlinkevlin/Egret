/**
 * @copyright www.egret.com
 * @author A闪
 * @desc 机器人骨骼示例
 *      鼠标左右滑动，控制机器人前进后退
 *      鼠标上滑，机器人处于漂浮状态
 *      鼠标下滑，机器人处于蹲下状态
 *      点击鼠标，可查看机器人所有拥有状态
 *      机器人骨骼示例
 *      鼠标左右滑动，控制机器人前进后退
 *      鼠标上滑，机器人处于漂浮状态
 *      鼠标下滑，机器人处于蹲下状态
 *      点击鼠标，可查看机器人所有拥有状态
 */
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
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        /**骨骼动画实例移动的步长值**/
        _this.entityFlagNumX = 0;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Main.prototype.onAddToStage = function (event) {
        //初始化Resource资源加载库
        //initiate Resource loading library
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/resource.json", "resource/");
    };
    /**
     * 配置文件加载完成,开始预加载preload资源组。
     * configuration file loading is completed, start to pre-load the preload resource group
     */
    Main.prototype.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.loadGroup("TestArmature");
    };
    /**
     * preload资源组加载完成
     * Preload resource group is loaded
     */
    Main.prototype.onResourceLoadComplete = function (event) {
        if (event.groupName == "TestArmature") {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            this.createGameScene();
        }
    };
    /**
    * 资源组加载出错
     *  The resource group loading failed
    */
    Main.prototype.onResourceLoadError = function (event) {
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //Ignore the loading failed projects
        this.onResourceLoadComplete(event);
    };
    /**
     * 创建游戏场景
     * Create a game scene
     */
    Main.prototype.createGameScene = function () {
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouch, this);
        this.createMotorcycleExp();
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    Main.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    /**创建骨骼模型**/
    Main.prototype.createMotorcycleExp = function () {
        //  this.actionArray = ["stop","run","run2","squat","oneLegStand","oneLegStand2","float","pushUp"]
        this.actionArray = ["0", "1", "2", "3", "Idle"];
        this.container = new egret.DisplayObjectContainer();
        this.addChild(this.container);
        this.container.x = 350;
        this.container.y = 1000;
        this.container.scaleX = 2;
        this.container.scaleY = 2;
        this.drawText();
        //读取一个骨骼数据,并创建实例显示到舞台
        //var skeletonData = RES.getRes("skeleton_json");
        // var textureData = RES.getRes("skeleton_tex_json");
        //var texture = RES.getRes("skeleton_tex_png");
        var skeletonData = RES.getRes("FirstProject_ske_json");
        var textureData = RES.getRes("FirstProject_tex_json");
        var texture = RES.getRes("FirstProject_tex_png");
        var factory = new dragonBones.EgretFactory();
        factory.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(skeletonData));
        factory.addTextureAtlasData(factory.parseTextureAtlasData(textureData, texture));
        this.armature = factory.buildArmature("Game");
        this.armatureDisplay = this.armature.getDisplay();
        dragonBones.WorldClock.clock.add(this.armature);
        this.container.addChild(this.armatureDisplay);
        this.armatureDisplay.x = 0;
        this.armatureDisplay.y = 0;
        this.actionFlag = 0;
        //启动骨骼动画播放
        this.armature.animation.gotoAndPlay(this.actionArray[this.actionFlag], 0, -1, 1);
        egret.startTick(this.onTicker, this);
        this.myTimer = new egret.Timer(10);
        this.myTimer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
    };
    Main.prototype.onTicker = function (timeStamp) {
        if (!this._time) {
            this._time = timeStamp;
        }
        var now = timeStamp;
        var pass = now - this._time;
        this._time = now;
        dragonBones.WorldClock.clock.advanceTime(pass / 1000);
        return false;
    };
    Main.prototype.onTouch = function (evt) {
        evt.stopPropagation();
        switch (evt.type) {
            case egret.TouchEvent.TOUCH_BEGIN:
                this.tapFlagNum = 0;
                this.moveFlag = false;
                this.beginPointX = evt.stageX;
                this.beginPointY = evt.stageY;
                this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
                //Touch事件启动后开始计时，移动开关是关闭状态
                if (!this.myTimer.running) {
                    this.myTimer.start();
                }
                break;
            case egret.TouchEvent.TOUCH_END:
                if (this.stage.hasEventListener(egret.TouchEvent.TOUCH_END)) {
                    this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouch, this);
                }
                this.endPointX = evt.stageX;
                this.endPointY = evt.stageY;
                //根据事件的偏移数据，确定用户的是上下滑动还是左右滑动
                var flag = Math.abs(this.endPointX - this.beginPointX) > Math.abs(this.endPointY - this.beginPointY) ? true : false;
                if (flag) {
                    //根据Touch事件偏移数据，确定为左右滑动
                    //打开移动开关
                    this.moveFlag = true;
                    //限制Touch落点的边界为240-560之间
                    if (this.endPointX < 240) {
                        this.endPointX = 240;
                    }
                    if (this.endPointX > 560) {
                        this.endPointX = 560;
                    }
                    //根据Touch落点的位置和骨骼现有位置确定人物是否运动以及运动方向
                    if ((this.container.x - this.endPointX) > 4) {
                        this.entityFlagNumX = -2;
                        //  this.container.scaleX = 1;
                    }
                    if ((this.container.x - this.endPointX) < -4) {
                        this.entityFlagNumX = 2;
                        // this.container.scaleX = -1;
                    }
                    if (this.armature.animation.lastAnimationName != "0") {
                        this.armature.animation.gotoAndPlay("0", 0, -1, 1);
                    }
                    //TOUCH_END事件结束后，开始启动移动计时
                    if (!this.myTimer.running) {
                        this.myTimer.start();
                    }
                }
                else {
                    //根据Touch事件上下差值，确定人物执行动作
                    if (this.endPointY - this.beginPointY > 0) {
                        if (this.armature.animation.lastAnimationName != "1") {
                            this.armature.animation.gotoAndPlay("1", 0, -1, 1);
                        }
                    }
                    else {
                        if (this.armature.animation.lastAnimationName != "2") {
                            this.armature.animation.gotoAndPlay("2", 0, -1, 1);
                        }
                    }
                }
                break;
            case egret.TouchEvent.TOUCH_TAP:
                //事件为TOUCH_TAP事件，切换角色的动作
                this.myTimer.stop();
                this.moveFlag = false;
                this.tapFlagNum = 0;
                this.actionFlag++;
                if (this.actionFlag == this.actionArray.length) {
                    this.actionFlag = 0;
                }
                ;
                this.armature.animation.gotoAndPlay(this.actionArray[this.actionFlag], 0, -1, 1);
                break;
            default:
                break;
        }
    };
    Main.prototype.onTimer = function (evt) {
        if (this.moveFlag) {
            //TOUCH_END事件后，移动开关打开，人物开始移动，到达指定位置后，关闭移动
            if (Math.abs(this.container.x - this.endPointX) < 4) {
                this.entityFlagNumX = 0;
            }
            this.container.x += this.entityFlagNumX;
            if (Math.abs(this.container.x - this.endPointX) < 4) {
                if (this.armature.animation.lastAnimationName != "3") {
                    this.armature.animation.gotoAndPlay("3", 0, -1, 1);
                }
                this.myTimer.stop();
                this.moveFlag = false;
            }
            ;
        }
        else {
            //Touch事件启动后开始计时，移动开关关闭时，超过90毫秒，移除TOUCH_TAP事件，添加TOUCH_END事件
            this.tapFlagNum++;
            if (this.tapFlagNum > 9) {
                if (this.stage.hasEventListener(egret.TouchEvent.TOUCH_TAP)) {
                    this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
                }
                ;
                if (!this.stage.hasEventListener(egret.TouchEvent.TOUCH_END)) {
                    this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouch, this);
                }
                ;
                this.myTimer.stop();
                this.tapFlagNum = 0;
            }
        }
    };
    Main.prototype.drawText = function () {
        /// 提示信息
        this._txInfo = new egret.TextField;
        this.addChild(this._txInfo);
        this._txInfo.size = 80;
        this._txInfo.x = 50;
        this._txInfo.y = 50;
        this._txInfo.textAlign = egret.HorizontalAlign.LEFT;
        this._txInfo.textColor = 0x000000;
        this._txInfo.type = egret.TextFieldType.DYNAMIC;
        this._txInfo.lineSpacing = 6;
        this._txInfo.multiline = true;
        this._txInfo.text =
            "點擊切換動畫";
        this._bgInfo = new egret.Shape;
        this.addChildAt(this._bgInfo, this.numChildren - 1);
        this._bgInfo.x = this._txInfo.x;
        this._bgInfo.y = this._txInfo.y;
        this._bgInfo.graphics.clear();
        this._bgInfo.graphics.beginFill(0xffffff, .5);
        this._bgInfo.graphics.drawRect(0, 0, this._txInfo.width, this._txInfo.height);
        this._bgInfo.graphics.endFill();
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map