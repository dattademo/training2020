const basePage = require('./basePage');

class itemPage extends basePage {
	constructor() {
		super();
		this.addToCartButton = this.element(this.by.name("Submit"));
		this.cartPopup = this.element(this.by.id("layer_cart"));
		this.goToCheckoutButton = this.element(this.by.className("btn btn-default button button-medium"));
		this.itemPrice = this.element(this.by.id("our_price_display"));
		this.buyCluster = this.element(this.by.id("buy_block"));
	}
}
module.exports = new itemPage();