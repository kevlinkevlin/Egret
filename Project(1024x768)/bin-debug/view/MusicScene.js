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
var MusicScene = (function (_super) {
    __extends(MusicScene, _super);
    function MusicScene() {
        return _super.call(this) || this;
        // this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    MusicScene.prototype.addMusic = function (musname, startTime, times) {
        this._sound = RES.getRes(musname);
        this._channel = this._sound.play(startTime, times);
        this._channel.addEventListener(egret.Event.SOUND_COMPLETE, this.onComplete, this);
    };
    //停止
    MusicScene.prototype.musicStop = function () {
        if (this._channel) {
            this._channel.removeEventListener(egret.Event.SOUND_COMPLETE, this.onComplete, this);
            this._channel.stop();
            this._channel = null;
            this._sound.play(0, 1).volume = 0.3;
        }
    };
    //播放完成
    MusicScene.prototype.onComplete = function (e) {
        console.log("播放完成");
        this.musicStop();
    };
    //声音大小
    MusicScene.prototype.musicSound = function (index) {
        if (this._channel) {
            this._channel.volume = index;
        }
    };
    return MusicScene;
}(egret.DisplayObjectContainer));
__reflect(MusicScene.prototype, "MusicScene");
//# sourceMappingURL=MusicScene.js.map