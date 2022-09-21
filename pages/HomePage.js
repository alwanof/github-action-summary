import { Selector, t } from 'testcafe';
require('dotenv').config();
class HomePage{
     constructor() {
        
        this.title = Selector("h1:nth-child(1)");
        this.GITBTN=Selector("a.MuiButton-contained");
        this.brandLogo=Selector("a.MuiButtonBase-root").withAttribute("href", "/");
        this.decCard=Selector("a.MuiButtonBase-root").withAttribute("href", "/metaverse/decentraland");
        this.sndCard=Selector("a.MuiButtonBase-root").withAttribute("href", "/metaverse/sandbox");
        this.somCard=Selector("a.MuiButtonBase-root").withAttribute("href", "/metaverse/somniumspace");
        
        this.walletBTN=Selector('button').withExactText('Connect wallet');
        this.metaMaskBTN=Selector('button').withExactText('MetaMask');
        this.metaBTN=Selector('button').withExactText('Metaverses');
        this.metaListItem=Selector('.titleContainer').withExactText('Somnium Space');


    }
    
}
export default new HomePage();