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
var DialogController = (function (_super) {
    __extends(DialogController, _super);
    function DialogController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._textList = [];
        _this._base = ["还", "是", "这", "个", "效", "果", "呢", "?"];
        _this._count = 0;
        return _this;
    }
    Object.defineProperty(DialogController, "inst", {
        get: function () {
            if (!DialogController._inst) {
                DialogController._inst = new DialogController();
            }
            return DialogController._inst;
        },
        enumerable: true,
        configurable: true
    });
    DialogController.prototype.pushText = function (string) {
        this._textList.push(string);
        EventManager.inst.dispatchEventWith("refresh");
    };
    DialogController.prototype.pushBaseText = function () {
        this._textList.push(this._base[this._count]);
        this._count++;
        if (this._count > this._base.length - 1) {
            this._count = 0;
        }
        EventManager.inst.dispatchEventWith("refresh");
    };
    DialogController.prototype.getList = function () {
        return this._textList;
    };
    return DialogController;
}(egret.HashObject));
__reflect(DialogController.prototype, "DialogController");
var EventManager = (function (_super) {
    __extends(EventManager, _super);
    function EventManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(EventManager, "inst", {
        get: function () {
            if (EventManager._instance == null) {
                EventManager._instance = new EventManager();
            }
            return EventManager._instance;
        },
        enumerable: true,
        configurable: true
    });
    //----------------------------------------//
    EventManager.prototype.dispatch = function (type, data) {
        if (data === void 0) { data = null; }
        this.dispatchEventWith(type, false, data);
    };
    return EventManager;
}(egret.EventDispatcher));
__reflect(EventManager.prototype, "EventManager");
//# sourceMappingURL=DialogController.js.map