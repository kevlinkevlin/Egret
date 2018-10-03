var __reflect=this&&this.__reflect||function(t,e,n){t.__class__=e,n?n.push(e):n=[e],t.__types__=t.__types__?n.concat(t.__types__):n},__extends=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);n.prototype=e.prototype,t.prototype=new n},__awaiter=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))(function(r,a){function o(t){try{h(i.next(t))}catch(e){a(e)}}function s(t){try{h(i["throw"](t))}catch(e){a(e)}}function h(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(o,s)}h((i=i.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){function n(t){return function(e){return i([t,e])}}function i(n){if(r)throw new TypeError("Generator is already executing.");for(;h;)try{if(r=1,a&&(o=a[2&n[0]?"return":n[0]?"throw":"next"])&&!(o=o.call(a,n[1])).done)return o;switch(a=0,o&&(n=[0,o.value]),n[0]){case 0:case 1:o=n;break;case 4:return h.label++,{value:n[1],done:!1};case 5:h.label++,a=n[1],n=[0];continue;case 7:n=h.ops.pop(),h.trys.pop();continue;default:if(o=h.trys,!(o=o.length>0&&o[o.length-1])&&(6===n[0]||2===n[0])){h=0;continue}if(3===n[0]&&(!o||n[1]>o[0]&&n[1]<o[3])){h.label=n[1];break}if(6===n[0]&&h.label<o[1]){h.label=o[1],o=n;break}if(o&&h.label<o[2]){h.label=o[2],h.ops.push(n);break}o[2]&&h.ops.pop(),h.trys.pop();continue}n=e.call(t,h)}catch(i){n=[6,i],a=0}finally{r=o=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var r,a,o,s,h={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:n(0),"throw":n(1),"return":n(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},AssetAdapter=function(){function t(){}return t.prototype.getAsset=function(t,e,n){function i(i){e.call(n,i,t)}if(RES.hasRes(t)){var r=RES.getRes(t);r?i(r):RES.getResAsync(t,i,this)}else RES.getResByUrl(t,i,this,RES.ResourceItem.TYPE_IMAGE)},t}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var LoadingUI=function(t){function e(){var e=t.call(this)||this;return e.createView(),e}return __extends(e,t),e.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},e.prototype.onProgress=function(t,e){this.textField.text="Loading..."+t+"/"+e},e}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var Main=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.bg=new egret.Bitmap,e["char"]=new egret.Sprite,e.char2=new egret.Sprite,e.char3=new egret.Sprite,e.char4=new egret.Sprite,e.message=new Dialog,e.time=5,e.stage1=!0,e.stage2=!1,e.fixed=!1,e}return __extends(e,t),e.prototype.createChildren=function(){t.prototype.createChildren.call(this),egret.lifecycle.addLifecycleListener(function(t){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var e=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",e),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()["catch"](function(t){console.log(t)})},e.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(e){switch(e.label){case 0:return[4,this.loadResource()];case 1:return e.sent(),this.createGameScene(),[4,platform.login()];case 2:return e.sent(),[4,platform.getUserInfo()];case 3:return t=e.sent(),console.log(t),[2]}})})},e.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,4,,5]),t=new LoadingUI,this.stage.addChild(t),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return n.sent(),[4,RES.loadGroup("preload",0,t)];case 2:return n.sent(),[4,RES.loadGroup("UI",0,t)];case 3:return n.sent(),this.stage.removeChild(t),[3,5];case 4:return e=n.sent(),console.error(e),[3,5];case 5:return[2]}})})},e.prototype.createGameScene=function(){var t=this;this.createBitmapByName(this.bg,"bg_jpg",0,this.stage.stageHeight/2,.5,.3);var e=new dragonBones.EgretFactory;this.createDragonbones(e,"Cat"),this.animation(e,"Char1","Idle",this.char2),this.animation(e,"Char2","Idle",this.char3),this.animation(e,"Char3","Idle",this.char4);var n=this.animation(e,"Cat","Idle",this["char"]);this["char"].x=this.stage.stageWidth/4,this["char"].y=3*this.stage.stageHeight/8,this["char"].scaleX=-2,this["char"].scaleY=2,this["char"].anchorOffsetX=this["char"].width/2-60,this["char"].anchorOffsetY=this["char"].height/2-45,this.position(this.char2,2*this.stage.stageWidth/4,3*this.stage.stageHeight/8,this["char"].width/2,this["char"].height/2-25,2,2),this.position(this.char3,5*this.stage.stageWidth/8,3*this.stage.stageHeight/8,this["char"].width/2,this["char"].height/2-15,2.2,2.2),this.position(this.char4,2*this.stage.stageWidth/4,9*this.stage.stageHeight/16,this["char"].width/2,this["char"].height/2-25,2.5,2.5),this.addEventListener(egret.Event.ENTER_FRAME,function(){dragonBones.WorldClock.clock.advanceTime(.05)},this),this.char2.touchEnabled=!0,this.char3.touchEnabled=!0,this.char4.touchEnabled=!0,this.char2.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){0==t.fixed&&(t.fixed=!0,n.animation.gotoAndPlay("Run"),1==t.stage1?t.talk(t.char2,Math.abs(t["char"].x-(t.char2.x-t["char"].width/2))*t.time,"角色2").call(function(){n.animation.gotoAndPlay("Idle")},t):1==t.stage2&&egret.Tween.get(t["char"]).to({x:t.stage.stageWidth/4,y:4*t.stage.stageHeight/8},Math.abs(t["char"].x-5*t.stage.stageWidth/8)*t.time).to({x:3*t.stage.stageWidth/8,y:3*t.stage.stageHeight/8},150*t.time).call(function(){t.talk(t.char2,Math.abs(t["char"].x-(t.char2.x-t["char"].width/2))*t.time,"角色2").call(function(){n.animation.gotoAndPlay("Idle")},t),t.stage1=!0,t.stage2=!1},t))},this),this.char3.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){0==t.fixed&&(t.fixed=!0,n.animation.gotoAndPlay("Run"),1==t.stage1?t.talk(t.char3,Math.abs(t["char"].x-(t.char3.x-t["char"].width/2))*t.time,"角色3").call(function(){n.animation.gotoAndPlay("Idle")},t):1==t.stage2&&egret.Tween.get(t["char"]).to({x:t.stage.stageWidth/4,y:4*t.stage.stageHeight/8},Math.abs(t["char"].x-5*t.stage.stageWidth/8)*t.time).to({x:3*t.stage.stageWidth/8,y:3*t.stage.stageHeight/8},150*t.time).call(function(){t.talk(t.char3,Math.abs(t["char"].x-(t.char3.x-t["char"].width/2))*t.time,"角色3").call(function(){n.animation.gotoAndPlay("Idle")},t),t.stage1=!0,t.stage2=!1},t))},this),this.char4.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){0==t.fixed&&(n.animation.gotoAndPlay("Run"),t.fixed=!0,1==t.stage1?egret.Tween.get(t["char"]).to({x:3*t.stage.stageWidth/8},Math.abs(t["char"].x-3*t.stage.stageWidth/8)*t.time).to({x:t.stage.stageWidth/4,y:4*t.stage.stageHeight/8},150*t.time).call(function(){t.talk(t.char4,Math.abs(t["char"].x-(t.char4.x-t["char"].width/2))*t.time,"角色4").call(function(){n.animation.gotoAndPlay("Idle")},t),t.stage1=!1,t.stage2=!0},t):1==t.stage2&&(t.fixed=!0,t.talk(t.char4,Math.abs(t["char"].x-(t.char4.x-t["char"].width/2))*t.time,"角色4").call(function(){n.animation.gotoAndPlay("Idle")},t)))},this)},e.prototype.position=function(t,e,n,i,r,a,o){t.x=e,t.y=n,t.scaleX=a,t.scaleY=o,t.anchorOffsetX=i,t.anchorOffsetY=r},e.prototype.animation=function(t,e,n,i){var r=t.buildArmature(e),a=r.getDisplay();return r.animation.gotoAndPlay(n),dragonBones.WorldClock.clock.add(r),i.addChild(a),this.addChild(i),r},e.prototype.talk=function(t,e,n){var i=this,r=egret.Tween.get(this["char"]);return r.to({x:t.x-this["char"].width/2,y:t.y},e).call(function(){i.message.lb_dialog_text.text=n,i.addChild(i.message),i.fixed=!1},this),r},e.prototype.createDragonbones=function(t,e){var n=RES.getRes(e+"_ske_json"),i=RES.getRes(e+"_tex_json"),r=RES.getRes(e+"_tex_png");t.addSkeletonData(dragonBones.DataParser.parseDragonBonesData(n)),t.addTextureAtlas(new dragonBones.EgretTextureAtlas(r,i))},e.prototype.createBitmapByName=function(t,e,n,i,r,a){var o=RES.getRes(e);t.texture=o,t.scaleX=r,t.scaleY=a,t.anchorOffsetX=t.width/2,t.anchorOffsetY=t.height/2,t.x=n,t.y=i,this.addChild(t)},e.prototype.startAnimation=function(t){var e=this,n=new egret.HtmlTextParser,i=t.map(function(t){return n.parse(t)}),r=this.textfield,a=-1,o=function(){a++,a>=i.length&&(a=0);var t=i[a];r.textFlow=t;var n=egret.Tween.get(r);n.to({alpha:1},200),n.wait(2e3),n.to({alpha:0},200),n.call(o,e)};o()},e}(eui.UILayer);__reflect(Main.prototype,"Main");var DebugPlatform=function(){function t(){}return t.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,{nickName:"username"}]})})},t.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2]})})},t}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var ThemeAdapter=function(){function t(){}return t.prototype.getTheme=function(t,e,n,i){function r(t){e.call(i,t)}function a(e){e.resItem.url==t&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,a,null),n.call(i))}var o=this;if("undefined"!=typeof generateEUI)egret.callLater(function(){e.call(i,generateEUI)},this);else if("undefined"!=typeof generateEUI2)RES.getResByUrl("resource/gameEui.json",function(t,n){window.JSONParseClass.setData(t),egret.callLater(function(){e.call(i,generateEUI2)},o)},this,RES.ResourceItem.TYPE_JSON);else if("undefined"!=typeof generateJSON)if(t.indexOf(".exml")>-1){var s=t.split("/");s.pop();var h=s.join("/")+"_EUI.json";generateJSON.paths[t]?egret.callLater(function(){e.call(i,generateJSON.paths[t])},this):RES.getResByUrl(h,function(n){window.JSONParseClass.setData(n),egret.callLater(function(){e.call(i,generateJSON.paths[t])},o)},this,RES.ResourceItem.TYPE_JSON)}else egret.callLater(function(){e.call(i,generateJSON)},this);else RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,a,null),RES.getResByUrl(t,r,this,RES.ResourceItem.TYPE_TEXT)},t}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);var Dialog=function(t){function e(){var e=t.call(this)||this;return e.skinName="resource/eui_skins/DialogOk.exml",e.addEventListener(eui.UIEvent.COMPLETE,function(){e.lb_dialog_text.text="123123"},e),e}return __extends(e,t),e.prototype.partAdded=function(e,n){t.prototype.partAdded.call(this,e,n)},e.prototype.childrenCreated=function(){var e=this;t.prototype.childrenCreated.call(this),this.img_dialog_outer.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){e.Close()},this),this.close_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){e.Close()},this)},e.prototype.Show=function(t){t.contains(this)||t.addChild(this)},e.prototype.Close=function(){null!=this.parent&&this.parent.removeChild(this)},e}(eui.Component);__reflect(Dialog.prototype,"Dialog",["eui.UIComponent","egret.DisplayObject"]);var DialogBlock=function(t){function e(){return t.call(this)||this}return __extends(e,t),e.prototype.partAdded=function(e,n){t.prototype.partAdded.call(this,e,n)},e.prototype.childrenCreated=function(){t.prototype.childrenCreated.call(this)},e}(eui.Component);__reflect(DialogBlock.prototype,"DialogBlock",["eui.UIComponent","egret.DisplayObject"]);var EButton=function(t){function e(){var e=t.call(this)||this;return e.addEventListener(egret.Event.ADDED_TO_STAGE,function(){e.w=e.width,e.h=e.height,e.addEventListener(egret.TouchEvent.TOUCH_BEGIN,function(){e.width-=5,e.height-=5},e),e.addEventListener(egret.TouchEvent.TOUCH_END,function(){e.width=e.w,e.height=e.h},e),e.addEventListener(egret.TouchEvent.TOUCH_CANCEL,function(){e.width=e.w,e.height=e.h},e),e.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,function(){e.width=e.w,e.height=e.h},e)},e),e}return __extends(e,t),e.prototype.partAdded=function(e,n){t.prototype.partAdded.call(this,e,n)},e.prototype.childrenCreated=function(){t.prototype.childrenCreated.call(this)},e}(eui.Button);__reflect(EButton.prototype,"EButton",["eui.UIComponent","egret.DisplayObject"]);var ETimer=function(t){function e(){var e=t.call(this)||this;return e.timer=new egret.Timer(1e3),e}return __extends(e,t),e.prototype.partAdded=function(e,n){t.prototype.partAdded.call(this,e,n)},e.prototype.AddCall=function(t){this.call=t},e.prototype.childrenCreated=function(){t.prototype.childrenCreated.call(this),this.anchorOffsetX=this.width/2,this.anchorOffsetY=this.height/2,this.timer.addEventListener(egret.TimerEvent.TIMER,this.timerFunc,this),this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timerComplete,this),this.TimeStart(15)},e.prototype.TimeStart=function(t){this.num=t,this.timer.stop(),this.timer.repeatCount=t,this.timer.start()},e.prototype.timerFunc=function(){this.num-=1,this.lbTime.text=this.num.toString(),this.num<=10&&(this.tween=egret.Tween.get(this,{loop:!0}).to({scaleX:1.2,scaleY:1.2},500).wait(200)),this.num<=0&&egret.Tween.pauseTweens(this)},e.prototype.timerComplete=function(){null!=this.call&&this.call()},e}(eui.Component);__reflect(ETimer.prototype,"ETimer",["eui.UIComponent","egret.DisplayObject"]);var EToast=function(t){function e(){var e=t.call(this)||this;return e.skinName="resource/GameSkin/Common/EToast.exml",e}return __extends(e,t),e.prototype.partAdded=function(e,n){t.prototype.partAdded.call(this,e,n)},e.prototype.SetText=function(t){void 0!=t&&(this.lbMsg.text=t)},e.prototype.SetColor=function(t){this.lbMsg.textColor=t},e.prototype.childrenCreated=function(){t.prototype.childrenCreated.call(this),this.timer=new egret.Timer(1e3,2),this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.over,this),this.timer.start()},e.prototype.over=function(){this.parent&&this.parent.removeChild(this)},e}(eui.Component);__reflect(EToast.prototype,"EToast",["eui.UIComponent","egret.DisplayObject"]);