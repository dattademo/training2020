const HTMLReport = require('protractor-html-reporter');
const terminalReporter = require('jasmine-reporters').TerminalReporter;
const JUnitXmlReporter = require('jasmine-reporters').JUnitXmlReporter;
const fs = require('fs-extra');

exports.config = {
    // this command starts a standalone server to avoid starting a dedicated server on an extra terminal
    directConnect: true,
    // run all the specs under Spec folder
    specs: ['./specs/homePage/homePage.spec.js'],

    // run specific spec files in order to set different strategies
    suites: {
        homePageTest: './specs/homePage/homePage.spec.js',
        homePageTestNoObject: './specs/homePage/homePageNoObject.spec.js',
        functional: './specs/*/*.spec.js',
        smokeTest: ['./specs/homePage/homePage.spec.js', './specs/homePage/homePageNoObject.spec.js']
    },

    // env parameter will get the desired env URL from config-> environments.js
    //prod URL is set by default
    // test data Language will be spanish for default
    params: {
        env: "prod",
        country: "ar"
    },

    onPrepare: () => {
        // Browser config
        // Ignore Sync for non Angunlar pages
        browser.ignoreSynchronization = true;
        // maximize browser
        browser.driver.manage().window().maximize();

        // set baseURL 
        const env = require('./config/' + browser.params.country + '/environments.json');
        baseURL = eval("env." + browser.params.env + ".URL");
        browser.get(baseURL);

        //Jasmine set initialization
        const environment = jasmine.getEnv();

        // Reports config
        // Turn Off default reporter
        // jasmine.getEnv().clearReporters();
        // Set Terminal report
        jasmine.getEnv().addReporter(new terminalReporter({
            verbosity: 3,
            color: true,
            showStack: false
        }));
        // Generate XML report
        environment.addReporter(new JUnitXmlReporter({
            consolidateAll: true,
            savePath: './reports/',
            filePrefix: 'xmlresults',
        }));
        // Take Screeshoot if failed
        environment.addReporter({
            specDone: function (result) {
                try {
                    if (result.status == 'failed') {
                        browser.getCapabilities().then(function (caps) {
                            let browserName = caps.get('browserName');
                            var screenshotPath = "./reports/screenshots/";

                            if (!fs.existsSync(screenshotPath)) {
                                fs.mkdirSync(screenshotPath);
                            }
                            var pgnFileName = (screenshotPath + browserName + '-' + result.fullName + '.png');
                            browser.takeScreenshot().then(function (png) {
                                let stream = fs.createWriteStream(pgnFileName);
                                stream.write(new Buffer.from(png, 'base64'));
                                stream.end();
                            });
                        });
                    }
                } catch (error) {
                    console.log("File not saved");
                }
            },
        });
    },

    // HTMLReport called once tests are finished
    // Create an HTML Report from XML report file
    onComplete: () => {
        browser.getCapabilities().then((caps) => {
            const testConfig = {
                reportTitle: `Automation Framework`,
                outputPath: './reports',
                screenshotPath: 'screenshots/',
                testBrowser: caps.get('browserName'),
                browserVersion: caps.get('version'),
                screenshotsOnlyOnFailure: true,
            };
            new HTMLReport().from('./reports/xmlresults.xml', testConfig);
        });
    },
};