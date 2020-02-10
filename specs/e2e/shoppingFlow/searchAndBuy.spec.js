describe("Search & Buy Shopping Flow", function () {
	var data = require('../../../data/searchAndBuy.json'),
		formData = require('../../../data/buyFormData.json'),
		homePage = require('../../../pages/homePage'),
		resultPage = require('../../../pages/resultPage'),
		itemPage = require('../../../pages/itemPage'),
		cartPage = require('../../../pages/cartPage'),
		authPage = require('../../../pages/authPage'),
		addressPage = require('../../../pages/addressPage'),

		resultPageItemPrice;

	beforeAll(function () {
		browser.get(browser.params.baseURL);
	});

	it("The user can search for a beer", function () {
		homePage.searchForBeer(data.beer.textToSearch);
		resultPage.sortBy(data.beer.sortCondition);
		// Verification Point: Verify that user can see at least 1 result
		expect(resultPage.itemList.count()).toBeGreaterThan(0, "No items found on the result page");
	});

	it("The user can get the first item price and go to item page", function () {
		resultPageItemPrice = resultPage.getItemPrice(data.beer.itemNumber);
		resultPage.clickOnItem(data.beer.itemNumber);
		// Verification Point: Verify that user can see the Price Cluster
		expect(itemPage.buyCluster.isDisplayed()).toBe(true, "Add to cart cluster is not visible");
	});

	it("The user can verify the item price and add item to the cart", function () {
		itemPage.itemPrice.getText().then(function (detailPagePrice) {
			// Verification Point: Verify that the price on result page matches the price on detail page
			expect(resultPageItemPrice).toMatch(detailPagePrice);
		});
		itemPage.addToCartButton.click();
	});

	it("The user can see the cart resume modal and go to cart page", function () {
		itemPage.waitForElementToBeVisible(itemPage.cartPopup, data.beer.timeout);
		// Verification Point: Verify that user can see the Cart Popup
		expect(itemPage.cartPopup.isDisplayed()).toBe(true, "Cart Popup is not visible");
		itemPage.goToCheckoutButton.click();
	});

	it("The user can verify the item price on cart page and go to auth page", function () {
		cartPage.getItemUnitPrice(data.beer.itemNumber).then(function (cartPrice) {
			// Verification Point: Verify that the price on result page matches the price on cart page
			expect(resultPageItemPrice).toMatch(cartPrice);
		})
		cartPage.buyButton.click();
	});

	it("The user fill the guest form and verify guest data on Address Page", function () {
		authPage.fillFormComplete(formData);
		authPage.submitGuestButton.click();
		//VP: verify all form elements are correctly displayed
		expect(addressPage.deliveryGuestEmail.getText()).toMatch(formData.guestEmail);
		expect(addressPage.deliveryDni.getText()).toMatch(formData.dni);
		expect(addressPage.deliveryFirstAndLastName.getText()).toMatch(formData.firstName + " " + formData.lastName);
		expect(addressPage.deliveryPhone.getText()).toMatch(formData.phone);
		expect(addressPage.deliveryAddress.getText()).toMatch(formData.address);
		expect(addressPage.deliverypostCodeAndCity.getText()).toMatch(formData.postalCode + " " + formData.city);
		expect(addressPage.deliveryCountry.getText()).toMatch(formData.country);
	});
});