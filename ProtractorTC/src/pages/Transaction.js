var Transaction = function(){
	
	
    var transactionData = element(by.repeater('tx in transactions | orderBy:sortType:sortReverse | sDate:startDate:end'));
    
    this.getTransaction = function(){
    	
  transactionData.getText().then(function(values) {
	  for(i=0;i<values.length;i++){
	    	values[i].getText().then(function(data) {
	    		console.log(data);
	    		
	    		});
	    	}
    	})
 
    }
    
    var tableData = element(by.repeater("tx in transactions | orderBy:sortType:sortReverse | sDate:startDate:end").row(0));
    
    this.getRow = function(){
  	  tableData.getText().then(function(text) {
  	  	console.log(text)
  	  	return this;
  	  });
    }
  	  
  	 var tableData2 = element(by.repeater("tx in transactions | orderBy:sortType:sortReverse | sDate:startDate:end").row(1));
    
    this.getRow2 = function(){
  	  tableData2.getText().then(function(text) {
  	  	console.log(text)
  	  	return this;
  	  })
    }
    
    var resetButton = element(by.buttonText("Reset"));
    
    this.clickReset = function(){
    	resetButton.click();
    	return this;
    }
 var tableData3 = element(by.className('table table-bordered table-striped'));
    
    this.getRow3 = function(){
  	 return tableData3.getSize();
  	  	//return this;
  	  }
   
   var backButton = element(by.buttonText("Back"));
   
   this.clickBack=function(){
	   backButton.click();
	   return require('./HarryPotterPage');
   }
    
}
    
  
module.exports=new Transaction();