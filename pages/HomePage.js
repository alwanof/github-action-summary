import { Selector, t } from 'testcafe';
require('dotenv').config();
class HomePage{
     constructor() {
        
        this.title = Selector("h1:nth-child(1)");
        this.GITBTN=Selector(".MuiButton-contained");
        this.brandLogo=Selector("a.MuiButtonBase-root").withAttribute("href", "/");
        //metaverse/decentraland
        this.decCard=Selector("a.MuiButtonBase-root").withAttribute("href", "/metaverse/decentraland");
        //metaverse/sandbox
        this.sndCard=Selector("a.MuiButtonBase-root").withAttribute("href", "/metaverse/sandbox");
        //metaverse/somniumspace
        this.somCard=Selector("a.MuiButtonBase-root").withAttribute("href", "/metaverse/somniumspace");
    }
    
}
export default new HomePage();