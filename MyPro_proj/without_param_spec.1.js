describe('Clicking the Ibmid Button on the ICCVE page Feature', function() {
  browser.waitForAngularEnabled(false);   //for accessing the non-angular pages
  var ibmbtn_iccve = element(by.css('[href="https://iccve.uk.ibm.com/mga/sps/oidc/rp/BlueIDNew/kickoff/PartnerBlueID?Target=/web"]'));    // to identify via href values
  
    it('Should launch the ICCVE  page', function() {
      browser.get('https://iccve.uk.ibm.com/');
      browser.driver.sleep(3000);
      ibmbtn_iccve.click(); 
    });


  describe('Checking User Entry in IBM Login page Feature', function() {
    //browser.waitForAngularEnabled(false);
    browser.ignoreSynchronization = true; //to enable accessing the javascript pages.
    var ibmusrid = element(by.id('username'));
    var ibmpwd = element(by.id('password'));
    var signinbtn = element(by.id('signinbutton'));
    var contbtn = element(by.id('continuebutton'));
    var otp = element(by.id('emailOTP'));
    it('should enter details and Login', function() {
          browser.getCurrentUrl().then(function(url) { //Checking the log in to IBM url page has launched
              console.log("After using the webHandles(0) , the Web page url is : " +url );
              browser.driver.sleep(1000);
              ibmusrid.sendKeys("Vinotha.Vijayakumar-CIC-UK@ibm.com");
              ibmusrid.sendKeys(protractor.Key.TAB);
              browser.sleep(3000);
              contbtn.click();
             
            });
      browser.driver.sleep(1000);
    });
  });
  
  describe('Checking the W3 Login Page feature', function(){
    browser.ignoreSynchronization = true;
    var w3id = element(by.id('desktop'));
    var w3pwd = element(by.name('password'));
    var signinbtn2 = element(by.id('btn_signin'));
    
    it('should enter the user id and pwd details in the W3 page', function() {
      browser.getCurrentUrl().then(function(url) { //Checking the log in to IBM url page has launched
        console.log("After using the webHandles(1) , the Web page url is : " +url );
        w3id.sendKeys(browser.params.login.email); // to specify the parameters via the config file
        w3id.sendKeys(protractor.Key.TAB); //This need not to be have if we use the sendkeys to pwd fields directly.
        w3pwd.sendKeys(browser.params.login.password);
        signinbtn2.click();
        browser.driver.sleep(1000); 
     
      });
   
    });  

  });

});

describe('Checking the Authentication process',function(){
  browser.ignoreSynchronization = true;
  var otp = element(by.id('emailOTP'));
it('should click the send passcode to my email link', function() {
  browser.getCurrentUrl().then(function(url) { //Checking the log in to IBM url page has launched
    console.log("After using the webHandles(2) , the Web page url is : " +url );
    otp.click();
    browser.driver.sleep(3000);
  });
  browser.driver.sleep(10000);
});
});

