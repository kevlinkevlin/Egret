class Main extends eui.UILayer {

//繼承DisplayObjectContainer
/*
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
    */
//

private position(target:egret.Sprite,x:number,y:number,anchorX:number,anchorY:number,scaleX:number,scaleY:number)
    {
        target.x = x;
        target.y = y;
        target.scaleX = scaleX;
        target.scaleY = scaleY;
        target.anchorOffsetX = anchorX;
        target.anchorOffsetY = anchorY
    }
private animation(factory:dragonBones.EgretFactory,Spine:string,animation:string,target:egret.Sprite){
        var Armature:dragonBones.Armature = factory.buildArmature( Spine );
        var dispWorrior = Armature.getDisplay(); 
        Armature.animation.gotoAndPlay(animation);
        dragonBones.WorldClock.clock.add(Armature);
        target.addChild(dispWorrior);
        this.addChild(target);
        return Armature;
    }

   
private talk(target:any,time:number,text:string,name:string){
        
        var test =  egret.Tween.get(this.char);
        test.to({x:target.x-this.char.width/2,y:target.y},time).call(()=> {
                 this.message.lb_dialog_text.text = text;
                 this.message.char_name.text = name;
                this.addChild(this.message);
                this.fixed = false; 
                
                
            } ,this);
            return test;
        }
private createDragonbones( factory:dragonBones.EgretFactory, directory:string ){
    var skeletonData = RES.getRes( directory + "_ske_json" );
    var textureData = RES.getRes( directory + "_tex_json" );
    var texture = RES.getRes( directory + "_tex_png" );
    factory.addSkeletonData(dragonBones.DataParser.parseDragonBonesData(skeletonData));
    factory.addTextureAtlas(new dragonBones.EgretTextureAtlas(texture, textureData));  }  
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



//繼承UIlayer
protected createChildren(): void {
        super.createChildren();
 
        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }
        
        //inject the custom material parser
        //注入自定義素材解析器
        let assetAdapter = new AssetAdapter();
        let theme = new eui.Theme("resource/default.thm.json", this.stage);
			
        egret.registerImplementation("eui.Theme", theme);
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        

        this.runGame().catch(e => {
            console.log(e);
        })
    }

//
    
private async runGame() {
        await this.loadResource()
        this.createGameScene();
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





//變數
    private textfield: egret.TextField;
    private bg:egret.Bitmap = new egret.Bitmap();
    private char:egret.Sprite = new egret.Sprite();
    private char2:egret.Sprite = new egret.Sprite();
    private char3:egret.Sprite = new egret.Sprite();
    private char4:egret.Sprite = new egret.Sprite();
    /*
    private char2:egret.Bitmap = new egret.Bitmap();
    private char3:egret.Bitmap = new egret.Bitmap();
    private char4:egret.Bitmap = new egret.Bitmap();
    */
    
    private message:Dialog = new Dialog();
    private time:number = 5;
    private stage1:boolean = true;
    private stage2:boolean = false;
    public fixed:boolean = false;
//
    private createGameScene() {
        
        
        this.createBitmapByName(this.bg,"bg_jpg",0,this.stage.stageHeight/2,0.5,0.3);
/*
        this.createBitmapByName(this.char2,"Mario_png",this.stage.stageWidth*2/4,this.stage.stageHeight*3/8,0.3,0.3);
        this.createBitmapByName(this.char3,"Mario_png",this.stage.stageWidth*3/4,this.stage.stageHeight*3/8,0.3,0.3);
        this.createBitmapByName(this.char4,"Mario_png",this.stage.stageWidth*2/4,this.stage.stageHeight*9/16,0.3,0.3);
        this.createBitmapByName(this.char,"Mario_png",this.stage.stageWidth /4,this.stage.stageHeight*3/8,0.3,0.3);
*/
        var factory = new dragonBones.EgretFactory();
  //      this.createDragonbones( factory, "Cat" );
          this.createDragonbones( factory, "star_char" );
        this.animation(factory,"char2","Idle",this.char2);
        this.animation(factory,"char3","Idle",this.char3);
        this.animation(factory,"char4","Idle",this.char4);
        var cat = this.animation(factory,"char","Idle",this.char);   //賦予參數以便調整動畫
        //this.animation(factory,"Cat","Idle",this.char).animation.gotoAndPlay("Run");
/*
        var char1:dragonBones.Armature = factory.buildArmature( "Cat" );
        var dispWorrior = char1.getDisplay(); 
        dragonBones.WorldClock.clock.add(char1);
        char1.animation.gotoAndPlay("Idle");
        this.char.addChild(dispWorrior);
        this.addChild(this.char);
*/
      
        this.char.x = this.stage.stageWidth/4;
        this.char.y = this.stage.stageHeight*3/8;
        this.char.scaleX = 2;
        this.char.scaleY = 2;
        this.char.anchorOffsetX = this.char.width/2+10;
        this.char.anchorOffsetY = this.char.height/2-31;

        this.position(this.char2,this.stage.stageWidth*2/4,this.stage.stageHeight*3/8,this.char.width/2,this.char.height/2-31,2.2,2.2);
        this.position(this.char3,this.stage.stageWidth*5/8,this.stage.stageHeight*3/8,this.char.width/2,this.char.height/2-31,2.2,2.2);
        this.position(this.char4,this.stage.stageWidth*2/4,this.stage.stageHeight*9/16,this.char.width/2,this.char.height/2-29,2.2,2.2);
      
        this.addEventListener( egret.Event.ENTER_FRAME, function():void{
          dragonBones.WorldClock.clock.advanceTime( 0.05 );
        }, this );
        
        this.char2.touchEnabled = true;
        this.char3.touchEnabled = true;
        this.char4.touchEnabled = true;
        
        this.char2.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
        
//
        if(this.fixed ==false)
        {
         this.fixed = true;
         cat.animation.gotoAndPlay("Run");
        if(this.stage1 == true)
        {
        
        this.talk(this.char2
        ,Math.abs(this.char.x-(this.char2.x-this.char.width/2))*this.time
        ,"角色2","シャロン").call(()=>{cat.animation.gotoAndPlay("Idle");
        
//第二段對話
        this.message.textedit = "?????";
        
        
        },this);
        }else if(this.stage2 == true)
        { 
        egret.Tween.get(this.char)
        .to({x:this.stage.stageWidth*3/8+35,y:this.stage.stageHeight*4/8+10},this.time*150)
        .to({x:this.stage.stageWidth/4},this.time*200)
        .to({y:this.stage.stageHeight*7/16+20},this.time*50)
        .to({x:this.stage.stageWidth/4+40},this.time*50)
        .to({x:this.stage.stageWidth*3/8+30,y:this.stage.stageHeight*3/8},this.time*200)
        //,Math.pow((this.char.x-this.stage.stageWidth*3/8)^2+(this.char.y-this.stage.stageHeight*3/8)^2,0.5)*this.time)
        .call(()=>{
        this.talk(this.char2
        ,Math.abs(this.char.x-(this.char2.x-this.char.width/2))*this.time
        ,"角色2","シャロン").call(()=>{cat.animation.gotoAndPlay("Idle");
        },this);
        this.stage1 = true;
        this.stage2 = false;
        },this)
        }
//
       
        }},this);
        


        this.char3.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
        
