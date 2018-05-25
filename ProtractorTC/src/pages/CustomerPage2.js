var CustomerPage2 = function() {
	
	var selectCust = element.all(by.repeater('cust in Customers'));
	var loginButton = element(by.buttonText('Login'));
	
	
	this.selectName=function(index){
		selectCust.get(index).click();
		return this;
	}	
	
	this.clickLogin=function(){
		loginButton.click();
		return require ('./HarryPotterPage.js')
	}
	 
	

}
module.exports=new CustomerPage2(); 