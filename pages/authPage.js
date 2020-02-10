const basePage = require('./basePage')

class authPage extends basePage {
	constructor() {
		super();
		this.guestEmail = this.element(this.by.name("guest_email"));
		this.maleRadioButton = this.element(this.by.id("uniform-id_gender1"));
		this.firstName = this.element(this.by.name("firstname"));
		this.lastName = this.element(this.by.name("lastname"));
		this.birthDay = this.element(this.by.id("days"));
		this.birthMonth =this.element(this.by.id("months"));
		this.birthYear = this.element(this.by.id("years"));
		this.dni = this.element(this.by.id("dni"));
		this.address = this.element(this.by.id("address1"));
		this.postalCode = this.element(this.by.id("postcode"));
		this.city = this.element(this.by.id("city"));
		this.state = this.element(this.by.id("id_state"));
		this.phone = this.element(this.by.id("phone_mobile"));
	}

	fillFormComplete(data) {
		this.guestEmail.sendKeys(data.guestEmail);
		this.maleRadioButton.click();
		this.firstName.sendKeys(data.firstName);
		this.lastName.sendKeys(data.lastName);
		this.birthDay.element(this.by.cssContainingText('option', data.birthDay)).click();
		this.birthMonth.element(this.by.cssContainingText('option', data.birthMonth)).click();
		this.birthYear.element(this.by.cssContainingText('option', data.birthYear)).click();
		this.dni.sendKeys(data.dni);
		this.address.sendKeys(data.address);
		this.postalCode.sendKeys(data.postalCode);
		this.city.sendKeys(data.city);
		this.state.element(this.by.cssContainingText('option', data.state)).click();
		this.phone.sendKeys(data.phone);
	}
}
module.exports = new authPage();
