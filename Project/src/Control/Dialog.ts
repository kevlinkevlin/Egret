class Dialog extends eui.Component implements eui.UIComponent {
	public constructor() {
		super();
		//this.skinName = "resource/eui_skins/DialogOk.exml";
		this.skinName = "resource/eui_skins/DialogOk.exml";
		
		this.addEventListener(eui.UIEvent.COMPLETE, () => {
			this.lb_dialog_text.text = "123123";
		
		}, this)
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

 private game = new GameScene();
    
	public textedit:string;
	ready_btn:EButton;
	img_dialog_outer: eui.Image;
	lb_dialog_text: eui.Label;
	char_name:eui.Label;
	close_btn:EButton;
	private isThemeLoadEnd: boolean = false;


	private onThemeLoadComplete(): void {
     console.log("LoadSuccess");
        this.isThemeLoadEnd = true;
        this.createScene();
    }


 	private createScene() {
       if (this.isThemeLoadEnd ) {
            // this.startCreateScene();
            var gamescene = new GameScene();
            this.addChild(gamescene);
            
        }
    }


	protected childrenCreated(): void {
		super.childrenCreated();
		
     	this.img_dialog_outer.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			this.Close();
		}, this)

		this.ready_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
		this.addChild(this.game);
		
		}, this)
		/*
		this.close_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			this.Close();
			
		}, this)

		this.btn_dialog_cancel.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			this.Close();
		}, this)
		*/

	}

	public Show(view: egret.DisplayObjectContainer) {
		if (!view.contains(this)) {
			view.addChild(this);
		}
	}

 

	public Close() {
		if (this.parent != null && this.textedit == null){
			this.parent.removeChild(this);
		}else{
			this.lb_dialog_text.text =this.textedit;
			this.textedit = null;
		}
	}

}