import { ClientFunction, Selector } from 'testcafe';

import contactPage from '../pages/ContactPage';

require('dotenv').config();

const getURL = ClientFunction(() => window.location.href);
const data=require('../data/data.json');

fixture`Contact Page`
    .page`${process.env.BASE_URL}/contact`

    
test('User should be able to access contact page', async t => {
   
   
    await  t
    .expect(contactPage.title.textContent).eql(`${data.contact.title}`);

    await t
    .switchToIframe("#hs-form-iframe-0")
    .expect(contactPage.formSubmitBTN.exists).ok();
  
});

test.skip('User should be able to submit contact form', async t => {
    console.log("+Trying to read: contact form");
    await  t
        .expect(true).eql(false);
   
  
} );

test.skip('User should be able to working with form', async t => {
    console.log("+Trying to work: with form");
    await  t
        .expect(true).eql(true);
   
  
});
