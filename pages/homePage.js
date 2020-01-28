const basePage = require('./basePage')

class homePage extends basePage {
	constructor() {
		super();

		this.headerListProducts = element(by.className('header-list-products'));
		this.headerElements = this.headerListProducts.all(by.className('header-product-item'));
		this.defaultSearchBox = element(by.id('searchbox-sbox-box-packages'));
	}

	getIconLink(index) {
		var iconElementClassname = "shifu-3-button-circle";
		return this.headerElements.get(index).element(by.className(iconElementClassname)).getAttribute('href');
	}

	getIconClassName(index) {
		var tag = "i";
		return this.headerElements.get(index).element(by.tagName(tag)).getAttribute('class');
	}
}
module.exports = new homePage();