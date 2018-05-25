var ManagerPage = function() {
	
	 var result = element.all(by.className('btn btn-lg tab'));
	 
	 this.readResult=function(index){
		 return result.getText(index);
		 }
	 
	 var addCustomer = element(by.buttonText("Add Customer"));
	 this.clickadd=function(index){
		 addCustomer.click() 
	 return require('./AddCustPage.js')
		 
	 }
	 
	 var openAccount = element(by.buttonText("Open Account"));
	 this.openAcc=function(){
		 openAccount.click() 
	 return require('./openAcc.js')
		 
	 }
	 
	 var deleteAccount = element(by.buttonText("Customers"));
	 this.delAcc=function(){
		 deleteAccount.click() 
	 return require('./customer.js')
		 
	 }
}
module.exports=new ManagerPage(); 