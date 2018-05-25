var customer=function(){
	
	var searchCust = element(by.model('searchCustomer'));
	var delButton = element.all(by.buttonText('Delete'))
	
	
	this.findCust = function(dName){
		searchCust.sendKeys(dName);
		return this;
	}
	
	this.delCust=function(){
		delButton.click();
		return this
	}
}
module.exports = new customer();