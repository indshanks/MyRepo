var Login = function() {
	
	 var managerLogin = element(by.buttonText('Bank Manager Login'));
	
	 this.getManText=function(){
		return managerLogin.getText();	 
	 }
	 
	 
	 this.manLogin=function(){
		 managerLogin.click(); 
	 return require('./ManagerPage.js')
	 }
	 
	var customerLogin = element(by.buttonText("Customer Login"));
	
	this.getCustText=function(){
		return customerLogin.getText();	 
	 }
	
	
	this.custLogin=function(){
		customerLogin.click();
		return(require('./CustomerPage2.js'))
	}
	 
}
module.exports=new Login(); 