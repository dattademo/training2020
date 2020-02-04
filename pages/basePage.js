const browser = require('protractor').browser;
const element = require('protractor').element;
const by = require('protractor').by;

module.exports = class BasePage {
	constructor() {
		this.browser = browser;
		this.despegarDesktopLogo = element(by.id('logo-desktop'));
	}
}