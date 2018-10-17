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
var Dialog = (function (_super) {
    __extends(Dialog, _super);
    function Dialog() {
        var _this = _super.call(this) || this;
        _this.firstscene = true;
        _this.name_test = [];
        _this.dia_test = [];
        _this.gameover_name = "";
        _this.gameover_dia = "";
        _this.gameover_name2 = "";
        _this.gameover_dia2 = "";
        _this.lastscene = false;
        _this.gameover = false;
        _this.completed = false;
        _this.diamond = false;
        _this.code = false;
        _this.char4_target = false;
        _this.count_num = 0;
        _this.skinName = "resource/eui_skins/DialogOk.exml";
        return _this;
    }
    Dialog.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Dialog.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        this.img_dialog_outer.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.Close();
        }, this);
        /*
        this.namegroup.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            this.Close();
        }, this)
        this.diagroup.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            this.Close();
        }, this)
        this.back_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            this.Close();
        }, this)
        */
        /*
                this.ready_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
                
                var game =new GameScene(this.count);
                egret.setTimeout(()=>{this.addChild(game)},this,500)
                game.char4_target = this.char4_target;
                this.back_btn.visible = true;
                this.ready_btn.visible = false;
                this.img_dialog_outer2.visible = false;
                
                if(this.gameover == true)
                {
                this.gameover = false;
                this.lastscene = true;
                this.name_test.push(this.gameover_name);
                this.dia_test.push(this.gameover_dia);
                this.name_test.push(this.gameover_name2);
                this.dia_test.push(this.gameover_dia2);
                this.lb_dialog_text.text =this.dia_test.shift();
                this.char_name.text = this.name_test.shift();
                if(this.char4_target)
                {
                this.code = true;
                }
                }
                
                }, this)
        */
    };
    Dialog.prototype.Show = function (view) {
        if (!view.contains(this)) {
            view.addChild(this);
        }
    };
    Dialog.prototype.Close = function () {
        this.dialog_name.visible = true;
        this.img_dialog_outer2.visible = false;
        /*
        if(this.code == true)
        {
            this.code = false;
            if(window.parent.document)
        {
            window.parent["finishGame"](true)                //////////////產生序號
        }

        }
        */
        if (this.parent != null && this.name_test.length == 0) {
            this.parent.removeChild(this);
            this.ready_btn.visible = false;
        }
        else {
            if (this.name_test.length == 1 && this.firstscene == true) {
                this.firstscene = false;
                this.ready_btn.visible = false;
            }
            else if (this.name_test.length == 1 && this.firstscene == false
                && this.lastscene == false && this.completed == false) {
                this.ready_btn.visible = true;
                this.back_btn.visible = false;
                this.img_dialog_outer2.visible = true;
            }
            else if (this.diamond == true) {
                this.ready_btn.visible = true;
                this.back_btn.visible = false;
                this.diamond = false;
                this.img_dialog_outer2.visible = true;
            }
            else {
                this.lastscene = false;
                this.ready_btn.visible = false;
            }
            this.lb_dialog_text.text = this.dia_test.shift();
            this.char_name.text = this.name_test.shift();
        }
    };
    return Dialog;
}(eui.Component));
__reflect(Dialog.prototype, "Dialog", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Dialog.js.map