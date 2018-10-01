class EButton extends eui.Button implements eui.UIComponent {
	private w: number;
	private h: number;
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, () => {
			this.w = this.width;
			this.h = this.height;
			this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, () => {
				this.width -= 2;
				this.height -= 2;
			}, this)
			this.addEventListener(egret.TouchEvent.TOUCH_END, () => {
				this.width = this.w;
				this.height = this.h;
			}, this)

			this.addEventListener(egret.TouchEvent.TOUCH_CANCEL, () => {
				this.width = this.w;
				this.height = this.h;
			}, this)

			this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, () => {
				this.width = this.w;
				this.height = this.h;
			}, this)
		}, this)
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
	}

}