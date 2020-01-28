var homePagea = require('../../pages/homePage.po');

describe("Homepage Test Suite", function () {
	it('Despegar Logo Test', function () {
		var logo = element(by.id("logo-desktop"));
		expect(logo.isDisplayed()).toBe(true, "Despegar logo is missing");
	});

	it('Hotel Icon Test', function () {
		// Get element by className
		var hotelButton = element(by.className("shifu-3-button-circle HOTELS"));
		expect(hotelButton.getText()).toContain("Alojamientos", "El texto del botón Hotel es incorrecto");
	});
});