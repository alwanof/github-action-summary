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

    // clicking on the git button
    console.log("clicking on the contact button");
    await t
        .click(homePage.GITBTN)
        .expect(getURL()).contains(`${data.home.contactURL}`)
        .click(homePage.brandLogo)
        .expect(homePage.title.textContent).eql(`${data.home.title}`);

    // click on decentraland card
    console.log("clicking on the decentraland card");
    await t
        .click(homePage.decCard)
        .expect(getURL()).contains(`${data.home.decURL}`)
        .click(homePage.brandLogo)
        .expect(homePage.title.textContent).eql(`${data.home.title}`);
    // click on snd card
    console.log("clicking on the sandbox card");
    await t
        .click(homePage.sndCard)
        .expect(getURL()).contains(`${data.home.sndURL}`)
        .click(homePage.brandLogo)
        .expect(homePage.title.textContent).eql(`${data.home.title}`);
    // click on som card
    console.log("clicking on the somnium card");
    await t
        .click(homePage.somCard)
        .expect(getURL()).contains(`${data.home.somURL}`)
        .click(homePage.brandLogo)
        .expect(homePage.title.textContent).eql(`${data.home.title}`);

});