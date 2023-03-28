const { Builder, By, Key, until, Browser } = require('selenium-webdriver');
var driver = new Builder().forBrowser('chrome').build();
driver.manage().setTimeouts({implicit: (10000)});

class BasePage{
    constructor() {
        global.driver = driver;
    }

    // set up the driver
    async go_to_url(theURL){
        await driver.get(theURL);
        await driver.manage().window().maximize();
    }

    // enter text to element
    async enterTextById(id, text){
        await driver.findElement(By.id(id)).sendKeys(text);
    }
    async enterTextByName(name, text){
        await driver.findElement(By.name(name)).sendKeys(text);
    }
    async enterTextByCss(css, text){
        await driver.findElement(By.css(css)).sendKeys(text);
    }
    async enterTextByXpath(xpath, text){
        await driver.findElement(By.xpath(xpath)).sendKeys(text);
    }

    // click the element
    async clickById(id){
        await driver.findElement(By.id(id)).click();
    }
    async clickByXpath(xpath){
        await driver.findElement(By.xpath(xpath)).click();
    }
    async clickByCss(css){
        await driver.findElement(By.css(css)).click();
    }
    async clickByLinkText(link){
        await driver.findElement(By.linkText(link)).click();
    }

    // wait driver 
    async driverWaitById(id){
        await driver.wait(until.elementsLocated(By.id(id)));
    }
    async driverWaitByCss(css){
        await driver.wait(until.elementsLocated(By.css(css)));
    }
    async driverWaitByXpath(xpath){
        await driver.wait(until.elementsLocated(By.xpath(xpath)));
    }
    async driverWaitByLinkText(link){
        await driver.wait(until.elementsLocated(By.xpath(link)));
    }

    // tear down driver
    async closeBrowser(){
        await driver.quit();
    }
}

module.exports = BasePage;