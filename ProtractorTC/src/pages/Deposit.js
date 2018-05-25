var Deposit = function() {
	
	 var deposit = element(by.model("amount"));
	 var submit = element(by.className('btn btn-default'));
	 var balance = element.all(by.binding("amount"));
	 
	   
	   this.enterDeposit = function(value){
		   deposit.sendKeys(value);
		   return this;
	   } 		
	    	
	   this.clickSubmit = function(){
		   submit.click();   
	   }
	   
	   this.confirmBal=function(){
		return balance.getText();  
	   }
	   
		
		

}
module.exports=new Deposit(); 