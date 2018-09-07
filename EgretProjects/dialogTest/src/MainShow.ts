/**
 * Created by Administrator on 12/21 0021.
 */
class MainShow extends eui.Component
{
    private dialogList:eui.List;
    private lblSend:eui.Label;
    private editText:eui.EditableText;
    private lblSendBase:eui.Label;

    public constructor()
    {
        super();
        this.skinName = MainShowSkin;
        this.verticalCenter = 0;
        this.horizontalCenter = 0;
    }


    public childrenCreated()
    {
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.createGameScene,this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.removeGameScene,this);
    }


    private createGameScene()
    {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.createGameScene,this);

        this.lblSend.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onSure,this);
        this.lblSendBase.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBase,this);
        this.dialogList.itemRenderer = DialogTestRenderer;

        EventManager.inst.addEventListener("refresh",this.refreshMessage,this);

    }

    private removeGameScene()
    {
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE,this.removeGameScene,this);


    }


    private refreshMessage():void
    {
         let msg:string[] = DialogController.inst.getList();
        this.dialogList.dataProvider = new eui.ArrayCollection(msg);
    }


    private onSure():void
    {
        if(!this.editText.text.length)
        {
            window.alert("请输入正确的内容！");
            return;
        }
        DialogController.inst.pushText(this.editText.text);
        this.editText.text = null;
    }

    private onBase():void
    {
        DialogController.inst.pushBaseText();
    }


}


