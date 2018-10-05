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
        
        egret.registerImplementation("eui.IAssetAdapter",new AssetAdapter());
       // egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        

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
            await RES.loadGroup("preload");
            await RES.loadGroup("UI");
           // this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }


//變數

    private textfield: egret.TextField;
    private bg:egret.Bitmap = new egret.Bitmap();
    private char:egret.MovieClip;
    private char2:egret.MovieClip;
    private char3:egret.MovieClip;
    private char4:egret.MovieClip;
    private char5:egret.MovieClip;
    /*
    private char2:egret.Bitmap = new egret.Bitmap();
    private char3:egret.Bitmap = new egret.Bitmap();
    private char4:egret.Bitmap = new egret.Bitmap();
    */
   // private game:GameScene = new GameScene();
    private message:Dialog = new Dialog();
    private time:number = 5;
    private stage1:boolean = true;
    private stage2:boolean = false;
    public fixed:boolean = false;
    private char2_b:boolean = false;
    private char3_b:boolean = false;
    private char4_b:boolean = false;
    private char5_b:boolean = false;
//
    private createGameScene() {
        
        
        this.createBitmapByName(this.bg,"bg_jpg",0,this.stage.stageHeight/2,0.5,0.3);
/*
        this.createBitmapByName(this.char2,"Mario_png",this.stage.stageWidth*2/4,this.stage.stageHeight*3/8,0.3,0.3);
        this.createBitmapByName(this.char3,"Mario_png",this.stage.stageWidth*3/4,this.stage.stageHeight*3/8,0.3,0.3);
        this.createBitmapByName(this.char4,"Mario_png",this.stage.stageWidth*2/4,this.stage.stageHeight*9/16,0.3,0.3);
        this.createBitmapByName(this.char,"Mario_png",this.stage.stageWidth /4,this.stage.stageHeight*3/8,0.3,0.3);
*/      
        var mcFactory = new egret.MovieClipDataFactory;
        var data = RES.getRes("test_json");
        var txtr = RES.getRes("test_png");
        var mcFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory( data, txtr );
        
/*
        var factory = new dragonBones.EgretFactory();
        this.createDragonbones( factory, "star_char_backup" );
        this.animation(factory,"char2","Idle",this.char2);
        this.animation(factory,"char3","Idle",this.char3);
        this.animation(factory,"char4","Idle",this.char4);
        this.animation(factory,"char5","Idle",this.char5);
*/

        
/*
        var cat = this.animation(factory,"char","Idle",this.char);   //賦予參數以便調整動畫
        this.animation(factory,"Cat","Idle",this.char).animation.gotoAndPlay("Run");
        var char1:dragonBones.Armature = factory.buildArmature( "Cat" );
        var dispWorrior = char1.getDisplay(); 
        dragonBones.WorldClock.clock.add(char1);
        char1.animation.gotoAndPlay("Idle");
        this.char.addChild(dispWorrior);
        this.addChild(this.char);
*/      
     
        this.char = new egret.MovieClip(mcFactory.generateMovieClipData("char"));
        this.char2 = new egret.MovieClip(mcFactory.generateMovieClipData("char2"));
        this.char3 = new egret.MovieClip(mcFactory.generateMovieClipData("char3"));
        this.char4 = new egret.MovieClip(mcFactory.generateMovieClipData("char5"));
        this.char5 = new egret.MovieClip(mcFactory.generateMovieClipData("char4"));

        this.addChild(this.char2);
        this.addChild(this.char3);
        this.addChild(this.char4);
        this.addChild(this.char5);
        this.addChild(this.char);


        this.char.gotoAndPlay("Idle",-1);
        this.char2.gotoAndPlay("Idle",-1);
        this.char3.gotoAndPlay("Idle",-1);
        this.char4.gotoAndPlay("Idle",-1);
        this.char5.gotoAndPlay("Idle",-1);

        this.position(this.char,this.stage.stageWidth/4,this.stage.stageHeight*3/8,0,this.char.height/2-110,0.5,0.5);
        this.position(this.char2,this.stage.stageWidth*2/4+40,this.stage.stageHeight*3/8,this.char2.width/2,this.char2.height/2-90,0.5,0.5);
        this.position(this.char3,this.stage.stageWidth*6/8,this.stage.stageHeight*3/8,this.char3.width/2,this.char3.height/2-90,0.5,0.5);
        this.position(this.char4,this.stage.stageWidth*2/4+90,this.stage.stageHeight*9/16+10,this.char4.width/2,this.char4.height/2-125,0.35,0.35);
        this.position(this.char5,this.stage.stageWidth/8+50,this.stage.stageHeight*4/8+25,this.char5.width/2,this.char5.height/2-90,0.5,0.5);
        this.addEventListener( egret.Event.ENTER_FRAME, function():void{
          dragonBones.WorldClock.clock.advanceTime( 0.05 );
        }, this );
        
        this.char2.touchEnabled = true;
        this.char3.touchEnabled = true;
        this.char4.touchEnabled = true;
        this.char5.touchEnabled = true;
        this.message.char_name.text = "";
        this.message.dialog_name.visible = false;
        this.message.lb_dialog_text.text = "軌跡15周年！參與遊擊士報名的新人們，趕緊在飛行船上認識新夥伴！";
        this.message.name_test = ["新人遊擊士庫洛艾"];
        this.message.dia_test = ["…好緊張呀，前面綁著雙馬尾的姐姐，好像是軌跡系列最有人氣的艾絲蒂雅小姐呢！"]
        this.message.ready_btn.visible = false;
        this.addChild(this.message);
        if(window.parent.document)
        {
          //  window.parent["finishGame"](true)
        }
/*

        let theme = new eui.Theme("resource/default.thm.json", this.stage);
        theme.addEventListener(eui.UIEvent.COMPLETE, this.onThemeLoadComplete, this);

*/

        this.char2.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
         
//      
       if(this.fixed == false)
        {
        this.fixed = true;
        if(this.char2_b == false){
        this.message.name_test = ["艾蒂莉亞","庫洛艾","艾蒂莉亞"];
        this.message.dia_test = ["咦，妳是新來的遊擊士嗎？看起來呆萌呆萌的，趕緊和大夥們匯合呀"
        ,"是..！這艘飛空艇上好像有各代軌跡系列的人氣角色都在呢！"
        ,"那當然囉，超過70位超人氣軌跡系列角色外，還能和過往的Boss成為夥伴呢~~新的軌跡，你看的見！"]
        this.message.gameover = true;
        this.message.gameover_name ="艾蒂莉亞" 
        this.message.gameover_dia ="哎呀...欸?這個該不會是..."
        }else{
        if(this.message.completed == false)
        {
        this.message.name_test = ["艾蒂莉亞"];
        this.message.dia_test = ["去找其他人聊聊吧~"]
        }else{
        console.log(this.message.completed)
         this.message.name_test = ["艾蒂莉亞"];
        this.message.dia_test = ["今天天氣真的不錯呢~"]
        }
        }
        this.message.char_name.text = this.message.name_test.shift();
        this.message.lb_dialog_text.text = this.message.dia_test.shift();
         
         this.char.gotoAndPlay("Walk",-1);
        if(this.stage1 == true)
        {
            if(this.char.x > this.char2.x)
            {
                this.char.scaleX = -0.55;
            }

        
        this.talk(this.char2
        ,Math.abs(this.char.x-(this.char2.x-this.char.width/2))*this.time
        ,this.char2_b
        ,1).call(()=>{
            this.char.scaleX = 0.55;
        this.char.gotoAndPlay("Idle",-1);
        
 
        },this)
        }else if(this.stage2 == true)
        { 
        var test = egret.Tween.get(this.char)
        if(this.char.x>=this.char5.x)
        {
        this.char.scaleX = -0.55;
        test.to({x:this.stage.stageWidth*3/8+35,y:this.stage.stageHeight*4/8+10},this.time*150)
        }
        
        test.to({x:this.stage.stageWidth/4},this.time*200).call(()=>{this.char.scaleX = 0.55;},this)
        
        .to({y:this.stage.stageHeight*7/16+20},this.time*50)
        .to({x:this.stage.stageWidth/4+40},this.time*50)
        .to({x:this.stage.stageWidth*3/8+30,y:this.stage.stageHeight*3/8},this.time*200)

        .call(()=>{
        this.talk(this.char2
        ,Math.abs((this.char.x-this.char2.x)+(this.char.y-this.char2.y))*this.time
        ,this.char2_b
        ,1).call(()=>{
        this.char.gotoAndPlay("Idle",-1);
        
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

        if(this.char3_b == false)
        {
        this.message.name_test = ["庫洛艾","黎恩"];
        this.message.dia_test = ["啊！你不是今年《閃之軌跡》IV的男主角黎恩嗎！能和你一起冒險嗎？"
        ,"欸…這個嘛。(打量一下)這當然事沒問題的囉。不過呀，你得先學會SRPG的戰鬥方式，像是戰鬥時施放技能和使用道具上都要注意到回合，並與大家配合呢！"]
        this.message.gameover = true;
        this.message.gameover_name ="黎恩" 
        this.message.gameover_dia ="喔喔..!!你今天看起來運勢不錯呢..."
        }else
        {
        if(this.message.completed == false)
        {
        this.message.name_test = ["黎恩"];
        this.message.dia_test = ["去找其他人聊聊吧~"]
        }else{
        this.message.name_test = ["黎恩","庫洛艾","黎恩","庫洛艾"];
        this.message.dia_test = ["據說用你家主子的貓掌抽獎中獎率會翻倍喔！"
        ,"(恩........會被咬吧(`・ω・´)....)"]
        }
        }
        
        this.message.char_name.text = this.message.name_test.shift();
        this.message.lb_dialog_text.text = this.message.dia_test.shift();


        
        this.char.gotoAndPlay("Walk",-1);
        if(this.stage1 == true){
        this.talk(this.char3
        ,Math.abs(this.char.x-(this.char3.x-this.char.width/2))*this.time
        ,this.char3_b
        ,5).call(()=>{
        this.char.gotoAndPlay("Idle",-1);
        
        },this);
        }else if (this.stage2 == true)
        {
        var test = egret.Tween.get(this.char)
         if(this.char.x>=this.char5.x)
        {
        this.char.scaleX = -0.55;
        test.to({x:this.stage.stageWidth*3/8+35,y:this.stage.stageHeight*4/8+10},this.time*150)
        }
        test.to({x:this.stage.stageWidth/4},this.time*200).call(()=>{this.char.scaleX = 0.55;},this)
        .to({y:this.stage.stageHeight*7/16+20},this.time*50)
        .to({x:this.stage.stageWidth/4+40},this.time*50)
        .to({x:this.stage.stageWidth*3/8+30,y:this.stage.stageHeight*3/8},this.time*200)
        //,Math.pow((this.char.x-this.stage.stageWidth*3/8)^2+(this.char.y-this.stage.stageHeight*3/8)^2,0.5)*this.time)
        .call(()=>{
        this.talk(this.char3
        ,Math.abs(this.char.x-(this.char3.x-this.char.width/2))*this.time
        ,this.char3_b
        ,5).call(()=>{
        this.char.gotoAndPlay("Idle",-1);
        
        },this);
        this.stage1 = true;
        this.stage2 = false;}
        ,this)
        }
//
       
        }},this);



        this.char4.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
        {
//      
        if(this.fixed ==false)
        {
        this.fixed = true;

        if( this.char4_b == false ){
        this.message.name_test = ["庫洛艾"];
        this.message.dia_test = ["還有些很熟悉的人呢，先去看看吧！"]
        this.message.char_name.text = this.message.name_test.shift();
        this.message.lb_dialog_text.text = this.message.dia_test.shift();
        }else{

        if(this.message.completed == false)
        {
        this.message.diamond = true;
        this.message.completed = true        //////遊戲結束
        this.message.gameover = true;
        this.message.gameover_name ="咪西" 
        this.message.gameover_dia ="竟然被你抽到我的薪資袋了Q_Q"
        this.message.name_test = ["庫洛艾","咪西"];
        this.message.dia_test = ["嗨嗨~~小貓咪~~~~~！"
        ,"喵～被發現啦，我、我、我可不是喵呢，我是FB粉絲團的主編哦！這樣～厲害吧，但千萬不要告訴別人我也上飛空艇了！"]
        this.message.char_name.text = this.message.name_test.shift();
        this.message.lb_dialog_text.text = this.message.dia_test.shift();
        this.message.char4_target = true;
        }else
        {   
        this.message.name_test = ["咪西"];
        this.message.dia_test = ["我的薪資袋Q_Q........."]
         this.message.char_name.text = this.message.name_test.shift();
        this.message.lb_dialog_text.text = this.message.dia_test.shift();
        }

        }


        this.char.gotoAndPlay("Walk",-1);
        
        if(this.stage1 == true)
        {
        var test = egret.Tween.get(this.char)
        if(this.char.x >this.stage.stageWidth/4+50)
        {this.char.scaleX = -0.55;}
        if(this.char.x <= this.char2.x)
        {
        test.to({x:this.stage.stageWidth*3/8+30,y:this.stage.stageHeight*3/8},this.time*250)
        }else{
        test.to({x:this.stage.stageWidth*3/8+30,y:this.stage.stageHeight*3/8},this.time*350)
        }
        test.call(()=>{this.char.scaleX = -0.55;},this)
        .to({x:this.stage.stageWidth/4+40,y:this.stage.stageHeight*7/16+20},this.time*200)
        .to({x:this.stage.stageWidth/4},this.time*50).call(()=>{this.char.scaleX = 0.55},this)
        .to({y:this.stage.stageHeight*4/8+10},this.time*50)
        .to({x:this.stage.stageWidth*3/8+35,y:this.stage.stageHeight*4/8+20},this.time*150)
        
        .call(()=>{
        this.talk(this.char4
        ,Math.abs(this.char.x-(this.char4.x-this.char.width/2))*this.time
        ,this.char4_b
        ,4).call(()=>{
        this.char.gotoAndPlay("Idle",-1);
        
        },this);
        this.stage1 = false;
        this.stage2 = true;},this)
         }else if(this.stage2 == true)
        { 
        this.fixed = true;
        if(this.char.x <= this.char5.x )
        {egret.Tween.get(this.char)
        .to({x:this.stage.stageWidth*3/8+35,y:this.stage.stageHeight*4/8+20},this.time*350)
        .call(()=>{
        this.talk(this.char4
        ,Math.abs(this.char.x-(this.char4.x-this.char.width/2))*this.time
        ,this.char4_b
        ,4).call(()=>{
        this.char.gotoAndPlay("Idle",-1);
        
        },this);
        },this)
        }else{


        this.talk(this.char4
        ,Math.abs(this.char.x-(this.char4.x-this.char.width/2))*this.time
        ,this.char4_b
        ,4).call(()=>{
        this.char.gotoAndPlay("Idle",-1);
        
        },this);


        }
        }
        }                 //end
//
        
        }},this);



        this.char5.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
        
//      
     
        if(this.fixed ==false)
        {
        if(this.char5_b == false){
        this.message.name_test = ["庫洛艾","艾莉"];
        this.message.dia_test = ["這位姐姐您好呀！請問這裡…是哪裡呀？"
        ,"這裡可是非常重要的地方呢。想要在塞姆利亞大陸上自由行走，都靠我們搭乘的飛空艇唷！另外妳看看妳手上的導力器，它可是一切能量的來源呢！"]
        this.message.gameover = true;
        this.message.gameover_name ="艾莉" 
        this.message.gameover_dia ="哈哈...是個不錯的開始呢！"
        }else
        {
        if(this.message.completed == false)
        {
        this.message.name_test = ["艾莉"];
        this.message.dia_test = ["快去找其他人聊聊吧~"]
        }else{
        this.message.name_test = ["艾莉","庫洛艾"];
        this.message.dia_test = ["恭喜你抽到大獎!","謝謝妳啦~~~~~~ヽ(●´∀`●)ﾉ"]
        }
        }
        this.message.char_name.text = this.message.name_test.shift();
        this.message.lb_dialog_text.text = this.message.dia_test.shift();


        this.char.gotoAndPlay("Walk",-1);
        this.fixed = true;
        if(this.stage1 == true)
        {
         var test = egret.Tween.get(this.char)
        if(this.char.x >this.stage.stageWidth/4+50)
        {this.char.scaleX = -0.55;}
        if(this.char.x <= this.char2.x)
        {
        test.to({x:this.stage.stageWidth*3/8+30,y:this.stage.stageHeight*3/8},this.time*250)
        }else{
        test.to({x:this.stage.stageWidth*3/8+30,y:this.stage.stageHeight*3/8},this.time*350)
        }
        test.call(()=>{this.char.scaleX = -0.55;},this)
        .to({x:this.stage.stageWidth/4+40,y:this.stage.stageHeight*7/16+20},this.time*200)
        .to({x:this.stage.stageWidth/4},this.time*50)
        .to({y:this.stage.stageHeight*4/8+10},this.time*50)
        .call(()=>{
        this.talk(this.char5
        ,Math.abs(this.char.x-(this.char4.x-this.char.width/2))*this.time
        ,this.char5_b
        ,3).call(()=>{
        this.char.scaleX = 0.55;
        this.char.gotoAndPlay("Idle",-1);
        },this);
        this.stage1 = false;
        this.stage2 = true;},this)


        }
        else if(this.stage2 == true)
        { 
        this.fixed = true;
        if(this.char.x >= this.char5.x)
        {   
        this.char.scaleX = -0.55;
        this.char.gotoAndPlay("Walk",-1);
        egret.Tween.get(this.char)
        .to({x:this.stage.stageWidth*3/8+35,y:this.stage.stageHeight*4/8+10},this.time*150)
        .call(()=>{
        this.talk(this.char5
        ,Math.abs(this.char.x-(this.char5.x-this.char.width/2))*this.time
        ,this.char5_b
        ,3).call(()=>{
        this.char.scaleX = 0.55;
        this.char.gotoAndPlay("Idle",-1);
        },this);
        },this)

        }else{
        this.talk(this.char5
        ,Math.abs(this.char.x-(this.char5.x-this.char.width/2))*this.time
         ,this.char5_b
         ,6).call(()=>{
        this.char.gotoAndPlay("Idle",-1);
        },this);
        }
        
        }
//
        }
        },this);
        

} 
private position(target,x:number,y:number,anchorX:number,anchorY:number,scaleX:number,scaleY:number)
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
private _bool(target:any ,click:boolean)
{
    if(target == this.char2){this.char2_b = true;}
    else if (target == this.char3){this.char3_b = true;}
    else if (target == this.char5){this.char5_b = true;}
    if (this.char2_b == true && this.char3_b == true && this.char5_b == true){this.char4_b = true;}     
}
   
private talk(target:any,time:number,click:boolean,num:number){
        this.message.count = num;
       this._bool(target,click);
        var test = egret.Tween.get(this.char);
        test.to({x:target.x-this.char.width/2,y:target.y},time).call(()=> {
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


private createMovieclip(Factory:egret.MovieClipDataFactory, directory:string ){
    var data = RES.getRes( directory + "_json" );
    var texture = RES.getRes( directory + "_png" );
    Factory = new egret.MovieClipDataFactory( data, texture );
}

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




    }

    /*
     var data = RES.getRes("test_json");
        var txtr = RES.getRes("test_png");
        var mcFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory( data, txtr );
        this.char2 = new egret.MovieClip(mcFactory.generateMovieClipData("char"))
        this.addChild(this.char2);
        this.char2.gotoAndPlay(1,-1);
        this.char2.touchEnabled = true;

    */