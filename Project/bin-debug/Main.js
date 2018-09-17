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
        /**
         * 创建游戏场景
         * Create a game scene
         */
        _this.bg = new egret.Bitmap();
        _this.char2 = new egret.Sprite();
        _this.char3 = new egret.Sprite();
        _this.char4 = new egret.Sprite();
        _this.char = new egret.Sprite();
        /*
        private char2:egret.Bitmap = new egret.Bitmap();
        private char3:egret.Bitmap = new egret.Bitmap();
        private char4:egret.Bitmap = new egret.Bitmap();
        */
        _this.message = new Dialog();
        _this.time = 5;
        _this.stage1 = true;
        _this.stage2 = false;
        _this.fixed = false;
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
            var userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.createGameScene();
                        //   const result = await RES.getResAsync("description_json")
                        //   this.startAnimation(result);
                        return [4 /*yield*/, platform.login()];
                    case 2:
                        //   const result = await RES.getResAsync("description_json")
                        //   this.startAnimation(result);
                        _a.sent();
                        return [4 /*yield*/, platform.getUserInfo()];
                    case 3:
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
    Main.prototype.position = function (target, x, y, anchorX, anchorY, scaleX, scaleY) {
        target.x = x;
        target.y = y;
        target.scaleX = scaleX;
        target.scaleY = scaleY;
        target.anchorOffsetX = anchorX;
        target.anchorOffsetY = anchorY;
    };
    Main.prototype.animation = function (factory, Spine, animation, target) {
        var Armature = factory.buildArmature(Spine);
        var dispWorrior = Armature.getDisplay();
        Armature.animation.gotoAndPlay(animation);
        dragonBones.WorldClock.clock.add(Armature);
        target.addChild(dispWorrior);
        this.addChild(target);
        return Armature;
    };
    Main.prototype.createGameScene = function () {
        var _this = this;
        this.createBitmapByName(this.bg, "bg_jpg", 0, this.stage.stageHeight / 2, 0.5, 0.3);
        /*
               this.createBitmapByName(this.char2,"Mario_png",this.stage.stageWidth*2/4,this.stage.stageHeight*3/8,0.3,0.3);
               this.createBitmapByName(this.char3,"Mario_png",this.stage.stageWidth*3/4,this.stage.stageHeight*3/8,0.3,0.3);
               this.createBitmapByName(this.char4,"Mario_png",this.stage.stageWidth*2/4,this.stage.stageHeight*9/16,0.3,0.3);
               this.createBitmapByName(this.char,"Mario_png",this.stage.stageWidth /4,this.stage.stageHeight*3/8,0.3,0.3);
       */
        var factory = new dragonBones.EgretFactory();
        this.createDragonbones(factory, "Cat");
        var cat = this.animation(factory, "Cat", "Idle", this.char);
        this.animation(factory, "Char1", "Idle", this.char2);
        this.animation(factory, "Char2", "Idle", this.char3);
        this.animation(factory, "Char3", "Idle", this.char4);
        //this.animation(factory,"Cat","Idle",this.char).animation.gotoAndPlay("Run");
        /*
                var char1:dragonBones.Armature = factory.buildArmature( "Cat" );
                var dispWorrior = char1.getDisplay();
                dragonBones.WorldClock.clock.add(char1);
                char1.animation.gotoAndPlay("Idle");
                this.char.addChild(dispWorrior);
                this.addChild(this.char);
        */
        this.char.x = this.stage.stageWidth / 4;
        this.char.y = this.stage.stageHeight * 3 / 8;
        this.char.scaleX = -2;
        this.char.scaleY = 2;
        this.char.anchorOffsetX = this.char.width / 2 - 60;
        this.char.anchorOffsetY = this.char.height / 2 - 45;
        this.position(this.char2, this.stage.stageWidth * 2 / 4, this.stage.stageHeight * 3 / 8, this.char.width / 2, this.char.height / 2 - 25, 2, 2);
        this.position(this.char3, this.stage.stageWidth * 5 / 8, this.stage.stageHeight * 3 / 8, this.char.width / 2, this.char.height / 2 - 15, 2.2, 2.2);
        this.position(this.char4, this.stage.stageWidth * 2 / 4, this.stage.stageHeight * 9 / 16, this.char.width / 2, this.char.height / 2 - 25, 2.5, 2.5);
        this.addChild(this.message);
        this.removeChild(this.message);
        this.addEventListener(egret.Event.ENTER_FRAME, function () {
            dragonBones.WorldClock.clock.advanceTime(0.05);
        }, this);
        this.char2.touchEnabled = true;
        this.char3.touchEnabled = true;
        this.char4.touchEnabled = true;
        this.char2.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            //
            if (_this.fixed == false) {
                _this.fixed = true;
                cat.animation.gotoAndPlay("Run");
                if (_this.stage1 == true) {
                    _this.talk(_this.char2, Math.abs(_this.char.x - (_this.char2.x - _this.char.width / 2)) * _this.time, "角色2").call(function () {
                        cat.animation.gotoAndPlay("Idle");
                    }, _this);
                }
                else if (_this.stage2 == true) {
                    egret.Tween.get(_this.char)
                        .to({ x: _this.stage.stageWidth / 4, y: _this.stage.stageHeight * 4 / 8 }, Math.abs(_this.char.x - _this.stage.stageWidth * 5 / 8) * _this.time)
                        .to({ x: _this.stage.stageWidth * 3 / 8, y: _this.stage.stageHeight * 3 / 8 }, _this.time * 150)
                        .call(function () {
                        _this.talk(_this.char2, Math.abs(_this.char.x - (_this.char2.x - _this.char.width / 2)) * _this.time, "角色2").call(function () {
                            cat.animation.gotoAndPlay("Idle");
                        }, _this);
                        _this.stage1 = true;
                        _this.stage2 = false;
                    }, _this);
                }
                //
            }
        }, this);
        this.char3.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            //
            if (_this.fixed == false) {
                _this.fixed = true;
                cat.animation.gotoAndPlay("Run");
                if (_this.stage1 == true) {
                    _this.talk(_this.char3, Math.abs(_this.char.x - (_this.char3.x - _this.char.width / 2)) * _this.time, "角色3").call(function () {
                        cat.animation.gotoAndPlay("Idle");
                    }, _this);
                }
                else if (_this.stage2 == true) {
                    egret.Tween.get(_this.char)
                        .to({ x: _this.stage.stageWidth / 4, y: _this.stage.stageHeight * 4 / 8 }, Math.abs(_this.char.x - _this.stage.stageWidth * 5 / 8) * _this.time)
                        .to({ x: _this.stage.stageWidth * 3 / 8, y: _this.stage.stageHeight * 3 / 8 }, _this.time * 150)
                        .call(function () {
                        _this.talk(_this.char3, Math.abs(_this.char.x - (_this.char3.x - _this.char.width / 2)) * _this.time, "角色3").call(function () {
                            cat.animation.gotoAndPlay("Idle");
                        }, _this);
                        _this.stage1 = true;
                        _this.stage2 = false;
                    }, _this);
                }
                //
            }
        }, this);
        this.char4.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            //
            if (_this.fixed == false) {
                cat.animation.gotoAndPlay("Run");
                _this.fixed = true;
                if (_this.stage1 == true) {
                    egret.Tween.get(_this.char)
                        .to({ x: _this.stage.stageWidth * 3 / 8 }, Math.abs(_this.char.x - _this.stage.stageWidth * 3 / 8) * _this.time)
                        .to({ x: _this.stage.stageWidth / 4, y: _this.stage.stageHeight * 4 / 8 }, _this.time * 150)
                        .call(function () {
                        _this.talk(_this.char4, Math.abs(_this.char.x - (_this.char4.x - _this.char.width / 2)) * _this.time, "角色4").call(function () {
                            cat.animation.gotoAndPlay("Idle");
                        }, _this);
                        _this.stage1 = false;
                        _this.stage2 = true;
                    }, _this);
                }
                else if (_this.stage2 == true) {
                    _this.fixed = true;
                    _this.talk(_this.char4, Math.abs(_this.char.x - (_this.char4.x - _this.char.width / 2)) * _this.time, "角色4").call(function () {
                        cat.animation.gotoAndPlay("Idle");
                    }, _this);
                }
                //
            }
        }, this);
    };
    Main.prototype.talk = function (target, time, text) {
        var _this = this;
        var test = egret.Tween.get(this.char);
        test.to({ x: target.x - this.char.width / 2, y: target.y }, time).call(function () {
            _this.message.lb_dialog_text.text = text;
            _this.addChild(_this.message);
            _this.fixed = false;
        }, this);
        return test;
    };
    Main.prototype.createDragonbones = function (factory, directory) {
        var skeletonData = RES.getRes(directory + "_ske_json");
        var textureData = RES.getRes(directory + "_tex_json");
        var texture = RES.getRes(directory + "_tex_png");
        factory.addSkeletonData(dragonBones.DataParser.parseDragonBonesData(skeletonData));
        factory.addTextureAtlas(new dragonBones.EgretTextureAtlas(texture, textureData));
    };
    Main.prototype.createBitmapByName = function (result, name, x, y, scalex, scaley) {
        var texture = RES.getRes(name);
        result.texture = texture;
        result.scaleX = scalex;
        result.scaleY = scaley;
        result.anchorOffsetX = result.width / 2;
        result.anchorOffsetY = result.height / 2;
        result.x = x;
        result.y = y;
        this.addChild(result);
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
//# sourceMappingURL=Main.js.map