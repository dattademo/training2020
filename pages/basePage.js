module.exports = class BasePage {
	constructor() {
		this.element = require('protractor').element;
		this.browser = require('protractor').browser;
		this.by = require('protractor').by;
		this.expectedCondition = require('protractor').ExpectedConditions;

		this.logo = this.element(by.className('logo img-responsive'));
		this.menuButtonCluster = this.element(this.by.className("nav2 slide"));
		this.searchInput = this.element(this.by.name("search_query"));
		this.searchButton = this.element(this.by.name("submit_search"));
		this.cartButton = this.element(this.by.xpath("//div[@class='shopping_cart']/a[1]"));
	}

	waitForElementToBeVisible(webElement, timeout) {
		browser.wait(this.expectedCondition.visibilityOf(webElement), timeout);
	}

	searchForBeer(beerName) {
		this.searchInput.sendKeys(beerName);
		this.searchButton.click();
	}
}