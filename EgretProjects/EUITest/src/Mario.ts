class Mario extends eui.Component implements  eui.UIComponent {
	public Group_btn:eui.Group;
	public Player:eui.ToggleButton;
	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.Group_btn.touchEnabled =true;
		this.Group_btn.addEventListener ( egret.TouchEvent.TOUCH_TAP,(e)=> 
		{
			let the_btn = <eui.ToggleButton>e.target;
		if(the_btn.selected&&the_btn.selected!=undefined)
		{
			this.toggleBtn(the_btn);
		}
		else{
			the_btn.selected = true;
			}
	},this)}
	

	public toggleBtn(btn:eui.ToggleButton){
		for(let i = 0;i < this.Group_btn.numChildren;i++){
			let the_btn = <eui.ToggleButton>this.Group_btn.getChildAt(i);
			the_btn.selected = false;
		}
		
		btn.selected = true;
		
	}
	}