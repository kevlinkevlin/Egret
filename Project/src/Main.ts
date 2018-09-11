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
    private topMask:egret.Shape;
    private result:egret.Bitmap = new egret.Bitmap();
    private result2:egret.Bitmap = new egret.Bitmap();
    private result3:egret.Bitmap = new egret.Bitmap();
    private speed:number = 5;
    private createGameScene() {
        
 
        var texture:egret.Texture = RES.getRes("Mario_png");
        this.result.texture = texture;
        this.result.touchEnabled = true;
        this.result.x = this.stage.stageWidth/7;
        this.result.y = this.stage.stageHeight/2;
        this.result.scaleX = 0.5;
        this.result.scaleY = 0.5;
        this.addChild(this.result);
        //this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.Move,this);
        //this.result.addEventListener(egret.Event.ENTER_FRAME,this.Move,this)
        this.result2.texture = texture;
        this.result2.touchEnabled = true;
        this.result2.x = this.stage.stageWidth/3;
        this.result2.y = this.stage.stageHeight/2;
        this.result2.scaleX = 0.5;
        this.result2.scaleY = 0.5;
        this.addChild(this.result2);
        this.result2.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>
        this.talk(this.result2
        ,Math.abs(this.result.x-(this.result2.x-this.result.width/2))*this.speed
        ,"456"),this);



        this.result3.texture = texture;
        this.result3.touchEnabled = true;
        this.result3.x = this.stage.stageWidth*2/3;
        this.result3.y = this.stage.stageHeight/2;
        this.result3.scaleX = 0.5;
        this.result3.scaleY = 0.5;
        this.addChild(this.result3);
        this.result3.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>
        this.talk(this.result3
        ,Math.abs(this.result.x-(this.result3.x-this.result.width/2))*this.speed
        ,"123"),this);
    } 

    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
   
    private fixed:boolean = false;
    private talk(char:egret.Bitmap,time:number,text:string){
        let message = new Dialog();
        if(this.fixed == false){
        this.fixed = true;
        var test =  egret.Tween.get(this.result);
        test.to({x:char.x-this.result.width/2,y:char.y},time).call(
            ()=>{this.fixed = false;       
            }
            ,this).call(()=> {
                message.lb_dialog_text.text = text;
                this.addChild(message)
            } ,this);
        
       
        
        }
    }
    
    private timeOnEnterFrame = 0;
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
    private createBitmapByName(name: string) {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
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
}