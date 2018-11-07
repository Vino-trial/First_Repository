describe('Checking SendKeys Feature', function(){
  var EntName = element(by.model("yourName"));
  //var allH1Tags = element.all(by.css('h1'));
  //var clastxt2 = element(by.className('button-large button-secondary has-shield download-btn', 'Download AngularJS'));
  var clastxt1 = element(by.className('button button-large button-primary has-shield has-shadow','Try the New Angular'));
  var docstxt = element(by.css('[href="docs"]'));
  //var docsttle = element(by.css('li[title="Docs"]')); // to identify via href values
  browser.ignoreSynchronization = true;
  it('Should click the New Angular Link button', function() {
    browser.get('https://www.angularjs.org');
    //Get the current page url and print it on console
    browser.getCurrentUrl().then(function(url) {
      console.log("before using the webHandles , the Web page url is : " +url )
    });
    clastxt1.click();
    browser.driver.sleep(3000);
    browser.getAllWindowHandles().then(function (handles) {
      browser.switchTo().window(handles[1]);
      
        /* to check and display the current url in console
        browser.getCurrentUrl().then(function(url) {
          console.log("Web page url is : " +url )
        });
        */
        browser.driver.sleep(3000);
        docstxt.click();
        //docsttle.click();
        browser.driver.sleep(3000);

    });
    /* received getallwindowHandles is not a function error
    browser.driver.getallWindowHandles().then(function(lstids) {
      console.log(" List of page IDs " +lstids);
    });
    */
    /*expect(browser.driver.getCurrentUrl()).toEqual('https://www.angularjs.org');
    browser.switchTo('https://angular.io/');
     */
    //expect(browser.driver.getCurrentUrl()).toEqual('https://angular.io/');
  });
  
  
  /*
  // code to write text on the text field in angularjs.org
   //   
  function EnterName(name) {
      EntName.sendKeys(name);
  }
     
  beforeEach(function (){
   browser.get('https://www.angularjs.org');
  });
  it('should enter the given Text', function() {
      EnterName("Vinotha");

  }); 
  */


 /* 
 //code To click the download Angular Js button in the angular.org page
  it ('Also finds the list of all the elements in the page', function () {
    expect(clastxt2.getText()).toBe('DOWNLOAD ANGULARJS');
    browser.driver.sleep(5000);
    clastxt2.click();
    browser.driver.sleep(5000);
  });
  */
});