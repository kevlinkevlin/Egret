class DialogController extends egret.HashObject
{
	private static _inst:DialogController;
	static get inst():DialogController
	{
		if(!DialogController._inst)
		{
			DialogController._inst = new DialogController();
		}
		return DialogController._inst;
	}


	private _textList:string[] = [];
	private _base:string[] = ["还","是","这","个","效","果","呢","?"];
	private _count:number = 0;

	public pushText(string:string):void
	{
		this._textList.push(string);
		EventManager.inst.dispatchEventWith("refresh");
	}

	public pushBaseText():void
	{
		this._textList.push(this._base[this._count]);
		this._count++;
		if(this._count > this._base.length - 1)
		{
			this._count = 0;
		}
		EventManager.inst.dispatchEventWith("refresh");
	}

	public getList()
	{
		return this._textList;
	}

}



class EventManager extends egret.EventDispatcher {
	private static _instance:EventManager;

	public static get inst():EventManager {
		if (EventManager._instance == null) {
			EventManager._instance = new EventManager();
		}
		return EventManager._instance;
	}

	//----------------------------------------//

	public dispatch(type:string, data:any = null):void {
		this.dispatchEventWith(type, false, data);
	}
}