var using = require('jasmine-data-provider');
var objectDataProvider = require('../../data/headerListProducts');
var homePageData = require('../../data/homePageData.json');
var homePage = require('../../pages/homePage');

describe("Homepage Test Suite", function () {

	it("Despegar Logo Visibility", function () {
		expect(homePage.despegarDesktopLogo.isDisplayed()).toBe(true, 'Despegar logo is not displayed');
	});

	using(objectDataProvider, function (data, description) {
		it("Header Icon verification: " + description, function () {
			var currentElement = data.order - 1;
			expect(homePage.getIconLink(currentElement)).toContain(data.url);
			expect(homePage.headerElements.get(currentElement).getText()).toContain(data.text);
			expect(homePage.getIconClassName(currentElement)).toContain(data.iconClassName);
		});
	});

	it("Default Search Box Verification", function () {
		expect(homePage.defaultSearchBox.getText()).toContain(homePageData.defaultSearchBoxTitle);
		expect(homePage.defaultSearchBox.isDisplayed()).toBe(true, 'Default Search box: ' + homePageData.defaultSearchBoxTitle + ' not displayed');
	});
});