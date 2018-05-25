var AddCustPage=function(){
	
	var fN=element(by.model('fName'));
	var lN=element(by.model('lName'));
	var postCode=element(by.model('postCd'));
	var addCust=element(by.className('btn btn-default'));
	
	
	this.enterFN=function(fName){
		fN.sendKeys(fName);
		return this;
	}	
	this.enterLN=function(lName){
		lN.sendKeys(lName);
		return this;
	}		
	this.enterPC=function(pCode){
		postCode.sendKeys(pCode);
		return this;
	}
	this.clickAdd=function(){
	    addCust.click();    
	    return this;
	}    
	this.acceptAlert=function(){
	 browser.switchTo().alert().accept();  
	 return this;
	 }
	
}
module.exports=new AddCustPage();