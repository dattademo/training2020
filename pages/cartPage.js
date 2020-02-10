const basePage = require('./basePage')

class cartPage extends basePage {
	constructor() {
		super();
		this.cartItems = this.element.all(this.by.className("cart_item"));
		this.itemUnitPriceClassName = "cart_unit";
		this.buyButton = this.element(this.by.className("button btn btn-default standard-checkout button-medium"));
	}
	getItemUnitPrice(itemNumber){
		return this.cartItems.get(itemNumber).element(this.by.className(this.itemUnitPriceClassName)).getText();
	}
}
module.exports = new cartPage();