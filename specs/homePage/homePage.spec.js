var using = require('jasmine-data-provider');
var objectDataProvider = require('../../data/menuButtons');
var homePageData = require('../../data/homePageData.json');
var homePage = require('../../pages/homePage');

describe("Cervezas Online - Homepage Test Suite", function () {

	it("Logo Visibility - Size - Alt Text verification", function () {
		global.myText = "element";

		expect(homePage.logo.isDisplayed()).toBe(true, 'Logo is not displayed');
		expect(homePage.logo.getAttribute("height")).toContain(homePageData.logo.height, "Logo height is wrong");
		expect(homePage.logo.getAttribute("width")).toContain(homePageData.logo.width, 'Logo width is wrong');
		expect(homePage.logo.getAttribute("alt")).toContain(homePageData.logo.altText, 'Logo alt text is wrong');
	});

	it("Search input box Visibility - Enabled - Placeholder Text verification", function () {
		expect(homePage.searchInput.isDisplayed()).toBe(true, 'Search input is not displayed');
		expect(homePage.searchInput.isEnabled()).toBe(true, 'Search input is not enabled');
		expect(homePage.searchInput.getAttribute("placeholder")).toContain(homePageData.searchbox.placeholderText, 'Search input placeholder text is wrong');
	});

	it("Cart Button Visibility - URL - Title - Text Verification", function () {
		expect(homePage.cartButton.isDisplayed()).toBe(true, 'Cart Button is not displayed');
		expect(homePage.cartButton.getAttribute("href")).toContain(homePageData.cartButton.url, 'Cart Button URL is wrong');
		expect(homePage.cartButton.getAttribute("title")).toContain(homePageData.cartButton.title, 'Cart Button title is wrong');
		expect(homePage.cartButton.getText()).toContain(homePageData.cartButton.text, 'Cart Button text is wrong');
	});

	using(objectDataProvider, function (data, description) {
		it("Header Icon: " + description + " Text and URL verification", function () {
			expect(homePage.menuButtonCluster.element(by.linkText(data.text)).getAttribute("href")).toContain(data.url);
			expect(homePage.menuButtonCluster.element(by.linkText(data.text)).getText()).toContain(data.text);

		});
	});
});