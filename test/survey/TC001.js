const homepage = require('../../page/homepage');

describe('Survey Kepatuhan Admin', function() {
    this.timeout(50000);
   
    beforeEach(function(){
     
    });

    it('Dapat mengakses halaman detail Survey Feedback Kepatuhan Admin', async function(){
        var baseurl = 'https://pln-cos.merapi.javan.id/login';
        await homepage.go_to_url(baseurl);

        var name = "auzan.muhammad@pln.co.id";
        var pass = "sincostan";
        var array = ["Cara Cek Besaran Kompensasi PL", "2023-03-14", "PT PLN (Persero)", "Tag"];
        
        await homepage.login_cos(name, pass);
        // await homepage.driverWaitByCss("#modalSurvey .btn-outline-secondary").finally(homepage.clickByCss("#modalSurvey .btn-outline-secondary"));
        // await homepage.driverWaitByLinkText("Diseminasi").finally(homepage.clickByLinkText("Diseminasi"));
        // await homepage.driverWaitByLinkText("Infografis Kepatuhan").finally(homepage.clickByLinkText("Infografis Kepatuhan"));
        await homepage.clickByCss("button.btn-outline-secondary");
        // await homepage.clickByLinkText("Diseminasi");
        await homepage.driverWaitByLinkText("Diseminasi").finally(homepage.clickByLinkText("Diseminasi"));
        await homepage.clickByLinkText("Infografis Kepatuhan");
        await array.forEach(
            arr => 
            homepage.driverWaitByCss("input[type='search']").finally(homepage.enterTextByCss("input[type*='search']", arr)),
            homepage.driverWaitByCss("input[type='search']").finally(homepage.enterTextByCss("input[type*='search']", ""))
            );
    })

    afterEach(async function(){
        await homepage.closeBrowser();
    });

})