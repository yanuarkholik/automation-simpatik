const {Key} = require("selenium-webdriver");
var BasePage = require("./basepage");

class HomePage extends BasePage {
    async enter_url(theURL){
        await this.go_to_url(theURL);
    }

    async login_simpatik(username, password){
        await this.enterTextById('username', username);
        await this.enterTextById('password', password);
        await this.clickByCss('button[type="submit"]');
    }
}

module.exports = new HomePage();