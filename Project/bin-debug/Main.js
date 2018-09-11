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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.result = new egret.Bitmap();
        _this.result2 = new egret.Bitmap();
        _this.result3 = new egret.Bitmap();
        _this.speed = 5;
        /**
         * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
         * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
         */
        _this.fixed = false;
        _this.timeOnEnterFrame = 0;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Main.prototype.onAddToStage = function (event) {
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
            context.onUpdate = function () {
            };
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.createGameScene();
                        return [4 /*yield*/, RES.getResAsync("description_json")];
                    case 2:
                        result = _a.sent();
                        this.startAnimation(result);
                        return [4 /*yield*/, platform.login()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, platform.getUserInfo()];
                    case 4:
                        userInfo = _a.sent();
                        console.log(userInfo);
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        loadingView = new LoadingUI();
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("UI", 0, loadingView)];
                    case 3:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.createGameScene = function () {
        var _this = this;
        var texture = RES.getRes("Mario_png");
        this.result.texture = texture;
        this.result.touchEnabled = true;
        this.result.x = this.stage.stageWidth / 7;
        this.result.y = this.stage.stageHeight / 2;
        this.result.scaleX = 0.5;
        this.result.scaleY = 0.5;
        this.addChild(this.result);
        //this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.Move,this);
        //this.result.addEventListener(egret.Event.ENTER_FRAME,this.Move,this)
        this.result2.texture = texture;
        this.result2.touchEnabled = true;
        this.result2.x = this.stage.stageWidth / 3;
        this.result2.y = this.stage.stageHeight / 2;
        this.result2.scaleX = 0.5;
        this.result2.scaleY = 0.5;
        this.addChild(this.result2);
        this.result2.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            return _this.talk(_this.result2, Math.abs(_this.result.x - (_this.result2.x - _this.result.width / 2)) * _this.speed, "456");
        }, this);
        this.result3.texture = texture;
        this.result3.touchEnabled = true;
        this.result3.x = this.stage.stageWidth * 2 / 3;
        this.result3.y = this.stage.stageHeight / 2;
        this.result3.scaleX = 0.5;
        this.result3.scaleY = 0.5;
        this.addChild(this.result3);
        this.result3.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            return _this.talk(_this.result3, Math.abs(_this.result.x - (_this.result3.x - _this.result.width / 2)) * _this.speed, "123");
        }, this);
    };
    Main.prototype.talk = function (char, time, text) {
        var _this = this;
        var message = new Dialog();
        if (this.fixed == false) {
            this.fixed = true;
            var test = egret.Tween.get(this.result);
            test.to({ x: char.x - this.result.width / 2, y: char.y }, time).call(function () {
                _this.fixed = false;
            }, this).call(function () {
                message.lb_dialog_text.text = text;
                _this.addChild(message);
            }, this);
        }
    };
    Main.prototype.Move = function (evt) {
        /*
         var now = egret.getTimer();
         var time = this.timeOnEnterFrame;
         var pass = now - time;
        this.timeOnEnterFrame = egret.getTimer();
         var tx:number = evt.localX;
         var ty:number = evt.localY;
        //  this.result.x += this.speed*pass;
                // tx = Math.max(0,tx);
                // tx = Math.min(this.stage.stageWidth-this.topMask.width/2,tx);
               this.stage.addEventListener(egret.Event.ENTER_FRAME,()=>{
                if(tx>this.result.x)
                { this.result.x += this.speed*pass;}
                else if(tx<this.result.x)
                { this.result.x -= this.speed*pass;}
               },this);
 
 
              if(Math.abs(tx-this.result.x)<10){
                   this.stage.removeEventListener(egret.Event.ENTER_FRAME,()=>{
                if(tx>this.result.x)
                { this.result.x += this.speed*pass;}
                else if(tx<this.result.x)
                { this.result.x -= this.speed*pass;}
               },this)
               this.result.x = tx;
               }
                    */
        // this.result.y = ty;
    };
    Main.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    Main.prototype.startAnimation = function (result) {
        var _this = this;
        var parser = new egret.HtmlTextParser();
        var textflowArr = result.map(function (text) { return parser.parse(text); });
        var textfield = this.textfield;
        var count = -1;
        var change = function () {
            count++;
            if (count >= textflowArr.length) {
                count = 0;
            }
            var textFlow = textflowArr[count];
            // 切换描述内容
            // Switch to described content
            textfield.textFlow = textFlow;
            var tw = egret.Tween.get(textfield);
            tw.to({ "alpha": 1 }, 200);
            tw.wait(2000);
            tw.to({ "alpha": 0 }, 200);
            tw.call(change, _this);
        };
        change();
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
