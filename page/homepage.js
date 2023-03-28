const {Key} = require("selenium-webdriver");
var BasePage = require("./basepage");

class HomePage extends BasePage {
    async enter_url(theURL){
        await this.go_to_url(theURL);
    }

    async login_cos(username, password){
        await this.enterTextByName('username', username);
        await this.enterTextByName('password', password);
        await this.clickByCss('.btn-info');
    }
}

module.exports = new HomePage();