//

        if(this.fixed ==false)
        {
        this.fixed = true;
        cat.animation.gotoAndPlay("Run");
        if(this.stage1 == true){
        this.talk(this.char3
        ,Math.abs(this.char.x-(this.char3.x-this.char.width/2))*this.time
        ,"角色3","アルティナ").call(()=>{cat.animation.gotoAndPlay("Idle");
        },this);
        }else if (this.stage2 == true)
        {
        egret.Tween.get(this.char)
        .to({x:this.stage.stageWidth*3/8+35,y:this.stage.stageHeight*4/8+10},this.time*150)
        .to({x:this.stage.stageWidth/4},this.time*200)
        .to({y:this.stage.stageHeight*7/16+20},this.time*50)
        .to({x:this.stage.stageWidth/4+40},this.time*50)
        .to({x:this.stage.stageWidth*3/8+30,y:this.stage.stageHeight*3/8},this.time*200)
        //,Math.pow((this.char.x-this.stage.stageWidth*3/8)^2+(this.char.y-this.stage.stageHeight*3/8)^2,0.5)*this.time)
        .call(()=>{
        this.talk(this.char3
        ,Math.abs(this.char.x-(this.char3.x-this.char.width/2))*this.time
        ,"角色3","アルティナ").call(()=>{cat.animation.gotoAndPlay("Idle");
        },this);
        this.stage1 = true;
        this.stage2 = false;}
        ,this)
        }
//
       
        }},this);



        this.char4.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
        
//
     
        if(this.fixed ==false)
        {
        cat.animation.gotoAndPlay("Run");
        this.fixed = true;
        if(this.stage1 == true)
        {
        egret.Tween.get(this.char)
        .to({x:this.stage.stageWidth*3/8+30,y:this.stage.stageHeight*3/8},this.time*200)
        .to({x:this.stage.stageWidth/4+40,y:this.stage.stageHeight*7/16+20},this.time*200)
        .to({x:this.stage.stageWidth/4},this.time*50)
        .to({y:this.stage.stageHeight*4/8+10},this.time*50)
        .to({x:this.stage.stageWidth*3/8+35,y:this.stage.stageHeight*4/8+10},this.time*150)
        //,Math.pow((this.char.x-this.stage.stageWidth/4)^2+(this.char.y-this.stage.stageHeight*4/8)^2,0.5)*this.time)
        .call(()=>{
        this.talk(this.char4
        ,Math.abs(this.char.x-(this.char4.x-this.char.width/2))*this.time
        ,"角色4","里維").call(()=>{cat.animation.gotoAndPlay("Idle");
        },this);
        this.stage1 = false;
        this.stage2 = true;},this)
         }else if(this.stage2 == true)
        { 
        this.fixed = true;
        this.talk(this.char4
        ,Math.abs(this.char.x-(this.char4.x-this.char.width/2))*this.time
        ,"角色4","里維").call(()=>{cat.animation.gotoAndPlay("Idle");
        },this);
        
        }
//
        
        }},this);

} 

    }