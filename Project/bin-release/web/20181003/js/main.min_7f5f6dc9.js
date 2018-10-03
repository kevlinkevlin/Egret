var __reflect=this&&this.__reflect||function(e,t,i){e.__class__=t,i?i.push(t):i=[t],e.__types__=e.__types__?i.concat(e.__types__):i},__extends=this&&this.__extends||function(e,t){function i(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);i.prototype=t.prototype,e.prototype=new i},__awaiter=this&&this.__awaiter||function(e,t,i,s){return new(i||(i=Promise))(function(a,r){function n(e){try{h(s.next(e))}catch(t){r(t)}}function o(e){try{h(s["throw"](e))}catch(t){r(t)}}function h(e){e.done?a(e.value):new i(function(t){t(e.value)}).then(n,o)}h((s=s.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){function i(e){return function(t){return s([e,t])}}function s(i){if(a)throw new TypeError("Generator is already executing.");for(;h;)try{if(a=1,r&&(n=r[2&i[0]?"return":i[0]?"throw":"next"])&&!(n=n.call(r,i[1])).done)return n;switch(r=0,n&&(i=[0,n.value]),i[0]){case 0:case 1:n=i;break;case 4:return h.label++,{value:i[1],done:!1};case 5:h.label++,r=i[1],i=[0];continue;case 7:i=h.ops.pop(),h.trys.pop();continue;default:if(n=h.trys,!(n=n.length>0&&n[n.length-1])&&(6===i[0]||2===i[0])){h=0;continue}if(3===i[0]&&(!n||i[1]>n[0]&&i[1]<n[3])){h.label=i[1];break}if(6===i[0]&&h.label<n[1]){h.label=n[1],n=i;break}if(n&&h.label<n[2]){h.label=n[2],h.ops.push(i);break}n[2]&&h.ops.pop(),h.trys.pop();continue}i=t.call(e,h)}catch(s){i=[6,s],r=0}finally{a=n=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}var a,r,n,o,h={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:i(0),"throw":i(1),"return":i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o},EButton=function(e){function t(){var t=e.call(this)||this;return t.addEventListener(egret.Event.ADDED_TO_STAGE,function(){t.w=t.width,t.h=t.height,t.addEventListener(egret.TouchEvent.TOUCH_BEGIN,function(){t.width-=2,t.height-=2},t),t.addEventListener(egret.TouchEvent.TOUCH_END,function(){t.width=t.w,t.height=t.h},t),t.addEventListener(egret.TouchEvent.TOUCH_CANCEL,function(){t.width=t.w,t.height=t.h},t),t.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,function(){t.width=t.w,t.height=t.h},t)},t),t}return __extends(t,e),t.prototype.partAdded=function(t,i){e.prototype.partAdded.call(this,t,i)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this)},t}(eui.Button);__reflect(EButton.prototype,"EButton",["eui.UIComponent","egret.DisplayObject"]);var AssetAdapter=function(){function e(){}return e.prototype.getAsset=function(e,t,i){function s(s){t.call(i,s,e)}if(RES.hasRes(e)){var a=RES.getRes(e);a?s(a):RES.getResAsync(e,s,this)}else RES.getResByUrl(e,s,this,RES.ResourceItem.TYPE_IMAGE)},e}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var Main=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.bg=new egret.Bitmap,t.message=new Dialog,t.time=5,t.stage1=!0,t.stage2=!1,t.fixed=!1,t.char2_b=!1,t.char3_b=!1,t.char4_b=!1,t.char5_b=!1,t}return __extends(t,e),t.prototype.createChildren=function(){e.prototype.createChildren.call(this),egret.lifecycle.addLifecycleListener(function(e){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()},egret.registerImplementation("eui.IAssetAdapter",new AssetAdapter),this.runGame()["catch"](function(e){console.log(e)})},t.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return[4,this.loadResource()];case 1:return t.sent(),this.createGameScene(),[4,platform.login()];case 2:return t.sent(),[4,platform.getUserInfo()];case 3:return e=t.sent(),console.log(e),[2]}})})},t.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(i){switch(i.label){case 0:return i.trys.push([0,4,,5]),e=new LoadingUI,this.stage.addChild(e),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return i.sent(),[4,RES.loadGroup("preload")];case 2:return i.sent(),[4,RES.loadGroup("UI")];case 3:return i.sent(),this.stage.removeChild(e),[3,5];case 4:return t=i.sent(),console.error(t),[3,5];case 5:return[2]}})})},t.prototype.createGameScene=function(){var e=this;this.createBitmapByName(this.bg,"bg_jpg",0,this.stage.stageHeight/2,.5,.3);var t=new egret.MovieClipDataFactory,i=RES.getRes("test_json"),s=RES.getRes("test_png"),t=new egret.MovieClipDataFactory(i,s);this["char"]=new egret.MovieClip(t.generateMovieClipData("char")),this.char2=new egret.MovieClip(t.generateMovieClipData("char2")),this.char3=new egret.MovieClip(t.generateMovieClipData("char3")),this.char4=new egret.MovieClip(t.generateMovieClipData("char5")),this.char5=new egret.MovieClip(t.generateMovieClipData("char4")),this.addChild(this.char2),this.addChild(this.char3),this.addChild(this.char4),this.addChild(this.char5),this.addChild(this["char"]),this["char"].gotoAndPlay("Idle",-1),this.char2.gotoAndPlay("Idle",-1),this.char3.gotoAndPlay("Idle",-1),this.char4.gotoAndPlay("Idle",-1),this.char5.gotoAndPlay("Idle",-1),this.position(this["char"],this.stage.stageWidth/4,3*this.stage.stageHeight/8,0,this["char"].height/2-110,.5,.5),this.position(this.char2,2*this.stage.stageWidth/4+40,3*this.stage.stageHeight/8,this.char2.width/2,this.char2.height/2-90,.5,.5),this.position(this.char3,6*this.stage.stageWidth/8,3*this.stage.stageHeight/8,this.char3.width/2,this.char3.height/2-90,.5,.5),this.position(this.char4,2*this.stage.stageWidth/4+90,9*this.stage.stageHeight/16+10,this.char4.width/2,this.char4.height/2-125,.35,.35),this.position(this.char5,this.stage.stageWidth/8+50,4*this.stage.stageHeight/8+25,this.char5.width/2,this.char5.height/2-90,.5,.5),this.addEventListener(egret.Event.ENTER_FRAME,function(){dragonBones.WorldClock.clock.advanceTime(.05)},this),this.char2.touchEnabled=!0,this.char3.touchEnabled=!0,this.char4.touchEnabled=!0,this.char5.touchEnabled=!0,this.message.char_name.text="",this.message.dialog_name.visible=!1,this.message.lb_dialog_text.text="軌跡15周年！參與遊擊士報名的新人們，趕緊在飛行船上認識新夥伴！",this.message.name_test=["新人遊擊士庫洛艾"],this.message.dia_test=["…好緊張呀，前面綁著雙馬尾的姐姐，好像是軌跡系列最有人氣的艾絲蒂雅小姐呢！"],this.message.ready_btn.visible=!1,this.addChild(this.message),window.parent.document,this.char2.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){if(0==e.fixed)if(e.fixed=!0,0==e.char2_b?(e.message.name_test=["艾蒂莉亞","庫洛艾","艾蒂莉亞"],e.message.dia_test=["咦，妳是新來的遊擊士嗎？看起來呆萌呆萌的，趕緊和大夥們匯合呀","是..！這艘飛空艇上好像有各代軌跡系列的人氣角色都在呢！","那當然囉，超過70位超人氣軌跡系列角色外，還能和過往的Boss成為夥伴呢~~新的軌跡，你看的見！"],e.message.gameover=!0,e.message.gameover_name="艾蒂莉亞",e.message.gameover_dia="哎呀...欸?這個該不會是..."):0==e.message.completed?(e.message.name_test=["艾蒂莉亞"],e.message.dia_test=["去找其他人聊聊吧~"]):(console.log(e.message.completed),e.message.name_test=["艾蒂莉亞"],e.message.dia_test=["今天天氣真的不錯呢~"]),e.message.char_name.text=e.message.name_test.shift(),e.message.lb_dialog_text.text=e.message.dia_test.shift(),e["char"].gotoAndPlay("Walk",-1),1==e.stage1)e["char"].x>e.char2.x&&(e["char"].scaleX=-.55),e.talk(e.char2,Math.abs(e["char"].x-(e.char2.x-e["char"].width/2))*e.time,e.char2_b,1).call(function(){e["char"].scaleX=.55,e["char"].gotoAndPlay("Idle",-1)},e);else if(1==e.stage2){var t=egret.Tween.get(e["char"]);e["char"].x>=e.char5.x&&(e["char"].scaleX=-.55,t.to({x:3*e.stage.stageWidth/8+35,y:4*e.stage.stageHeight/8+10},150*e.time)),t.to({x:e.stage.stageWidth/4},200*e.time).call(function(){e["char"].scaleX=.55},e).to({y:7*e.stage.stageHeight/16+20},50*e.time).to({x:e.stage.stageWidth/4+40},50*e.time).to({x:3*e.stage.stageWidth/8+30,y:3*e.stage.stageHeight/8},200*e.time).call(function(){e.talk(e.char2,Math.abs(e["char"].x-e.char2.x+(e["char"].y-e.char2.y))*e.time,e.char2_b,1).call(function(){e["char"].gotoAndPlay("Idle",-1)},e),e.stage1=!0,e.stage2=!1},e)}},this),this.char3.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){if(0==e.fixed)if(e.fixed=!0,0==e.char3_b?(e.message.name_test=["庫洛艾","黎恩"],e.message.dia_test=["啊！你不是今年《閃之軌跡》IV的男主角黎恩嗎！能和你一起冒險嗎？","欸…這個嘛。(打量一下)這當然事沒問題的囉。不過呀，你得先學會SRPG的戰鬥方式，像是戰鬥時施放技能和使用道具上都要注意到回合，並與大家配合呢！"],e.message.gameover=!0,e.message.gameover_name="黎恩",e.message.gameover_dia="喔喔..!!你今天看起來運勢不錯呢..."):0==e.message.completed?(e.message.name_test=["黎恩"],e.message.dia_test=["去找其他人聊聊吧~"]):(e.message.name_test=["黎恩","庫洛艾","黎恩","庫洛艾"],e.message.dia_test=["26個英文字母妳知道我最喜歡什麼嗎?","恩??.......不知道...","我喜歡........You","...........>/////<"]),e.message.char_name.text=e.message.name_test.shift(),e.message.lb_dialog_text.text=e.message.dia_test.shift(),e["char"].gotoAndPlay("Walk",-1),1==e.stage1)e.talk(e.char3,Math.abs(e["char"].x-(e.char3.x-e["char"].width/2))*e.time,e.char3_b,5).call(function(){e["char"].gotoAndPlay("Idle",-1)},e);else if(1==e.stage2){var t=egret.Tween.get(e["char"]);e["char"].x>=e.char5.x&&(e["char"].scaleX=-.55,t.to({x:3*e.stage.stageWidth/8+35,y:4*e.stage.stageHeight/8+10},150*e.time)),t.to({x:e.stage.stageWidth/4},200*e.time).call(function(){e["char"].scaleX=.55},e).to({y:7*e.stage.stageHeight/16+20},50*e.time).to({x:e.stage.stageWidth/4+40},50*e.time).to({x:3*e.stage.stageWidth/8+30,y:3*e.stage.stageHeight/8},200*e.time).call(function(){e.talk(e.char3,Math.abs(e["char"].x-(e.char3.x-e["char"].width/2))*e.time,e.char3_b,5).call(function(){e["char"].gotoAndPlay("Idle",-1)},e),e.stage1=!0,e.stage2=!1},e)}},this),this.char4.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){if(0==e.fixed)if(e.fixed=!0,0==e.char4_b?(e.message.name_test=["庫洛艾"],e.message.dia_test=["還有些很熟悉的人呢，先去看看吧！"],e.message.char_name.text=e.message.name_test.shift(),e.message.lb_dialog_text.text=e.message.dia_test.shift()):0==e.message.completed?(e.message.diamond=!0,e.message.completed=!0,e.message.gameover=!0,e.message.gameover_name="咪西",e.message.gameover_dia="竟然被你抽到我的薪資袋了Q_Q",e.message.name_test=["庫洛艾","咪西"],e.message.dia_test=["嗨嗨~~小貓咪~~~~~！","喵～被發現啦，我、我、我可不是喵呢，我是FB粉絲團的主編哦！這樣～厲害吧，但千萬不要告訴別人我也上飛空艇了！"],e.message.char_name.text=e.message.name_test.shift(),e.message.lb_dialog_text.text=e.message.dia_test.shift(),e.message.char4_target=!0):(e.message.name_test=["咪西"],e.message.dia_test=["我的薪資袋Q_Q........."],e.message.char_name.text=e.message.name_test.shift(),e.message.lb_dialog_text.text=e.message.dia_test.shift()),e["char"].gotoAndPlay("Walk",-1),1==e.stage1){var t=egret.Tween.get(e["char"]);e["char"].x>e.stage.stageWidth/4+50&&(e["char"].scaleX=-.55),e["char"].x<=e.char2.x?t.to({x:3*e.stage.stageWidth/8+30,y:3*e.stage.stageHeight/8},250*e.time):t.to({x:3*e.stage.stageWidth/8+30,y:3*e.stage.stageHeight/8},350*e.time),t.call(function(){e["char"].scaleX=-.55},e).to({x:e.stage.stageWidth/4+40,y:7*e.stage.stageHeight/16+20},200*e.time).to({x:e.stage.stageWidth/4},50*e.time).call(function(){e["char"].scaleX=.55},e).to({y:4*e.stage.stageHeight/8+10},50*e.time).to({x:3*e.stage.stageWidth/8+35,y:4*e.stage.stageHeight/8+20},150*e.time).call(function(){e.talk(e.char4,Math.abs(e["char"].x-(e.char4.x-e["char"].width/2))*e.time,e.char4_b,4).call(function(){e["char"].gotoAndPlay("Idle",-1)},e),e.stage1=!1,e.stage2=!0},e)}else 1==e.stage2&&(e.fixed=!0,e["char"].x<=e.char5.x?egret.Tween.get(e["char"]).to({x:3*e.stage.stageWidth/8+35,y:4*e.stage.stageHeight/8+20},350*e.time).call(function(){e.talk(e.char4,Math.abs(e["char"].x-(e.char4.x-e["char"].width/2))*e.time,e.char4_b,4).call(function(){e["char"].gotoAndPlay("Idle",-1)},e)},e):e.talk(e.char4,Math.abs(e["char"].x-(e.char4.x-e["char"].width/2))*e.time,e.char4_b,4).call(function(){e["char"].gotoAndPlay("Idle",-1)},e))},this),this.char5.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){if(0==e.fixed)if(0==e.char5_b?(e.message.name_test=["庫洛艾","艾莉"],e.message.dia_test=["這位姐姐您好呀！請問這裡…是哪裡呀？","這裡可是非常重要的地方呢。想要在塞姆利亞大陸上自由行走，都靠我們搭乘的飛空艇唷！另外妳看看妳手上的導力器，它可是一切能量的來源呢！"],e.message.gameover=!0,e.message.gameover_name="艾莉",e.message.gameover_dia="哈哈...是個不錯的開始呢！"):0==e.message.completed?(e.message.name_test=["艾莉"],e.message.dia_test=["快去找其他人聊聊吧~"]):(e.message.name_test=["艾莉","庫洛艾"],e.message.dia_test=["恭喜你抽到大獎!","謝謝妳啦~~~~~~ヽ(●´∀`●)ﾉ"]),e.message.char_name.text=e.message.name_test.shift(),e.message.lb_dialog_text.text=e.message.dia_test.shift(),e["char"].gotoAndPlay("Walk",-1),e.fixed=!0,1==e.stage1){var t=egret.Tween.get(e["char"]);e["char"].x>e.stage.stageWidth/4+50&&(e["char"].scaleX=-.55),e["char"].x<=e.char2.x?t.to({x:3*e.stage.stageWidth/8+30,y:3*e.stage.stageHeight/8},250*e.time):t.to({x:3*e.stage.stageWidth/8+30,y:3*e.stage.stageHeight/8},350*e.time),t.call(function(){e["char"].scaleX=-.55},e).to({x:e.stage.stageWidth/4+40,y:7*e.stage.stageHeight/16+20},200*e.time).to({x:e.stage.stageWidth/4},50*e.time).to({y:4*e.stage.stageHeight/8+10},50*e.time).call(function(){e.talk(e.char5,Math.abs(e["char"].x-(e.char4.x-e["char"].width/2))*e.time,e.char5_b,3).call(function(){e["char"].scaleX=.55,e["char"].gotoAndPlay("Idle",-1)},e),e.stage1=!1,e.stage2=!0},e)}else 1==e.stage2&&(e.fixed=!0,e["char"].x>=e.char5.x?(e["char"].scaleX=-.55,e["char"].gotoAndPlay("Walk",-1),egret.Tween.get(e["char"]).to({x:3*e.stage.stageWidth/8+35,y:4*e.stage.stageHeight/8+10},150*e.time).call(function(){e.talk(e.char5,Math.abs(e["char"].x-(e.char5.x-e["char"].width/2))*e.time,e.char5_b,3).call(function(){e["char"].scaleX=.55,e["char"].gotoAndPlay("Idle",-1)},e)},e)):e.talk(e.char5,Math.abs(e["char"].x-(e.char5.x-e["char"].width/2))*e.time,e.char5_b,6).call(function(){e["char"].gotoAndPlay("Idle",-1)},e))},this)},t.prototype.position=function(e,t,i,s,a,r,n){e.x=t,e.y=i,e.scaleX=r,e.scaleY=n,e.anchorOffsetX=s,e.anchorOffsetY=a},t.prototype.animation=function(e,t,i,s){var a=e.buildArmature(t),r=a.getDisplay();return a.animation.gotoAndPlay(i),dragonBones.WorldClock.clock.add(a),s.addChild(r),this.addChild(s),a},t.prototype._bool=function(e,t){e==this.char2?this.char2_b=!0:e==this.char3?this.char3_b=!0:e==this.char5&&(this.char5_b=!0),1==this.char2_b&&1==this.char3_b&&1==this.char5_b&&(this.char4_b=!0)},t.prototype.talk=function(e,t,i,s){var a=this;this.message.count=s,this._bool(e,i);var r=egret.Tween.get(this["char"]);return r.to({x:e.x-this["char"].width/2,y:e.y},t).call(function(){a.addChild(a.message),a.fixed=!1},this),r},t.prototype.createDragonbones=function(e,t){var i=RES.getRes(t+"_ske_json"),s=RES.getRes(t+"_tex_json"),a=RES.getRes(t+"_tex_png");e.addSkeletonData(dragonBones.DataParser.parseDragonBonesData(i)),e.addTextureAtlas(new dragonBones.EgretTextureAtlas(a,s))},t.prototype.createMovieclip=function(e,t){var i=RES.getRes(t+"_json"),s=RES.getRes(t+"_png");e=new egret.MovieClipDataFactory(i,s)},t.prototype.createBitmapByName=function(e,t,i,s,a,r){var n=RES.getRes(t);e.texture=n,e.scaleX=a,e.scaleY=r,e.anchorOffsetX=e.width/2,e.anchorOffsetY=e.height/2,e.x=i,e.y=s,this.addChild(e)},t}(eui.UILayer);__reflect(Main.prototype,"Main");var DebugPlatform=function(){function e(){}return e.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,{nickName:"username"}]})})},e.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2]})})},e}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var ThemeAdapter=function(){function e(){}return e.prototype.getTheme=function(e,t,i,s){function a(e){t.call(s,e)}function r(t){t.resItem.url==e&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,r,null),i.call(s))}var n=this;if("undefined"!=typeof generateEUI)egret.callLater(function(){t.call(s,generateEUI)},this);else if("undefined"!=typeof generateEUI2)RES.getResByUrl("resource/gameEui.json",function(e,i){window.JSONParseClass.setData(e),egret.callLater(function(){t.call(s,generateEUI2)},n)},this,RES.ResourceItem.TYPE_JSON);else if("undefined"!=typeof generateJSON)if(e.indexOf(".exml")>-1){var o=e.split("/");o.pop();var h=o.join("/")+"_EUI.json";generateJSON.paths[e]?egret.callLater(function(){t.call(s,generateJSON.paths[e])},this):RES.getResByUrl(h,function(i){window.JSONParseClass.setData(i),egret.callLater(function(){t.call(s,generateJSON.paths[e])},n)},this,RES.ResourceItem.TYPE_JSON)}else egret.callLater(function(){t.call(s,generateJSON)},this);else RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,r,null),RES.getResByUrl(e,a,this,RES.ResourceItem.TYPE_TEXT)},e}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);var Dialog=function(e){function t(){var t=e.call(this)||this;return t.firstscene=!0,t.name_test=[],t.dia_test=[],t.gameover_name="",t.gameover_dia="",t.lastscene=!1,t.gameover=!1,t.completed=!1,t.diamond=!1,t.code=!1,t.char4_target=!1,t.skinName="resource/eui_skins/DialogOk.exml",t}return __extends(t,e),t.prototype.partAdded=function(t,i){e.prototype.partAdded.call(this,t,i)},t.prototype.childrenCreated=function(){var t=this;e.prototype.childrenCreated.call(this),this.img_dialog_outer.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){},this),this.back_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){t.Close()},this),this.ready_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){var e=new GameScene(t.count);egret.setTimeout(function(){t.addChild(e)},t,100),t.back_btn.visible=!0,t.ready_btn.visible=!1,1==t.gameover&&(t.gameover=!1,t.lastscene=!0,t.name_test.push(t.gameover_name),t.dia_test.push(t.gameover_dia),t.char4_target&&(t.code=!0))},this)},t.prototype.Show=function(e){e.contains(this)||e.addChild(this)},t.prototype.Close=function(){this.dialog_name.visible=!0,1==this.code&&(this.code=!1,window.parent.document&&window.parent.finishGame(!0)),null!=this.parent&&0==this.name_test.length?(this.parent.removeChild(this),this.ready_btn.visible=!1):(1==this.name_test.length&&1==this.firstscene?(this.firstscene=!1,this.ready_btn.visible=!1):1==this.name_test.length&&0==this.firstscene&&0==this.lastscene&&0==this.completed?(this.ready_btn.visible=!0,this.back_btn.visible=!1):1==this.diamond?(this.ready_btn.visible=!0,this.back_btn.visible=!1,this.diamond=!1):(this.lastscene=!1,this.ready_btn.visible=!1),this.lb_dialog_text.text=this.dia_test.shift(),this.char_name.text=this.name_test.shift())},t}(eui.Component);__reflect(Dialog.prototype,"Dialog",["eui.UIComponent","egret.DisplayObject"]);var LoadingUI=function(e){function t(){var t=e.call(this)||this;return t.createView(),t}return __extends(t,e),t.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.x=272,this.textField.y=284,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},t.prototype.onProgress=function(e,t){this.textField.text="Loading..."+e+"/"+t},t}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var ETimer=function(e){function t(){var t=e.call(this)||this;return t.timer=new egret.Timer(1e3),t}return __extends(t,e),t.prototype.partAdded=function(t,i){e.prototype.partAdded.call(this,t,i)},t.prototype.AddCall=function(e){this.call=e},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this),this.anchorOffsetX=this.width/2,this.anchorOffsetY=this.height/2,this.timer.addEventListener(egret.TimerEvent.TIMER,this.timerFunc,this),this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timerComplete,this),this.TimeStart(15)},t.prototype.TimeStart=function(e){this.num=e,this.timer.stop(),this.timer.repeatCount=e,this.timer.start()},t.prototype.timerFunc=function(){this.num-=1,this.lbTime.text=this.num.toString(),this.num<=10&&(this.tween=egret.Tween.get(this,{loop:!0}).to({scaleX:1.2,scaleY:1.2},500).wait(200)),this.num<=0&&egret.Tween.pauseTweens(this)},t.prototype.timerComplete=function(){null!=this.call&&this.call()},t}(eui.Component);__reflect(ETimer.prototype,"ETimer",["eui.UIComponent","egret.DisplayObject"]);var EToast=function(e){function t(){var t=e.call(this)||this;return t.skinName="resource/GameSkin/Common/EToast.exml",t}return __extends(t,e),t.prototype.partAdded=function(t,i){e.prototype.partAdded.call(this,t,i)},t.prototype.SetText=function(e){void 0!=e&&(this.lbMsg.text=e)},t.prototype.SetColor=function(e){this.lbMsg.textColor=e},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this),this.timer=new egret.Timer(1e3,2),this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.over,this),this.timer.start()},t.prototype.over=function(){this.parent&&this.parent.removeChild(this)},t}(eui.Component);__reflect(EToast.prototype,"EToast",["eui.UIComponent","egret.DisplayObject"]);var GameScene=function(e){function t(t){var i=e.call(this)||this;return i.skinName="resource/eui_skins/SlotViewSkin.exml",i.addEventListener(egret.Event.ADDED_TO_STAGE,i.onAddToStage,i),i.count=t,i}return __extends(t,e),t.prototype.onAddToStage=function(e){var t=this;this.slider=new Slider.SliderScroll,this.addChild(this.slider),this.stopgroup.visible=!1,this.setChildIndex(this.kake1,this.numChildren-1),this.startgroup.addEventListener(egret.TouchEvent.TOUCH_TAP,this.gameStart,this),this.back_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){t.startgroup.visible=!0,t.Close()},this)},t.prototype.Close=function(){null!=this.parent&&this.parent.removeChild(this)},t.prototype.createImgSlide=function(e){var t=new egret.Bitmap,i=RES.getRes(e);return t.texture=i,t},t.prototype.drawMask=function(e,t){var i=new egret.Shape;return i.graphics.beginFill(16711680,1),i.graphics.drawRect(e,t,105,201),i.graphics.endFill(),i},t.prototype.gameStart=function(){console.log("start!"),this.back_btn.visible=!1,this.startgroup.visible=!1,this.stopgroup.visible=!0,this.stop_up.visible=!1,this.stop_over.visible=!0,this.removeChild(this.slider),this.slider=new Slider.SliderScroll,this.addChild(this.slider),this.setChildIndex(this.kake1,this.numChildren-1),this.slider.startRoll(),this.stop_over.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.gameStop,this),this.stop_over.addEventListener(egret.TouchEvent.TOUCH_TAP,this.gameStop,this)},t.prototype.gameStop=function(){var e=this;console.log("stop!"),this.stop_up.visible=!0,this.stop_over.visible=!1,console.log(this.count),this.slider.stopScroll(this.count,function(t){t&&(e.stop_up.visible=!1,e.stop_over.visible=!1,e.back_btn.visible=!0)})},t}(eui.Component);__reflect(GameScene.prototype,"GameScene");var MusicScene=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.addMusic=function(e,t,i){this._sound=RES.getRes(e),this._channel=this._sound.play(t,i),this._channel.addEventListener(egret.Event.SOUND_COMPLETE,this.onComplete,this)},t.prototype.musicStop=function(){this._channel&&(this._channel.removeEventListener(egret.Event.SOUND_COMPLETE,this.onComplete,this),this._channel.stop(),this._channel=null,this._sound.play(0,1).volume=.3)},t.prototype.onComplete=function(e){console.log("播放完成"),this.musicStop()},t.prototype.musicSound=function(e){this._channel&&(this._channel.volume=e)},t}(egret.DisplayObjectContainer);__reflect(MusicScene.prototype,"MusicScene");var Slider;!function(e){var t=function(e){function t(){var t=e.call(this)||this;return t.speed1=0,t.speed2=0,t.speed3=0,t.sliderboxwidth=219,t.sliderboxheight=403,t.sliderHeight=840,t.addEventListener(egret.Event.ADDED_TO_STAGE,t.onAddToStage,t),t}return __extends(t,e),t.prototype.onAddToStage=function(e){this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this),this.rowCount=Math.ceil(this.sliderboxheight/this.sliderHeight)+1,this.bmpArr2=[],this.addSliderBox(this.stage.stageWidth/2-100,this.stage.stageHeight/2-400,this.stage.stageWidth/2-100,this.stage.stageHeight/2-300,this.rowCount,this.bmpArr2)},t.prototype.addSliderBox=function(e,t,i,s,a,r){for(var n=0;a>n;n++){var o;o=this.createImgSlide("slider_ok_nobg_png"),o.width=210,o.height=840,o.x=e,o.y=t+this.sliderHeight*n,r.push(o),this.addChild(o);var h=this.drawMask(i,s);this.addChild(h),o.mask=h}},t.prototype.startRoll=function(){this.mus_star=new MusicScene,this.mus_star.addMusic("laba_mp3",0,-1),this.mus_star.musicSound(.3),this.removeEventListener(egret.Event.ENTER_FRAME,this.enterFrameHandler,this),this.addEventListener(egret.Event.ENTER_FRAME,this.enterFrameHandler,this),this.stimer=new egret.Timer(100,0),this.stimer.addEventListener(egret.TimerEvent.TIMER,function(){this.speed1<=-50||(this.speed1=this.speed1-5),this.speed2<=-60||(this.speed2=this.speed2-6),this.speed3<=-70||(this.speed3=this.speed3-7)},this),this.stimer.start()},t.prototype.enterFrameHandler=function(e){for(var t=0;t<this.rowCount;t++){var i=this.bmpArr2[t];i.y+=this.speed2,this.bmpArr2[0].y<-780&&(this.bmpArr2[0].y=this.bmpArr2[0].y+1680),this.bmpArr2[1].y<-780&&(this.bmpArr2[1].y=this.bmpArr2[1].y+1680)}},t.prototype.stopScroll=function(e,t){this.stimer.stop(),this.flag=!1,this.etimer=new egret.Timer(500,0),this.etimer.addEventListener(egret.TimerEvent.TIMER,function(){var i=this;if(-6==this.speed2){this.etimer.stop();setTimeout(function(){i.addEventListener(egret.Event.ENTER_FRAME,function(){var i=0;i=-1*e*70*2+190,this.bmpArr2[0].y-489>-4+i&&this.bmpArr2[0].y-489<4+i&&(this.speed2=0,0!=this.speed2||this.flag||(this.flag=!0,t(this.flag),this.mus_star.musicStop()))},i)},500)}else this.speed2=this.speed2+6},this),this.etimer.start()},t.prototype.createImgSlide=function(e){var t=new egret.Bitmap,i=RES.getRes(e);return t.texture=i,t},t.prototype.drawMask=function(e,t){var i=new egret.Shape;return i.graphics.beginFill(16711680,1),i.graphics.drawRect(e,t,210,220),i.graphics.endFill(),i},t}(egret.DisplayObjectContainer);e.SliderScroll=t,__reflect(t.prototype,"Slider.SliderScroll")}(Slider||(Slider={}));