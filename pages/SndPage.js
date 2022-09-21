import { Selector, t } from 'testcafe';
require('dotenv').config();
class SndPage{
     constructor() {
        
        this.title = Selector("h1:nth-child(1)");
        this.totalLand=Selector('dt').withExactText('Total lands').prevSibling(); 
        this.land4sale=Selector('dt').withExactText('Lands for sale').prevSibling();
        this.floorPrice=Selector('dt').withExactText('Floor price').prevSibling();
        this.totalVolume=Selector('dt').withExactText('Total volume').prevSibling();

        this.avg90Price=Selector('.actions > div:nth-child(2) > dl:nth-child(1) > dd:nth-child(1)');
        this.avg90Volume=Selector('.actions > div:nth-child(3) > dl:nth-child(1) > dd:nth-child(1)');
       
        //this.listItem=Selector('div.css-y4sucr:nth-child(1) > button:nth-child(1)');
        this.listItem=Selector('button').withText('ETH');
       
       
        this.landPopupPrice=Selector('.css-1mu8ur2 > div:nth-child(2) > div:nth-child(1)');

        this.mapCanvas=Selector('.react-tile-map canvas');
        
        
    }
    
}
export default new SndPage();