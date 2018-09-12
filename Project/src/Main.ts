class Main extends egret.DisplayObjectContainer {



    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin

            context.onUpdate = () => {

            }
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());

        this.runGame().catch(e => {
            console.log(e);
        })



    }

    private async runGame() {
        await this.loadResource()
        this.createGameScene();
        const result = await RES.getResAsync("description_json")
        this.startAnimation(result);
        await platform.login();
        const userInfo = await platform.getUserInfo();
        console.log(userInfo);

    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            
            await RES.loadGroup("preload", 0, loadingView);
            await RES.loadGroup("UI", 0, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }
 
    


    private textfield: egret.TextField;

    /**
     * 创建游戏场景
     * Create a game scene
     */
    private bg:egret.Bitmap = new egret.Bitmap();
    private char:egret.Bitmap = new egret.Bitmap();
    private char2:egret.Bitmap = new egret.Bitmap();
    private char3:egret.Bitmap = new egret.Bitmap();
    private char4:egret.Bitmap = new egret.Bitmap();
    private time:number = 5;
    private stage1:boolean = true;
    private stage2:boolean = false;
    private fixed:boolean = false;
    private createGameScene() {
        this.createBitmapByName(this.bg,"船艙背景_jpg",0,this.stage.stageHeight/2,0.5,0.3);
        this.createBitmapByName(this.char2,"Mario_png",this.stage.stageWidth*2/4,this.stage.stageHeight*3/8,0.3,0.3);
        this.createBitmapByName(this.char3,"Mario_png",this.stage.stageWidth*3/4,this.stage.stageHeight*3/8,0.3,0.3);
        this.createBitmapByName(this.char4,"Mario_png",this.stage.stageWidth*2/4,this.stage.stageHeight*9/16,0.3,0.3);
        this.createBitmapByName(this.char,"Mario_png",this.stage.stageWidth /4,this.stage.stageHeight*3/8,0.3,0.3);      
        this.char2.touchEnabled = true;
        this.char3.touchEnabled = true;
        this.char4.touchEnabled = true;
        
        this.char2.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
        if(this.stage1 == true && this.fixed == false)
        {
        this.fixed = true;
        this.talk(this.char2
        ,Math.abs(this.char.x-(this.char2.x-this.char.width/2))*this.time
        ,"角色2")
        }else if(this.stage2 == true && this.fixed == false)
        { 
        this.fixed = true;
        egret.Tween.get(this.char)
        .to({x:this.stage.stageWidth/4,y:this.stage.stageHeight*4/8},Math.abs(this.char.x-this.stage.stageWidth*5/8)*this.time)
        .to({x:this.stage.stageWidth*3/8,y:this.stage.stageHeight*3/8},this.time*150)
        //,Math.pow((this.char.x-this.stage.stageWidth*3/8)^2+(this.char.y-this.stage.stageHeight*3/8)^2,0.5)*this.time)
        .call(()=>{
        this.talk(this.char2
        ,Math.abs(this.char.x-(this.char2.x-this.char.width/2))*this.time
        ,"角色2")
        this.stage1 = true;
        this.stage2 = false;}
        ,this)
        }},this);
        

        this.char3.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
        if(this.stage1 == true && this.fixed == false){
        this.talk(this.char3
        ,Math.abs(this.char.x-(this.char3.x-this.char.width/2))*this.time
        ,"角色3")
        }else if (this.stage2 ==true && this.fixed == false)
        {
        this.fixed = true;
        egret.Tween.get(this.char)
        .to({x:this.stage.stageWidth/4,y:this.stage.stageHeight*4/8},Math.abs(this.char.x-this.stage.stageWidth*5/8)*this.time)
        .to({x:this.stage.stageWidth*3/8,y:this.stage.stageHeight*3/8},this.time*150)
        //,Math.pow((this.char.x-this.stage.stageWidth*3/8)^2+(this.char.y-this.stage.stageHeight*3/8)^2,0.5)*this.time)
        .call(()=>{
        this.talk(this.char3
        ,Math.abs(this.char.x-(this.char3.x-this.char.width/2))*this.time
        ,"角色3")
        this.stage1 = true;
        this.stage2 = false;}
        ,this)
        }},this);

        this.char4.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
        if(this.stage1 ==true && this.fixed == false)
        {
        this.fixed = true;
        egret.Tween.get(this.char)
        .to({x:this.stage.stageWidth*3/8},Math.abs(this.char.x-this.stage.stageWidth*3/8)*this.time)
        .to({x:this.stage.stageWidth/4,y:this.stage.stageHeight*4/8},this.time*150)
        //,Math.pow((this.char.x-this.stage.stageWidth/4)^2+(this.char.y-this.stage.stageHeight*4/8)^2,0.5)*this.time)
        .call(()=>{
        this.talk(this.char4
        ,Math.abs(this.char.x-(this.char4.x-this.char.width/2))*this.time
        ,"角色24");
        this.stage1 = false;
        this.stage2 = true;},this)
         }else if(this.stage2 == true && this.fixed == false)
        { 
        this.fixed = true;
        this.talk(this.char4
        ,Math.abs(this.char.x-(this.char4.x-this.char.width/2))*this.time
        ,"角色4")}
        },this);

} 

    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
   
   
    private talk(target:egret.Bitmap,time:number,text:string){
        let message = new Dialog();
        var test =  egret.Tween.get(this.char);
        test.to({x:target.x-this.char.width/2,y:target.y},time).call(()=> {
                message.lb_dialog_text.text = text;
                this.addChild(message)
                this.fixed = false;
            } ,this);
        
        }
    
    private timeOnEnterFrame = 0;
    
    private createBitmapByName(result:egret.Bitmap,name:string, x:number, y:number,scalex:number,scaley:number):void {
        
        var texture:egret.Texture = RES.getRes(name);
        result.texture = texture;
        result.scaleX = scalex
        result.scaleY = scaley;
        result.anchorOffsetX = result.width / 2;
        result.anchorOffsetY = result.height / 2;
        result.x = x;
        result.y = y;
        this.addChild(result);
    }

    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    private startAnimation(result: string[]) {
        let parser = new egret.HtmlTextParser();

        let textflowArr = result.map(text => parser.parse(text));
        let textfield = this.textfield;
        let count = -1;
        let change = () => {
            count++;
            if (count >= textflowArr.length) {
                count = 0;
            }
            let textFlow = textflowArr[count];

            // 切换描述内容
            // Switch to described content
            textfield.textFlow = textFlow;
            let tw = egret.Tween.get(textfield);
            tw.to({ "alpha": 1 }, 200);
            tw.wait(2000);
            tw.to({ "alpha": 0 }, 200);
            tw.call(change, this);
        };

        change();
    }
    private Move(evt:egret.TouchEvent){
       /* 
        var now = egret.getTimer();
        var time = this.timeOnEnterFrame;
        var pass = now - time;
       this.timeOnEnterFrame = egret.getTimer();
        var tx:number = evt.localX;
        var ty:number = evt.localY;
       //  this.result.x += this.speed*pass;
               // tx = Math.max(0,tx);
               // tx = Math.min(this.stage.stageWidth-this.topMask.width/2,tx);
              this.stage.addEventListener(egret.Event.ENTER_FRAME,()=>{
               if(tx>this.result.x)
               { this.result.x += this.speed*pass;}
               else if(tx<this.result.x)
               { this.result.x -= this.speed*pass;}
              },this);


             if(Math.abs(tx-this.result.x)<10){
                  this.stage.removeEventListener(egret.Event.ENTER_FRAME,()=>{
               if(tx>this.result.x)
               { this.result.x += this.speed*pass;}
               else if(tx<this.result.x)
               { this.result.x -= this.speed*pass;}
              },this)
              this.result.x = tx;
              }
                   */
                
               // this.result.y = ty;
            }
}