/**
 * Created by Administrator on 12/21 0021.
 */
class DialogTestRenderer extends eui.ItemRenderer
{
    private lblShow:eui.Label;
    public constructor()
    {
        super();
        this.skinName = DialogTxtRenderer;
    }

    public dataChanged(): void
    {
        super.dataChanged();
        this.lblShow.text = this.data;
    }
}