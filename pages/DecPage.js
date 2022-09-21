import { Selector, t } from 'testcafe';
require('dotenv').config();
class DecPage{
     constructor() {
        
        this.title = Selector("h1:nth-child(1)");
        this.totalLand=Selector('dt').withExactText('Total lands').prevSibling(); 
        this.land4sale=Selector('dt').withExactText('Lands for sale').prevSibling();
        this.floorPrice=Selector('dt').withExactText('Floor price').prevSibling();
        this.totalVolume=Selector('dt').withExactText('Total volume').prevSibling();
        this.avg90Price=Selector('.actions > div:nth-child(2) > dl:nth-child(1) > dd:nth-child(1)');
        this.avg90Volume=Selector('.actions > div:nth-child(3) > dl:nth-child(1) > dd:nth-child(1)');
        this.listItem=Selector('button').withText('ETH');
        this.landPopupPrice=Selector('.css-1mu8ur2 > div:nth-child(2) > div:nth-child(1)');
        this.mapCanvas=Selector('.react-tile-map canvas');

        this.searchInput=Selector('input').withAttribute('placeholder','Search land');
        this.resultItem=Selector('button').withText('ETH');

        this.landSizeInput=Selector('input').withAttribute('placeholder','Any land size');
        this.landSizeItem=Selector("#\\:R4pqestiq6\\:-option-0 .css-19qhjgj");
        

        this.landPriceInput=Selector('input').withAttribute('placeholder','Choose price range');
        this.landPriceFrom=Selector('input').withAttribute('placeholder','From');
        this.landPriceTo=Selector('input').withAttribute('placeholder','To');
        this.landPriceSave=Selector('button').withExactText('Save');

        this.landSort=Selector('input').withAttribute('value','Recently listed');
        this.landSortItem=Selector("#\\:R4qqestiq6\\:-option-3");

    }
    
}
export default new DecPage();