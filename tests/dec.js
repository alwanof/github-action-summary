import { ClientFunction, Selector } from 'testcafe';

import decPage from '../pages/DecPage';

require('dotenv').config();

const getURL = ClientFunction(() => window.location.href);
const data=require('../data/data.json');

fixture`Decentraland Page`
    .page`${process.env.BASE_URL}/metaverse/decentraland`
    
test('User should be able to access decentraland page', async t => {
   
    // checking the decentraland title
    console.log("checking the decentraland title");
    await  t
        .expect(decPage.title.textContent).eql(`${data.metadec.title}`);

    // checking the total land
    console.log("checking the decentraland total land");
    var num=await decPage.totalLand.innerText;
    const totalLand = Number(num.replace(/[^0-9.-]+/g,""));
    await t
        .expect(totalLand).gt(0);
    
    // checking the land for sale
    console.log("checking the decentraland land for sale");
    num=await decPage.land4sale.innerText;
    const land4sale = Number(num.replace(/[^0-9.-]+/g,""));
    await t
        .expect(land4sale).gt(0);
    
    // checking the floor price
    console.log("checking the decentraland floor price");
    num=await decPage.floorPrice.innerText;
    const floorPrice = Number(num.replace(/[^0-9.-]+/g,""));
    await t
        .expect(floorPrice).gt(0);
    
    // checking the total volume
    console.log("checking the decentraland total volume");
    num=await decPage.totalVolume.innerText;
    const totalVolume = Number(num.replace(/[^0-9.-]+/g,""));
    await t
        .expect(totalVolume).gt(0);
    
    // checking the avg 90 price
    console.log("checking the decentraland avg 90 price");
    num=await decPage.avg90Price.innerText;
    const avg90Price = Number(num.replace(/[^0-9.-]+/g,""));
    await t
        .expect(avg90Price).gt(0);
    
    // checking the avg 90 volume
    console.log("checking the decentraland avg 90 volume");
    num=await decPage.avg90Volume.innerText;
    const avg90Volume = Number(num.replace(/[^0-9.-]+/g,""));
    await t
        .expect(avg90Volume).gt(0);

});

test('On decentraland, User should be able to access land popup details from the list', async t => {
    
    // checking the list item
    console.log("checking the decentraland list item");
    await t
    .click(decPage.listItem);

    // checking the land popup details
    console.log("checking the decentraland land decentralandpopup details");
    var num=await decPage.landPopupPrice.innerText;
    const landPrice = Number(num.replace(/[^0-9.-]+/g,""));
    await t
        .expect(landPrice).gt(0);

       
   

});

test('On decentraland, User should be able to see map', async t => {  
    // checking the map
    console.log("checking the decentraland map");
    await t
    .wait(12000)
    .expect(decPage.mapCanvas.exists).ok();
    
});