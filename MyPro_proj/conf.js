
/*var HtmlReporter = require('protractor-beautiful-reporter'); // to catch the results in reports

exports.config = {
	framework: "jasmine",
	SeleniumAddress: 'http://localhost:4444/wd/hub/',
	specs: ['./*_spec.js'],
	onPrepare: function() {
		// Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
		jasmine.getEnv().addReporter(new HtmlReporter({
			 baseDirectory: 'Report/screenshots'
		}).getJasmine2Reporter());
 },
		jasmineNodeOpts: {
		  showColors: true,
    silent: true,
    defaultTimeoutInterval: 360000,
			print: function() {

			}
	 },
		params: {
			login: {
		  	email: 'Vinotha.Vijayakumar-CIC-UK@ibm.com',
		  	password: 'Vino@7373'
			}
		} 
	};

*/
exports.config = {
	framework: "jasmine",
	SeleniumAddress: 'http://localhost:4444/wd/hub/',
	specs: ['./*_spec.js'],

	
	params: {
			login: {
		  	email: 'Vinotha.Vijayakumar-CIC-UK@ibm.com',
		  	password: 'Vino@7373'
			}
	} 
};


