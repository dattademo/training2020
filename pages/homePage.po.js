var homePage = function () {
	this.despegarDesktopLogo = element(by.id('logo-desktop'));
	this.headerListProducts = element(by.className('header-list-products'));
	this.headerElements = this.headerListProducts.all(by.className('header-product-item'));
	this.defaultSearchBox = element(by.id('searchbox-sbox-box-packages'));

	this.getIconLink = function (index) {
		var iconElementClassname = "shifu-3-button-circle";
		return this.headerElements.get(index).element(by.className(iconElementClassname)).getAttribute('href');
	}

	this.getIconClassName = function (index) {
		var tag = "i";
		return this.headerElements.get(index).element(by.tagName(tag)).getAttribute('class');
	}

}

module.exports = new homePage();