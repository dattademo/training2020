describe("Cervezas Online - Search & Buy", function () {
	var data = require('../../data/searchAndBuy.json'),
		formData = require('../../data/buyFormData.json'),
		homePage = require('../../pages/homePage'),
		resultPage = require('../../pages/resultPage'),
		itemPage = require('../../pages/itemPage'),
		cartPage = require('../../pages/cartPage'),
		authPage = require('../../pages/authPage'),
		resultPageItemPrice;

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
		itemPage.goToCheckoutButton.click();

	});

	it("The user can verify the item price on cart page and go to auth page", function () {
		cartPage.getItemUnitPrice(data.beer.itemNumber).then(function (cartPrice) {
			// Verification Point: Verify that the price on result page matches the price on cart page
			expect(resultPageItemPrice).toMatch(cartPrice);
		})
		cartPage.buyButton.click();
	});

	it("The user fill the guest form", function () {
		authPage.fillFormComplete(formData);
		browser.sleep(8000);
	});
});