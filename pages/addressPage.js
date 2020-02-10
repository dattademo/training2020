const basePage = require('./basePage');

class addressPage extends basePage {
	constructor() {
		super();
		this.addressDeliveryCluster =  this.element(this.by.id("address_delivery"));
		this.deliveryGuestEmail = this.addressDeliveryCluster.element(this.by.className("address_customer_email"));
		this.deliveryDni = this.addressDeliveryCluster.element(this.by.className("address_dni"));
		this.deliveryFirstAndLastName = this.addressDeliveryCluster.element(this.by.className("address_firstname address_lastname"));
		this.deliveryPhone = this.addressDeliveryCluster.element(this.by.className("address_phone"));
		this.deliveryAddress = this.addressDeliveryCluster.element(this.by.className("address_address1"));
		this.deliverypostCodeAndCity = this.addressDeliveryCluster.element(this.by.className("address_postcode address_city"));
		this.deliveryCountry = this.addressDeliveryCluster.element(this.by.className("address_country_name"));
	
	}
}
module.exports = new addressPage();
