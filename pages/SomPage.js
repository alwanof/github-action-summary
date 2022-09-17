import { Selector, t } from 'testcafe';
require('dotenv').config();
class SomPage{
     constructor() {
        
        this.title = Selector("h1:nth-child(1)");
        this.totalLand=Selector('.css-1812swh > div:nth-child(1) > dl:nth-child(1) > dd:nth-child(1)');
        this.land4sale=Selector('.css-1812swh > div:nth-child(1) > dl:nth-child(2) > dd:nth-child(1)');
        this.floorPrice=Selector('.css-1812swh > div:nth-child(2) > dl:nth-child(1) > dd:nth-child(1)');
        this.totalVolume=Selector('.css-1812swh > div:nth-child(2) > dl:nth-child(2) > dd:nth-child(1)');

        this.avg90Price=Selector('.actions > div:nth-child(2) > dl:nth-child(1) > dd:nth-child(1)');
        this.avg90Volume=Selector('.actions > div:nth-child(3) > dl:nth-child(1) > dd:nth-child(1)');

        this.listItem=Selector('div.css-y4sucr:nth-child(1) > button:nth-child(1)');
        this.landPopupPrice=Selector('.css-1mu8ur2 > div:nth-child(2) > div:nth-child(1)');

        this.mapCanvas=Selector('div.leaflet-pane.leaflet-overlay-pane > svg > g');
        //svg.leaflet-zoom-animated > g:nth-child(1)
        
    }
    
}
export default new SomPage();