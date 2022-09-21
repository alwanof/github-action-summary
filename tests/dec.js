import { ClientFunction, Selector } from 'testcafe';

import decPage from '../pages/DecPage';

require('dotenv').config();

const getURL = ClientFunction(() => window.location.href);
const data=require('../data/data.json');

fixture`Decentraland Page`
    .page`${process.env.BASE_URL}/metaverse/decentraland`
    
test('User should be able to access decentraland page', async t => {
   
    console.log("+Trying to read: decentraland title");
    await  t
        .expect(decPage.title.textContent).eql(`${data.metadec.title}`);

    console.log("+Trying to read: decentraland total land");
    var num=await decPage.totalLand.innerText;
    const totalLand = Number(num.replace(/[^0-9.-]+/g,""));
    await t
        .expect(totalLand).gt(0);
    
    
    console.log("+Trying to read: decentraland land for sale");
    num=await decPage.land4sale.innerText;
    const land4sale = Number(num.replace(/[^0-9.-]+/g,""));
    await t
        .expect(land4sale).gt(0);
    
    console.log("+Trying to read: decentraland floor price");
    num=await decPage.floorPrice.innerText;
    const floorPrice = Number(num.replace(/[^0-9.-]+/g,""));
    await t
        .expect(floorPrice).gt(0);
    

    console.log("+Trying to read: decentraland total volume");
    num=await decPage.totalVolume.innerText;
    const totalVolume = Number(num.replace(/[^0-9.-]+/g,""));
    await t
        .expect(totalVolume).gt(0);
    
    console.log("+Trying to read: decentraland avg 90 price");
    num=await decPage.avg90Price.innerText;
    const avg90Price = Number(num.replace(/[^0-9.-]+/g,""));
    await t
        .expect(avg90Price).gt(0);
    
 
    console.log("+Trying to read: decentraland avg 90 volume");
    num=await decPage.avg90Volume.innerText;
    const avg90Volume = Number(num.replace(/[^0-9.-]+/g,""));
    await t
        .expect(avg90Volume).gt(0);

});

test('User .On decentraland, User should be able to access land popup details from the list', async t => {
    
   
    console.log("+Trying to click decentraland list item");
    await t
    .click(decPage.listItem);

    console.log("+Trying to read: decentraland land decentraland details");
    var num=await decPage.landPopupPrice.innerText;
    const landPrice = Number(num.replace(/[^0-9.-]+/g,""));
    await t
        .expect(landPrice).gt(0);

       
   

});

test('User .On decentraland, User should be able to see map', async t => {  

   
    console.log("+Trying to fetch: decentraland map");
    await t
    .wait(12000)
    .expect(decPage.mapCanvas.exists).ok();
    
});

test('User .On decentraland, User should be able to search land', async t => {
        
    
        console.log("+Trying to search: decentraland land");
        await t
        .click(decPage.searchInput)
        .typeText(decPage.searchInput,'Mega Tower')
        .wait(5000)
        .click(decPage.resultItem)
        .expect(decPage.resultItem.exists).ok();
        
});

test('User .On decentraland, User should be able to filter by land size', async t => {
        
    
        console.log("+Trying to filter: decentraland land by size");
        await t
        .wait(5000)
        .click(decPage.landSizeInput)
        .wait(5000)
        .click(decPage.landSizeItem)
        .wait(5000)
        .expect(decPage.resultItem.exists).ok();
        
        
});

test('User .On decentraland, User should be able to filter by land price', async t => {
            
        
            console.log("+Trying to filter: decentraland land by price");
            await t
            .click(decPage.landPriceInput)
            .wait(5000)
            .click(decPage.landPriceFrom)
            .typeText(decPage.landPriceFrom,'1000')
            .click(decPage.landPriceTo)
            .typeText(decPage.landPriceTo,'5000')
            .wait(5000)
            .click(decPage.landPriceSave)
            .wait(5000)
            .expect(decPage.resultItem.exists).ok();
            
            
    });

test('User .On decentraland, User should be able to sort lands', async t => {
                    
     console.log("+Trying to sort: decentraland lands");
     await t
        .wait(5000)
        .click(decPage.landSort)
        .wait(5000)
        .click(decPage.landSortItem)
        .wait(5000)
        .expect(decPage.resultItem.exists).ok();
                
                
});

