
class Main extends egret.DisplayObjectContainer {
    
    public constructor() {
        super();
        this.once( egret.Event.ADDED_TO_STAGE, this.onAddToStage, this );
    }

    private onAddToStage(event:egret.Event) {
        var imgLoader:egret.ImageLoader = new egret.ImageLoader;
        imgLoader.once( egret.Event.COMPLETE, this.imgLoadHandler, this );
       // imgLoader.load( "resource/cartoon-egret_00.png" );
       imgLoader.load("resource/project/1.PNG");
       
    }

    private _bird:egret.Bitmap;
    private _txInfo:egret.TextField;
    
    private _vcLocation:Array<egret.Point>;
    private _idxCurrLocation:number;

    private imgLoadHandler( evt:egret.Event ):void{
        
     
        var bmd = new egret.Texture;
        bmd.bitmapData = evt.currentTarget.data;
        
        this._vcLocation = [
       
        
            new egret.Point( this.stage.stageWidth/2,this.stage.stageHeight - bmd.textureHeight *2 ),
            new egret.Point( this.stage.stageWidth/2 ,  this.stage.stageHeight/2 )
            
        ]
        
        this._bird = new egret.Bitmap( bmd );
        this._bird.touchEnabled = true;
        this._bird.addEventListener(egret.TouchEvent.TOUCH_TAP,this.launchTween,this);
        this._bird.anchorOffsetX = bmd.textureWidth/2;
        this._bird.anchorOffsetY = bmd.textureHeight/2;
        this.addChild( this._bird );
       
        /// 提示信息
        this._txInfo = new egret.TextField;
        this.addChild( this._txInfo );

        this._txInfo.size = 55;
        this._txInfo.x = 50;
        this._txInfo.y = 50;
        this._txInfo.width = this.stage.stageWidth -50;
        this._txInfo.textAlign = egret.HorizontalAlign.CENTER;
        this._txInfo.textColor = 0x000000;
        this._txInfo.type = egret.TextFieldType.DYNAMIC;
        this._txInfo.lineSpacing = 6;
        this._txInfo.multiline = true;
        
        this._txInfo.text =
                "點擊圖像觸發動作";
        
   /*     this.stage.addEventListener( egret.TouchEvent.TOUCH_TAP, ()=>{
            this.launchTween();
        }, this );
*/
        /// 开启显示
        this._idxCurrLocation = -1;
        this.updateRdmLocation( true );
    }
    
    private updateRdmLocation( bApply:boolean = false ):egret.Point {
        var vcIdxLocation = [0,1];
        if( this._idxCurrLocation != -1 ){     /// 避免与之前选择雷同
            vcIdxLocation.splice( this._idxCurrLocation, 1 );
        }
        var loc:egret.Point = this._vcLocation[ this._idxCurrLocation = vcIdxLocation[ Math.floor( Math.random()*vcIdxLocation.length ) ] ];
        if( bApply ){
            this._bird.x = loc.x;
            this._bird.y = loc.y;
            this._bird.scaleX = 3;
            this._bird.scaleY = 3;
        }
        return loc;
    }
    
    private launchTween(){
        var loc:egret.Point = this.updateRdmLocation();

        /*** 本示例关键代码段开始 ***/
        var funcChange = ():void=>{
            //this._bird.rotation += 6 * iDirection;
        }
        var iDirection:number = Math.random() > .5 ? -1 : 1;    /// 随机方向
        egret.Tween.get( this._bird, { onChange:funcChange, onChangeObj:this } )
            .to( {x:loc.x,y:loc.y}, 300, egret.Ease.sineIn );
        /*** 本示例关键代码段结束 ***/
    }
    
}


