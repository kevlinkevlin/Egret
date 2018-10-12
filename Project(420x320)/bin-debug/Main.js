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
        //繼承DisplayObjectContainer
        /*
            public constructor() {
                super();
                this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
                
            }
        
            private onAddToStage(event: egret.Event) {
        
                egret.lifecycle.addLifecycleListener((context) => {
                    // custom lifecycle plugin
        
                    context.onUpdate = () => {
        
                    }
                })
        
                egret.lifecycle.onPause = () => {
                    egret.ticker.pause();
                }
        
                egret.lifecycle.onResume = () => {
                    egret.ticker.resume();
                }
        
                let assetAdapter = new AssetAdapter();
                egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
                egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
                
                     
                this.runGame().catch(e => {
                    console.log(e);
                })
        
        
        
            }
            */
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bg = new egret.Bitmap();
        /*
        private char2:egret.Bitmap = new egret.Bitmap();
        private char3:egret.Bitmap = new egret.Bitmap();
        private char4:egret.Bitmap = new egret.Bitmap();
        */
        // private game:GameScene = new GameScene();
        _this.message = new Dialog();
        _this.time = 10;
        _this.stage1 = true;
        _this.stage2 = false;
        _this.fixed = false;
        _this.char2_b = false;
        _this.char3_b = false;
        _this.char4_b = false;
        _this.char5_b = false;
        _this.arrow_2 = new egret.Sprite();
        _this.arrow_3 = new egret.Sprite();
        _this.arrow_4 = new egret.Sprite();
        _this.arrow_5 = new egret.Sprite();
        return _this;
    }
    //繼承UIlayer
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        RES.setMaxLoadingThread(1); ////////////避免多線程載入時卡住
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        //inject the custom material parser
        //注入自定義素材解析器
        egret.registerImplementation("eui.IAssetAdapter", new AssetAdapter());
        // egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);
        //RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        //RES.loadConfig("resource/default.res.json", "resource/");
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    //
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.createGameScene();
                        return [4 /*yield*/, platform.login()];
                    case 2:
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
    Main.prototype.onResourceProgress = function (event) {
        this.loadingView.onProgress(event.itemsLoaded, event.itemsTotal);
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("UI")];
                    case 3:
                        _a.sent();
                        RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
                        this.stage.removeChild(this.loadingView);
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
    //
    Main.prototype.createGameScene = function () {
        var _this = this;
        this.createBitmapByName(this.bg, "bg_png", 0, 0, 0.52, 0.51);
        /*
                this.createBitmapByName(this.char2,"Mario_png",this.stage.stageWidth*2/4,this.stage.stageHeight*3/8,0.3,0.3);
                this.createBitmapByName(this.char3,"Mario_png",this.stage.stageWidth*3/4,this.stage.stageHeight*3/8,0.3,0.3);
                this.createBitmapByName(this.char4,"Mario_png",this.stage.stageWidth*2/4,this.stage.stageHeight*9/16,0.3,0.3);
                this.createBitmapByName(this.char,"Mario_png",this.stage.stageWidth /4,this.stage.stageHeight*3/8,0.3,0.3);
        */
        var mcFactory = new egret.MovieClipDataFactory;
        var data = RES.getRes("test_json");
        var txtr = RES.getRes("test_png");
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        /*
                var factory = new dragonBones.EgretFactory();
                this.createDragonbones( factory, "star_char_backup" );
                this.animation(factory,"char2","Idle",this.char2);
                this.animation(factory,"char3","Idle",this.char3);
                this.animation(factory,"char4","Idle",this.char4);
                this.animation(factory,"char5","Idle",this.char5);
        */
        /*
                var cat = this.animation(factory,"char","Idle",this.char);   //賦予參數以便調整動畫
                this.animation(factory,"Cat","Idle",this.char).animation.gotoAndPlay("Run");
                var char1:dragonBones.Armature = factory.buildArmature( "Cat" );
                var dispWorrior = char1.getDisplay();
                dragonBones.WorldClock.clock.add(char1);
                char1.animation.gotoAndPlay("Idle");
                this.char.addChild(dispWorrior);
                this.addChild(this.char);
        */
        this.char = new egret.MovieClip(mcFactory.generateMovieClipData("char"));
        this.char2 = new egret.MovieClip(mcFactory.generateMovieClipData("char2"));
        this.char3 = new egret.MovieClip(mcFactory.generateMovieClipData("char3"));
        this.char4 = new egret.MovieClip(mcFactory.generateMovieClipData("char5"));
        this.char5 = new egret.MovieClip(mcFactory.generateMovieClipData("char4"));
        var factory = new dragonBones.EgretFactory();
        this.createDragonbones(factory, "arrowanimation");
        this.animation(factory, "arrow", "Idle", this.arrow_2);
        this.animation(factory, "arrow", "Idle", this.arrow_3);
        this.animation(factory, "arrow", "Idle", this.arrow_4);
        this.animation(factory, "arrow", "Idle", this.arrow_5);
        this.addChild(this.char2);
        this.addChild(this.char3);
        this.addChild(this.char4);
        this.addChild(this.char5);
        this.addChild(this.char);
        this.char.gotoAndPlay("Idle", -1);
        this.char2.gotoAndPlay("Idle", -1);
        this.char3.gotoAndPlay("Idle", -1);
        this.char4.gotoAndPlay("Idle", -1);
        this.char5.gotoAndPlay("Idle", -1);
        this.position(this.char, this.stage.stageWidth / 8, this.stage.stageHeight * 3 / 8, 0, this.char.height / 2 + 10, 0.3, 0.3);
        this.position(this.char2, this.stage.stageWidth / 2, this.stage.stageHeight * 3 / 8, this.char2.width / 2, this.char2.height / 2 + 30, 0.3, 0.3);
        this.position(this.char3, this.stage.stageWidth * 6 / 8, this.stage.stageHeight * 3 / 8, this.char3.width / 2, this.char3.height / 2 + 30, 0.3, 0.3);
        this.position(this.char4, this.stage.stageWidth * 7 / 8, this.stage.stageHeight * 2 / 3 + 20, this.char4.width / 2, this.char4.height / 2 + 20, 0.21, 0.21);
        this.position(this.char5, this.stage.stageWidth * 2 / 5, this.stage.stageHeight * 2 / 3 + 20, this.char5.width / 2, this.char5.height / 2 + 10, 0.3, 0.3);
        this.position(this.arrow_2, this.stage.stageWidth / 2, this.stage.stageHeight * 3 / 8, this.arrow_2.width, this.char2.height / 2, 1, 1);
        this.position(this.arrow_3, this.stage.stageWidth * 6 / 8, this.stage.stageHeight * 3 / 8, this.arrow_3.width - 10, this.char2.height / 2, 1, 1);
        this.position(this.arrow_4, this.stage.stageWidth * 7 / 8, this.stage.stageHeight * 2 / 3 + 20, this.arrow_4.width - 8, this.char2.height / 2, 1, 1);
        this.position(this.arrow_5, this.stage.stageWidth * 2 / 5, this.stage.stageHeight * 2 / 3 + 20, this.arrow_5.width - 15, this.char2.height / 2, 1, 1);
        this.addEventListener(egret.Event.ENTER_FRAME, function () {
            dragonBones.WorldClock.clock.advanceTime(0.05);
        }, this);
        this.char2.touchEnabled = true;
        this.char3.touchEnabled = true;
        this.char4.touchEnabled = true;
        this.char5.touchEnabled = true;
        this.message.char_name.text = "";
        this.message.dialog_name.visible = false;
        this.message.lb_dialog_text.text = "軌跡15周年！參與遊擊士報名的新人們，趕緊在飛行船上認識新夥伴！";
        this.message.name_test = ["新人遊擊士庫洛艾"];
        this.message.dia_test = ["…好緊張呀，前面綁著雙馬尾的姐姐，好像是軌跡系列最有人氣的艾絲蒂雅小姐呢！"];
        this.message.ready_btn.visible = false;
        this.addChild(this.message);
        /*
        
                let theme = new eui.Theme("resource/default.thm.json", this.stage);
                theme.addEventListener(eui.UIEvent.COMPLETE, this.onThemeLoadComplete, this);
        
        */
        this.char2.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            //      
            if (_this.fixed == false) {
                _this.fixed = true;
                if (_this.char2_b == false) {
                    _this.message.name_test = ["艾絲蒂爾", "庫洛艾", "艾絲蒂爾"];
                    _this.message.dia_test = ["咦，妳是新來的遊擊士嗎？看起來呆萌呆萌的，趕緊和大夥們匯合呀",
                        "是..！這艘飛空艇上好像有各代軌跡系列的人氣角色都在呢！",
                        "那當然囉，超過70位超人氣軌跡系列角色外，還能和過往的Boss成為夥伴呢~~新的軌跡，你看的見！"];
                    _this.message.gameover = true;
                    _this.message.gameover_name = "艾絲蒂爾";
                    _this.message.gameover_dia = "會拿到什麼呢~~~~~";
                    _this.message.gameover_name2 = "艾絲蒂爾";
                    _this.message.gameover_dia2 = "看起來很適合你呢~~再去找其他人聊聊吧!";
                }
                else {
                    if (_this.message.completed == false) {
                        _this.message.name_test = ["艾絲蒂爾"];
                        _this.message.dia_test = ["去找其他人聊聊吧~"];
                    }
                    else {
                        console.log(_this.message.completed);
                        _this.message.name_test = ["艾絲蒂爾"];
                        _this.message.dia_test = ["今天天氣真的不錯呢~"];
                    }
                }
                _this.message.char_name.text = _this.message.name_test.shift();
                _this.message.lb_dialog_text.text = _this.message.dia_test.shift();
                _this.char.gotoAndPlay("Walk", -1);
                if (_this.stage1 == true) {
                    if (_this.char.x > _this.char2.x) {
                        _this.char.scaleX = -0.3;
                    }
                    _this.talk(_this.char2, Math.abs(_this.char.x - (_this.char2.x - 50)) * _this.time, _this.char2_b, 1).call(function () {
                        _this.char.scaleX = 0.3;
                        _this.char.gotoAndPlay("Idle", -1);
                    }, _this);
                }
                else if (_this.stage2 == true) {
                    var test = egret.Tween.get(_this.char);
                    if (_this.char.x >= _this.char5.x) {
                        _this.char.scaleX = -0.3;
                    }
                    test.to({ x: _this.stage.stageWidth / 2 + 20 }, _this.time * 100).call(function () { _this.char.scaleX = 0.3; }, _this)
                        .to({ y: _this.stage.stageHeight / 2 + 25 }, _this.time * 80)
                        .to({ x: _this.stage.stageWidth * 2 / 3 + 5 }, _this.time * 50)
                        .to({ x: _this.stage.stageWidth * 7 / 8 + 20, y: _this.stage.stageHeight * 3 / 8 }, _this.time * 100)
                        .call(function () {
                        _this.char.scaleX = -0.3;
                        _this.talk(_this.char2, Math.abs(_this.char.x - (_this.char2.x - 50)) * _this.time, _this.char2_b, 1).call(function () {
                            _this.char.scaleX = 0.3;
                            _this.char.gotoAndPlay("Idle", -1);
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
                if (_this.char3_b == false) {
                    _this.message.name_test = ["庫洛艾", "黎恩"];
                    _this.message.dia_test = ["啊！你不是今年《閃之軌跡》IV的男主角黎恩嗎！能和你一起冒險嗎？",
                        "欸…這個嘛。(打量一下)這當然事沒問題的囉。不過呀，你得先學會RSLG的戰鬥方式，像是戰鬥時施放技能和使用道具上都要注意到回合，並與大家配合呢！"];
                    _this.message.gameover = true;
                    _this.message.gameover_name = "黎恩";
                    _this.message.gameover_dia = "看你這個氣勢一定能拿到好東西!";
                    _this.message.gameover_name2 = "黎恩";
                    _this.message.gameover_dia2 = "再多找其他人聊聊吧~~~說不定會有收穫";
                }
                else {
                    if (_this.message.completed == false) {
                        _this.message.name_test = ["黎恩"];
                        _this.message.dia_test = ["去找其他人聊聊吧~"];
                    }
                    else {
                        _this.message.name_test = ["黎恩", "庫洛艾"];
                        _this.message.dia_test = ["據說用你家主子的貓掌抽獎中獎率會翻倍喔！",
                            "(恩........會被咬吧(`・ω・´)....)"];
                    }
                }
                _this.message.char_name.text = _this.message.name_test.shift();
                _this.message.lb_dialog_text.text = _this.message.dia_test.shift();
                _this.char.gotoAndPlay("Walk", -1);
                if (_this.stage1 == true) {
                    _this.talk(_this.char3, Math.abs(_this.char.x - (_this.char3.x - 50)) * _this.time, _this.char3_b, 5).call(function () {
                        _this.char.gotoAndPlay("Idle", -1);
                    }, _this);
                }
                else if (_this.stage2 == true) {
                    var test = egret.Tween.get(_this.char);
                    if (_this.char.x >= _this.char5.x) {
                        _this.char.scaleX = -0.3;
                    }
                    test.to({ x: _this.stage.stageWidth / 2 + 20 }, _this.time * 100).call(function () { _this.char.scaleX = 0.3; }, _this)
                        .to({ y: _this.stage.stageHeight / 2 + 25 }, _this.time * 80)
                        .to({ x: _this.stage.stageWidth * 2 / 3 + 5 }, _this.time * 50)
                        .to({ x: _this.stage.stageWidth * 7 / 8 + 20, y: _this.stage.stageHeight * 3 / 8 }, _this.time * 100)
                        .call(function () {
                        _this.char.scaleX = -0.3;
                        _this.talk(_this.char3, Math.abs(_this.char.x - (_this.char3.x - 50)) * _this.time, _this.char3_b, 5).call(function () {
                            _this.char.scaleX = 0.3;
                            _this.char.gotoAndPlay("Idle", -1);
                        }, _this);
                        _this.stage1 = true;
                        _this.stage2 = false;
                    }, _this);
                }
                //
            }
        }, this);
        this.char4.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            {
                //      
                if (_this.fixed == false) {
                    _this.fixed = true;
                    if (_this.char4_b == false) {
                        _this.message.name_test = ["庫洛艾"];
                        _this.message.dia_test = ["還有些很熟悉的人呢，先去看看吧！"];
                        _this.message.char_name.text = _this.message.name_test.shift();
                        _this.message.lb_dialog_text.text = _this.message.dia_test.shift();
                    }
                    else {
                        if (_this.message.completed == false) {
                            _this.message.diamond = true;
                            _this.message.completed = true; //////遊戲結束
                            _this.message.gameover = true;
                            _this.message.name_test = ["庫洛艾", "咪西"];
                            _this.message.dia_test = ["嗨嗨~~小貓咪~~~~~！",
                                "喵～被發現啦，我、我、我可不是喵呢，我是FB粉絲團的小編哦！這樣～厲害吧，但千萬不要告訴別人我也上飛空艇了！"];
                            _this.message.gameover_name = "咪西";
                            _this.message.gameover_dia = "會抽到什麼呢~~~~~~~";
                            _this.message.gameover_name2 = "咪西";
                            _this.message.gameover_dia2 = "可...可惡...竟然被你抽到我的薪資袋了Q_Q";
                            _this.message.char_name.text = _this.message.name_test.shift();
                            _this.message.lb_dialog_text.text = _this.message.dia_test.shift();
                            _this.message.char4_target = true;
                        }
                        else {
                            _this.message.name_test = ["咪西"];
                            _this.message.dia_test = ["我的薪資袋Q_Q........."];
                            _this.message.char_name.text = _this.message.name_test.shift();
                            _this.message.lb_dialog_text.text = _this.message.dia_test.shift();
                        }
                    }
                    _this.char.gotoAndPlay("Walk", -1);
                    if (_this.stage1 == true) {
                        var test = egret.Tween.get(_this.char);
                        if (_this.char.x <= _this.char2.x && _this.char.x >= _this.char2.x - 60) {
                            test.to({ x: _this.stage.stageWidth * 7 / 8 + 20 }, _this.time * 200);
                        }
                        else if (_this.char.x < _this.char2.x - 60) {
                            test.to({ x: _this.stage.stageWidth * 7 / 8 + 20 }, _this.time * 300);
                        }
                        else {
                            test.to({ x: _this.stage.stageWidth * 7 / 8 + 20 }, _this.time * 150);
                        }
                        test.call(function () { _this.char.scaleX = -0.3; }, _this)
                            .to({ x: _this.stage.stageWidth * 2 / 3 + 5, y: _this.stage.stageHeight / 2 + 25 }, _this.time * 200)
                            .to({ x: _this.stage.stageWidth / 2 + 20 }, _this.time * 100).call(function () { _this.char.scaleX = 0.3; }, _this)
                            .to({ y: _this.stage.stageHeight * 2 / 3 + 20 }, _this.time * 80)
                            .call(function () {
                            _this.talk(_this.char4, Math.abs(_this.char.x - (_this.char4.x - 50)) * _this.time, _this.char4_b, 4).call(function () {
                                _this.char.gotoAndPlay("Idle", -1);
                            }, _this);
                            _this.stage1 = false;
                            _this.stage2 = true;
                        }, _this);
                    }
                    else if (_this.stage2 == true) {
                        _this.fixed = true;
                        if (_this.char.x <= _this.char5.x) {
                            egret.Tween.get(_this.char)
                                .call(function () {
                                _this.talk(_this.char4, Math.abs(_this.char.x - (_this.char4.x - 50)) * _this.time, _this.char4_b, 4).call(function () {
                                    _this.char.gotoAndPlay("Idle", -1);
                                }, _this);
                            }, _this);
                        }
                        else {
                            _this.talk(_this.char4, Math.abs(_this.char.x - (_this.char4.x - 50)) * _this.time, _this.char4_b, 4).call(function () {
                                _this.char.gotoAndPlay("Idle", -1);
                            }, _this);
                        }
                    }
                } //end
                //
            }
        }, this);
        this.char5.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            //      
            if (_this.fixed == false) {
                if (_this.char5_b == false) {
                    _this.message.name_test = ["庫洛艾", "艾莉"];
                    _this.message.dia_test = ["這位姐姐您好呀！請問這裡…是哪裡呀？",
                        "這裡可是非常重要的地方呢。想要在塞姆利亞大陸上自由行走，都靠我們搭乘的飛空艇唷！另外妳看看妳手上的導力器，它可是一切能量的來源呢！"];
                    _this.message.gameover = true;
                    _this.message.gameover_name = "艾莉";
                    _this.message.gameover_dia = "你今天的運勢看起來不錯呢加油!";
                    _this.message.gameover_name2 = "艾莉";
                    _this.message.gameover_dia2 = "哈哈...是個不錯的開始呢！再去找找其他人吧";
                }
                else {
                    if (_this.message.completed == false) {
                        _this.message.name_test = ["艾莉"];
                        _this.message.dia_test = ["快去找其他人聊聊吧~"];
                    }
                    else {
                        _this.message.name_test = ["艾莉", "庫洛艾"];
                        _this.message.dia_test = ["恭喜你抽到大獎!", "謝謝妳啦~~~~~~ヽ(●´∀`●)ﾉ"];
                    }
                }
                _this.message.char_name.text = _this.message.name_test.shift();
                _this.message.lb_dialog_text.text = _this.message.dia_test.shift();
                _this.char.gotoAndPlay("Walk", -1);
                _this.fixed = true;
                if (_this.stage1 == true) {
                    var test = egret.Tween.get(_this.char);
                    if (_this.char.x <= _this.char2.x && _this.char.x >= _this.char2.x - 60) {
                        test.to({ x: _this.stage.stageWidth * 7 / 8 + 20 }, _this.time * 200);
                    }
                    else if (_this.char.x < _this.char2.x - 60) {
                        test.to({ x: _this.stage.stageWidth * 7 / 8 + 20 }, _this.time * 300);
                    }
                    else {
                        test.to({ x: _this.stage.stageWidth * 7 / 8 + 20 }, _this.time * 150);
                    }
                    test.call(function () { _this.char.scaleX = -0.3; }, _this)
                        .to({ x: _this.stage.stageWidth * 2 / 3 + 5, y: _this.stage.stageHeight / 2 + 25 }, _this.time * 200)
                        .to({ x: _this.stage.stageWidth / 2 + 20 }, _this.time * 100)
                        .to({ y: _this.stage.stageHeight * 2 / 3 + 20 }, _this.time * 80)
                        .call(function () {
                        _this.talk(_this.char5, Math.abs(_this.char.x - (_this.char5.x - 50)) * _this.time, _this.char5_b, 3).call(function () {
                            _this.char.scaleX = 0.3;
                            _this.char.gotoAndPlay("Idle", -1);
                        }, _this);
                        _this.stage1 = false;
                        _this.stage2 = true;
                    }, _this);
                }
                else if (_this.stage2 == true) {
                    _this.fixed = true;
                    if (_this.char.x >= _this.char5.x) {
                        _this.char.scaleX = -0.3;
                        _this.char.gotoAndPlay("Walk", -1);
                        egret.Tween.get(_this.char)
                            .call(function () {
                            _this.talk(_this.char5, Math.abs(_this.char.x - (_this.char5.x - 50)) * _this.time, _this.char5_b, 3).call(function () {
                                _this.char.scaleX = 0.3;
                                _this.char.gotoAndPlay("Idle", -1);
                            }, _this);
                        }, _this);
                    }
                    else {
                        _this.talk(_this.char5, Math.abs(_this.char.x - (_this.char5.x - 50)) * _this.time, _this.char5_b, 6).call(function () {
                            _this.char.gotoAndPlay("Idle", -1);
                        }, _this);
                    }
                }
                //
            }
        }, this);
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
    Main.prototype._bool = function (target, click) {
        if (target == this.char2) {
            this.char2_b = true;
        }
        else if (target == this.char3) {
            this.char3_b = true;
        }
        else if (target == this.char5) {
            this.char5_b = true;
        }
        if (this.char2_b == true && this.char3_b == true && this.char5_b == true) {
            this.char4_b = true;
        }
    };
    Main.prototype.talk = function (target, time, click, num) {
        var _this = this;
        this.message.count = num;
        this._bool(target, click);
        var test = egret.Tween.get(this.char);
        test.to({ x: target.x - 50, y: target.y }, time).call(function () {
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
    Main.prototype.createMovieclip = function (Factory, directory) {
        var data = RES.getRes(directory + "_json");
        var texture = RES.getRes(directory + "_png");
        Factory = new egret.MovieClipDataFactory(data, texture);
    };
    Main.prototype.createBitmapByName = function (result, name, x, y, scalex, scaley) {
        var texture = RES.getRes(name);
        result.texture = texture;
        result.scaleX = scalex;
        result.scaleY = scaley;
        result.anchorOffsetX = 0;
        result.anchorOffsetY = 0;
        result.x = x;
        result.y = y;
        this.addChild(result);
    };
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
/*
 var data = RES.getRes("test_json");
    var txtr = RES.getRes("test_png");
    var mcFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory( data, txtr );
    this.char2 = new egret.MovieClip(mcFactory.generateMovieClipData("char"))
    this.addChild(this.char2);
    this.char2.gotoAndPlay(1,-1);
    this.char2.touchEnabled = true;

*/ 
//# sourceMappingURL=Main.js.map