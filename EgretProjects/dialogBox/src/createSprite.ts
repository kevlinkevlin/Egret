class createSprite extends egret.Sprite {
	public otext: any;
	public constructor(_otext: any) {
		super();
		this.otext = _otext;
		this.create();
	}
	//记录表情的索引
	public num: number;
	//需要去掉的字符
	public str: string;
	//记录数
	public array = [];
	public positionArray = [];
	public create() {
		var createText: egret.TextField = new egret.TextField();
		createText.textColor = 0x0000;
		var _text: egret.TextField = new egret.TextField();
		for (let i = 0; i < this.otext.length; i++) {
			if (this.otext[i] == '&') {
				this.positionArray.push(_text.width);
				this.num = this.otext.indexOf(this.otext[i]);
				this.str = this.otext[i] + this.otext[i + 1] + this.otext[i + 2] + this.otext[i + 3];
				this.otext = this.otext.replace(this.str, '       ');
				this.array.push({ str: this.str });
			}
			_text.text += this.otext[i];
		}
		createText.text = this.otext;
		this.addChild(createText);
		for (let i = 0; i < this.array.length; i++) {
			var emoji: egret.Bitmap = new egret.Bitmap(RES.getRes(this.array[i].str));
			emoji.width = emoji.height = 60;
			emoji.y = -30;
			emoji.x = this.positionArray[i];
			this.addChild(emoji);
		}
	}
}