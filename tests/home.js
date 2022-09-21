import { ClientFunction, Selector } from 'testcafe';

import homePage from '../pages/HomePage';

require('dotenv').config();

const getURL = ClientFunction(() => window.location.href);
const data=require('../data/data.json');

fixture`Home Page`
    .page`${process.env.BASE_URL}`
    
test('User should be able to access home page', async t => {
   
    await  t
    .expect(homePage.title.textContent).eql(`${data.home.title}`);

   
    console.log("+Trying to click on: contact button");

    await t
        .click(homePage.GITBTN)
        .expect(getURL()).contains(`${data.home.contactURL}`)
        .click(homePage.brandLogo)
        .expect(homePage.title.textContent).eql(`${data.home.title}`);

   
    console.log("+Trying to click on: decentraland card");
    await t
        .click(homePage.decCard)
        .expect(getURL()).contains(`${data.home.decURL}`)
        .click(homePage.brandLogo)
        .expect(homePage.title.textContent).eql(`${data.home.title}`);
 
    console.log("+Trying to click on: sandbox card");
    await t
        .click(homePage.sndCard)
        .expect(getURL()).contains(`${data.home.sndURL}`)
        .click(homePage.brandLogo)
        .expect(homePage.title.textContent).eql(`${data.home.title}`);
   
    console.log("+Trying to click on: somnium card");
    await t
        .click(homePage.somCard)
        .expect(getURL()).contains(`${data.home.somURL}`)
        .click(homePage.brandLogo)
        .expect(homePage.title.textContent).eql(`${data.home.title}`);

});

test('User should be able to connnect the wallet', async t => {
       
    console.log("+Trying to click on: connect wallet button");
    await t
        .click(homePage.walletBTN)
        .expect(homePage.metaMaskBTN.exists).ok();
   
});

test('User should be able to access metaverses list', async t => {
       
    console.log("+Trying to click on: metaverses list");
    await t
        .click(homePage.metaBTN)
        .expect(homePage.metaListItem.exists).ok();
   
   
});