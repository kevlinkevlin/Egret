class sentText extends egret.Sprite {
	public otext: any;
	public isLeft: boolean;
	public constructor(_otext: any, _isLeft: boolean) {
		super();
		this.otext = _otext;
		this.isLeft = _isLeft;
		this.create();
	}
	//文本背景
	public textSprite: egret.Sprite;
	//单行文本
	public createSprite: createSprite;
	//已经分配的字符长度
	public stringNum: number = 0;
	public stringArray = [];
	public spriteArray = [];
	public lengthArray = [];
	public create() {
		this.textSprite = new egret.Sprite();
		this.addChild(this.textSprite);
		this.createText(0, this.otext);
		for (let i = 0; i < this.stringArray.length; i++) {
			// if (this.stringArray[i].length != 0) {
			this.createSprite = new createSprite(this.stringArray[i]);
			// }
			this.createSprite.y = 30 + i * 60;
			this.addChild(this.createSprite);
			this.spriteArray.push(this.createSprite);
			this.lengthArray.push(this.createSprite.width);
		}
		var len = this.lengthArray.length;
		for (var i = 0; i < len; i++) {
			for (var j = 0; j < len - 1 - i; j++) {
				if (this.lengthArray[j] < this.lengthArray[j + 1]) {        // 相邻元素两两对比
					var temp = this.lengthArray[j + 1];        // 元素交换
					this.lengthArray[j + 1] = this.lengthArray[j];
					this.lengthArray[j] = temp;
				}
			}
		}
		if (this.isLeft == true) this.textSprite.graphics.beginFill(0x808080);
		if (this.isLeft == false) this.textSprite.graphics.beginFill(0x008000);
		this.textSprite.graphics.drawRect(0, 0, this.lengthArray[0], (this.stringArray.length - 1) * 60);
		this.textSprite.graphics.endFill();
	}
	/**
	 * 文本分割
	 * @param 要分割文字开始的位置
	 * @param 要分割的文字
	 */
	public createText(i: number, _text: string) {
		this.stringNum += i;
		let firstText: egret.TextField = new egret.TextField();
		for (let i = this.stringNum; i < _text.length; i++) {
			if (firstText.width <= 300) {
				firstText.text += _text[i];
			}
		}
		//如果输入文字的宽度大于300，判断最后字母是否有表情
		var remNum: number = 0;
		if (firstText.width >= 290) {
			for (let i = firstText.text.length - 3; i < firstText.text.length; i++) {
				if (firstText.text[i] == '&') {
					remNum = firstText.text.length - i;
				}
			}
		}
		firstText.text=firstText.text.substring(remNum-1,firstText.text.length-remNum)
		this.stringArray.push(firstText.text);
		if (this.stringNum < _text.length) {
			this.createText(firstText.text.length, _text)
		}
	}
}