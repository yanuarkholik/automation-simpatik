const homepage = require('../../../page/homepage');

describe('Sub Menu Agama', function() {
    this.timeout(50000);
   
    beforeEach(function(){
     
    });

    it('Dapat menampilkan data Agama berdasarakan kata kunci yang sesuai', async function(){
        var baseurl = 'https://simpatik-fe.merapi.javan.id/';
        await homepage.go_to_url(baseurl);

        var name = "admin";
        var pass = "secret";
        var agama = "Islam";
        var tidak_ada = "Agama yang tidak ada";
        await homepage.login_simpatik(name, pass);
        await homepage.clickByLinkText("Master Data");
        await homepage.clickByLinkText("Agama");
        
        await homepage.enterTextByName("search", agama);
        await homepage.clickByCss("button[type=submit]");
        await homepage.driverWaitByXpath("//td[contains(text(), 'Islam')]");
        await homepage.driverWaitByCss("button[type=reset]").finally(homepage.clickByCss("button[type=reset]"));
        
        await homepage.enterTextByName("search", tidak_ada);
        await homepage.clickByCss("button[type=submit]");
        await homepage.driverWaitByXpath("//td[contains(text(), 'Tidak ada data')]");
        await homepage.driverWaitByCss("button[type=reset]").finally(homepage.clickByCss("button[type=reset]"));

    })

    afterEach(async function(){
        await homepage.closeBrowser();
    });

})