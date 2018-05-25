var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');


exports.config = {
		 directConnect: true,
		 
capabilities: {
		    'browserName': 'chrome'
		  },	 
framework: 'jasmine',		  
specs: ['./src/AllScripts/e2epom.js'],

  onPrepare: function() {

jasmine.getEnv().addReporter(
  new Jasmine2HtmlReporter({
    savePath: 'Target/screenshots',
  	  takeScreenshotsOnlyOnFailures: true,
  	 })
  
);
},
jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
 
  
  };
  

		  