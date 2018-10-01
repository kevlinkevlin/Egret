class Dialog extends eui.Component implements eui.UIComponent {


	public constructor() {
		super();
		this.skinName = "resource/eui_skins/DialogOk.exml";
		
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}
	public firstscene:boolean = true;
	public count:number;
	public name_test:string[] = [];
	public dia_test:string[] = [];
	dialog_name:eui.Image;
	ready_btn:EButton;
	back_btn:EButton;
	img_dialog_outer: eui.Image;
	lb_dialog_text: eui.Label;
	char_name:eui.Label;
	close_btn:EButton;
	


	protected childrenCreated(): void {
		super.childrenCreated();
		
     	this.img_dialog_outer.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			this.Close();
		}, this)
		this.back_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			this.Close();
		}, this)
		this.ready_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
		var game =new GameScene(this.count);
		egret.setTimeout(()=>{this.addChild(game)},this,100)
		
		}, this)
		

	}

	public Show(view: egret.DisplayObjectContainer) {
		if (!view.contains(this)) {
			view.addChild(this);
		}
	}

 

	public Close() {
		this.dialog_name.visible = true;
		if (this.parent != null && this.name_test.length == 0){
			this.parent.removeChild(this);
			this.ready_btn.visible = false;
			this.back_btn.visible = false;
			
		}
		else{
			if(this.name_test.length == 1 && this.firstscene == false)
			{
				this.ready_btn.visible = true;
			this.back_btn.visible = true;
			}else
			{
			this.ready_btn.visible = false;
			this.back_btn.visible = false;
			}
			this.lb_dialog_text.text =this.dia_test.shift();
			this.char_name.text = this.name_test.shift();
		}
	}

}