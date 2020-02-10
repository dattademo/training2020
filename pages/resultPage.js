const basePage = require('./basePage');

class resultPage extends basePage {
	constructor() {
		super();
		this.searchResultText = this.element(this.by.className("page-heading product-listing"));
		this.sortByCombo = this.element(this.by.id("selectProductSort"));
		this.resultCluster = this.element(this.by.className("product_list grid row"));
		this.itemList = this.resultCluster.all(this.by.className("product-container"));
		this.rightBlockClassName = "right-block";
		this.itemImageClassName = "product-image-container";
		this.itemPriceClassName = "price product-price";
	}

	sortBy(condition) {
		this.sortByCombo.element(this.by.cssContainingText('option', condition)).click();
	}

	clickOnItem(itemNumber) {
		this.itemList.get(itemNumber).click();
	}

	getItemPrice(itemNumber) {
		var rightBlockElement = this.itemList.get(itemNumber).element(this.by.className(this.rightBlockClassName));
		return rightBlockElement.element(this.by.className(this.itemPriceClassName)).getText();
	}
}
module.exports = new resultPage();