
var HarryPotterPage = function(){
	
	var greeting = element(by.className('fontBig ng-binding'));
	var chooseAcc = element.all(by.options('account for account in Accounts'));
	var accNo1=element(by.binding("accountNo"));
	var accNo2=element(by.binding("accountNo"));
	var accNo3=element(by.binding("accountNo"));
	
	var chooseCurr1 = element.all(by.model("currency"));
	var dCurr1=element(by.binding("currency"));
	var dCurr2=element(by.binding("currency"));
	var dCurr3=element(by.binding("currency"));

	
	this.getgreetingText=function(){
		return greeting.getText();
}
	
	this.clickAccNum=function(index){
		chooseAcc.get(index).click();
	  return this;
	 
	}
	this.getaccNum1=function(index){
	  return accNo1.getText();
	}
	this.getaccNum2=function(index){
		  return accNo2.getText();
		}
	this.getaccNum3=function(index){
		  return accNo3.getText();
		}
	
	this.getcurrD=function(){
		 return dCurr1.getText();
		 
		}
	this.getcurrP=function(){
		 return dCurr2.getText();
		 
		}
	this.getcurrR=function(){
		 return dCurr3.getText();
		 
		}
	var transaction = element(by.buttonText('Transactions'));
	 this.clickTransaction=function(){
		 transaction.click() 
	 return require('./Transaction.js')	 
	 }
	 
	 var deposit = element(by.buttonText('Deposit'));
	 this.clickDeposit=function(){
		 deposit.click() 
	 return require('./Deposit.js')	 
	 }
	 
	 var withdraw = element(by.buttonText('Withdrawl'));
	 this.clickwithdraw=function(){
		 withdraw.click(); 
	 return this;
	 }
	 
	 var withdrawAmt = element(by.model('amount'));
	 this.enterAmt = function(amt){
		 withdrawAmt.sendKeys(amt);
		 return this;
	 }
	var pressWd = element(by.buttonText('Withdraw'));
			this.clickwdraw=function(){
				 pressWd.click(); 
			 return this;	
			}
			
   var errorMsg = element(by.className('error ng-binding'));
   this.getMsg = function(){
	   return errorMsg.getText();
	   
	   //.then(function(text) {
		// console.log(text);
	 // });
   } 
   
   var logout = element(by.buttonText("Logout"));
   this.clickLogout=function(){
	   logout.click();
	   return this;
   }
}
  
module.exports=new HarryPotterPage();