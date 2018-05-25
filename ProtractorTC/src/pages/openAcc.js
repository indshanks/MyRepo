var openAcc=function(){
	
	var custName=element.all(by.repeater('cust in Customers'));
	var currencyD=element.all(by.cssContainingText('option','Dollar'));
	var currencyP=element.all(by.cssContainingText('option','Pound'));
	var currencyR=element.all(by.cssContainingText('option','Rupee'));
	var process=element(by.buttonText('Process'));
	
	
	
	this.selectName=function(index){
		custName.get(index).click();
		return this;
	}	
	this.selectCurrencyD=function(){
		currencyD.click();
		return this;
	}	
	this.selectCurrencyP=function(){
		currencyP.click();
		return this;
	 }
	 this.selectCurrencyR=function(){
			currencyR.click();
			return this;
	}
	
		
	 this.clickProcess=function(){
	    process.click();    
	    return this;
	}    
	 this.acceptAlert=function(){
	 browser.switchTo().alert().accept(); 
	 return this;
	 }
	 
	
	 
	 
}
module.exports=new openAcc();