import { ClientFunction, Selector } from 'testcafe';

import somPage from '../pages/SomPage';

require('dotenv').config();

const getURL = ClientFunction(() => window.location.href);
const data=require('../data/data.json');

fixture`Somnium Page`
    .page`${process.env.BASE_URL}/metaverse/somniumspace`
    
test('User should be able to access somnium page', async t => {
   
   // checking the somnium title
    console.log("checking the somnium title");
    await  t
        .expect(somPage.title.textContent).eql(`${data.metasom.title}`);

    // checking the total land
    console.log("checking the somnium total land");
    var num=await somPage.totalLand.innerText;
    const totalLand = Number(num.replace(/[^0-9.-]+/g,""));
    await t
        .expect(totalLand).gt(0);
    
    // checking the land for sale
    console.log("checking the somnium land for sale");
    num=await somPage.land4sale.innerText;
    const land4sale = Number(num.replace(/[^0-9.-]+/g,""));
    await t
        .expect(land4sale).gt(0);
    
    // checking the floor price
    console.log("checking the somnium floor price");
    
    num=await somPage.floorPrice.innerText;
    const floorPrice = Number(num.replace(/[^0-9.-]+/g,""));
    await t
        .expect(floorPrice).gt(0);
    // checking the total volume
    console.log("checking the somnium total volume");
    num=await somPage.totalVolume.innerText;
    const totalVolume = Number(num.replace(/[^0-9.-]+/g,""));
    await t
        .expect(totalVolume).gt(0);
    // checking the avg 90 price
    console.log("checking the somnium avg 90 price");
    num=await somPage.avg90Price.innerText;
    const avg90Price = Number(num.replace(/[^0-9.-]+/g,""));
    await t
        .expect(avg90Price).gt(0);
    // checking the avg 90 volume
    console.log("checking the somnium avg 90 volume");
    num=await somPage.avg90Volume.innerText;
    const avg90Volume = Number(num.replace(/[^0-9.-]+/g,""));
    await t
        .expect(avg90Volume).gt(0);
});

test('On somniumspace, User should be able to access land popup details from the list', async t => {
    // checking the list item
    console.log("checking the somnium list item");
    await t
    .click(somPage.listItem);
    // checking the land popup details
    console.log("checking the somnium land popup details");
    var num=await somPage.landPopupPrice.innerText;
    const landPrice = Number(num.replace(/[^0-9.-]+/g,""));
    await t
        .expect(landPrice).gt(0);

       
   

});

test('On somniumspace, User should be able to see map', async t => {  
    // checking the somnium map
    console.log("checking the somnium map");
    await t
    .wait(12000)
    .expect(somPage.mapCanvas.exists).ok();
    
});