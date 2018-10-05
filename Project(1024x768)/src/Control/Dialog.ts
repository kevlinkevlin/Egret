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
	img_dialog_outer2: eui.Image;
	lb_dialog_text: eui.Label;
	char_name:eui.Label;
	close_btn:EButton;
	namegroup:eui.Group;
	diagroup:eui.Group;
	public gameover_name:string = "";
	public gameover_dia:string = "";
	public lastscene:boolean = false;
	public gameover:boolean = false;
	public completed:boolean = false;
	public diamond:boolean = false;
	private code:boolean = false;
	public char4_target:boolean = false;
	protected childrenCreated(): void {
		super.childrenCreated();
		
     	this.img_dialog_outer.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			this.Close();
		}, this)
		this.namegroup.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			this.Close();
		}, this)
		this.diagroup.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			this.Close();
		}, this)
		this.back_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			this.Close();
		}, this)
		this.ready_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
		var game =new GameScene(this.count);
		egret.setTimeout(()=>{this.addChild(game)},this,100)
		this.back_btn.visible = true;
		this.ready_btn.visible = false;
		this.img_dialog_outer2.visible = false;
		if(this.gameover == true)
		{
		this.gameover = false;
		this.lastscene = true;
		this.name_test.push(this.gameover_name);
		this.dia_test.push(this.gameover_dia);
		if(this.char4_target)
		{
		this.code = true;
		}
		}
		}, this)
		

	}

	public Show(view: egret.DisplayObjectContainer) {
		if (!view.contains(this)) {
			view.addChild(this);
		}
	}

 

	public Close() {
		this.dialog_name.visible = true;
		this.img_dialog_outer2.visible = false;
		if(this.code == true)
		{
			this.code = false;
	        if(window.parent.document)
        {
            window.parent["finishGame"](true)                //////////////產生序號
        }               

		}
		if(this.parent != null && this.name_test.length == 0){
			this.parent.removeChild(this);
			this.ready_btn.visible = false;
			}
		else{
			if(this.name_test.length == 1 && this.firstscene == true)
			{
			this.firstscene = false
			this.ready_btn.visible = false
			}
			else if(this.name_test.length == 1 && this.firstscene == false 
			&& this.lastscene == false &&this.completed == false)
			{
			
			this.ready_btn.visible = true;
			this.back_btn.visible = false;
			this.img_dialog_outer2.visible = true;
			}else if(this.diamond == true)
			{
			this.ready_btn.visible = true;
			this.back_btn.visible = false;
			this.diamond = false
			this.img_dialog_outer2.visible = true;
			
			}else
			{
			this.lastscene = false
			this.ready_btn.visible = false;
			}
			this.lb_dialog_text.text =this.dia_test.shift();
			this.char_name.text = this.name_test.shift();
			}
		
	}
}