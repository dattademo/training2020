# Training 2020 Project

Tech Stack:
  - Javascript
  - Protractor
  - Jasmine

# How to run test?

  1. Clone this project
```sh
git clone https://github.com/dattademo/training2020.git
```
  ---------------------------
  	Running test from Console
	
	2.a. Install Node.js, link: https://nodejs.org/es/download/
  
	2.b. Go to the system terminal
 
	2.c. Browse to cloned project's root folder
  
	2.d. Run this command from the console: npm install -g protractor
  
	2.e. Run: webdriver-manager update

	2.f. Run: npm install

	2.g. Run: npm link protractor
	
	2.h. Run: protractor conf.js


  ---------------------------
  	Select environment from console
	  Test env run: protractor conf.js --params.env=test
	  UAT env run: protractor conf.js --params.env=uat
	  Prod env run: protractor conf.js --params.env=prod

	  Note: default setting: "prod"
  
  ---------------------------
  	Select Test Suite
	  Available test suites:
 	    Home Page test suite: protractor conf.js --suite=homePageTest
	    Shopping Flow tests suite: protractor conf.js  --suite=shoppingFlowTests
 	    SearchAndBuyTest: protractor conf.js --suite=searchAndBuyTest
	    Functional test: protractor conf.js --suite=functional
		Somke test:protractor conf.js --suite=smoke

	  Note: no --suite parameter will run searchAndBuyTest test (protractor conf.js)

  ---------------------------
  	Browser
	  Chrome: protractor conf.js --browser=chrome
	  Firefox: protractor conf.js --browser=firefox

	  Default: chrome
