import { ClientFunction, Selector } from 'testcafe';

import sndPage from '../pages/SndPage';

require('dotenv').config();

const getURL = ClientFunction(() => window.location.href);
const data=require('../data/data.json');

fixture`Sandbox Page`
    .page`${process.env.BASE_URL}/metaverse/sandbox`
    
test('User should be able to access sandbox page', async t => {
   

    console.log("+Trying to read: sandbox title");
    await  t
        .expect(sndPage.title.textContent).eql(`${data.metasnd.title}`);

  
    console.log("+Trying to read: sandbox total land");
    var num=await sndPage.totalLand.innerText;
    const totalLand = Number(num.replace(/[^0-9.-]+/g,""));
    await t
        .expect(totalLand).gt(0);
    
   
    console.log("+Trying to read: sandbox land for sale");
    num=await sndPage.land4sale.innerText;
    const land4sale = Number(num.replace(/[^0-9.-]+/g,""));
    await t
        .expect(land4sale).gt(0);
    

    console.log("+Trying to read: sandbox floor price");
    num=await sndPage.floorPrice.innerText;
    const floorPrice = Number(num.replace(/[^0-9.-]+/g,""));
    await t
        .expect(floorPrice).gt(0);
    

    console.log("+Trying to read: sandbox total volume");
    num=await sndPage.totalVolume.innerText;
    const totalVolume = Number(num.replace(/[^0-9.-]+/g,""));
    await t
        .expect(totalVolume).gt(0);
    
  
    console.log("+Trying to read: sandbox avg 90 price");
    num=await sndPage.avg90Price.innerText;
    const avg90Price = Number(num.replace(/[^0-9.-]+/g,""));
    await t
        .expect(avg90Price).gt(0);

    console.log("+Trying to read: sandbox avg 90 volume");
    num=await sndPage.avg90Volume.innerText;
    const avg90Volume = Number(num.replace(/[^0-9.-]+/g,""));
    await t
        .expect(avg90Volume).gt(0);

});

test('On sandbox, User should be able to access land popup details from the list', async t => {
    
   
 
   
    console.log("+Trying to click: sandbox list item");
    await t
    .click(sndPage.listItem);

    console.log("+Trying to read: sandbox land popup details");
    var num=await sndPage.landPopupPrice.innerText;
    const landPrice = Number(num.replace(/[^0-9.-]+/g,""));
    await t
        .expect(landPrice).gt(0);

       
   

});

test('On sandbox, User should be able to see map', async t => {  
 
    console.log("+Trying to fetch: sandbox map");
    await t
    .wait(12000)
    .expect(sndPage.mapCanvas.exists).ok();
    
});