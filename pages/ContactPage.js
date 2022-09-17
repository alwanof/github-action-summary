import { Selector, t } from 'testcafe';
require('dotenv').config();

class ContactPage{
     constructor() {
        
        this.title = Selector("h1:nth-child(1)");
        this.formSubmitBTN = Selector("input[type=Submit]");
   

        
    }
    
}
export default new ContactPage();