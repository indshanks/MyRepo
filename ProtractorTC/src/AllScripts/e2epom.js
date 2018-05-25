var data = require(process.cwd()+'/src/utility/Data.json')
var login=require(process.cwd()+'/src/pages/Login.js')

var winston=require('winston');
//winston.level ='error';
winston.add(winston.transports.File, { filename: './Reports/WinstonBasicLog.log' });
describe('Banking application', function(){
	
	beforeEach(function(){
		browser.get(data.url);
		browser.manage().window().maximize(); 
		browser.sleep(3000);	
	})
	
	it('Login page',function(){
	  expect(login.getCustText()).toContain('Customer Login');
	  expect(login.getManText()).toContain('Bank Manager Login');
	  winston.log("info","Login page verified");
	});
	
	 it('Manager Login', function(){
		 
	  var manager=login.manLogin();
	  browser.sleep(2000);
	  winston.log("info", "Bank Manager Login verified");
	  browser.sleep(2000);
	  var manRes=manager.readResult(0,1,2);
	  expect(manRes).toContain('Add Customer','Open Account','Customers');
	  winston.log("info", "Manager page Verified");
	 });
	 
	  it('Add Customer', function(){
		  
	  var manager=login.manLogin();
	  var addCust=manager.clickadd();
	  winston.log("info", "Add Customer page verified");
	 
	  addCust.enterFN(data.custData.Firstname);
	  addCust.enterLN(data.custData.Lastname);
	  addCust.enterPC(data.custData.PostCode);
	  addCust.clickAdd();
	  browser.sleep(2000);
	  addCust.acceptAlert();
	  winston.log('info', 'Customer added')
	  });
	  
	  it('To oppen Account for dollar', function(){
		  var manager=login.manLogin(); 
	      var openAcc1=manager.openAcc();
	      winston.log('info', 'Open Customer page verified');
	      openAcc1.selectName(0);
	      openAcc1.selectCurrencyD();
	      openAcc1.clickProcess();
	      browser.sleep(2000);
	      openAcc1.acceptAlert();
	      winston.log('info', 'Dollar Account opened');
	  });
	  
	  it('To oppen Account for pound', function(){
		  var manager=login.manLogin(); 
	      var openAcc1=manager.openAcc();
	      openAcc1.selectName(3);
	      openAcc1.selectCurrencyP();
	      openAcc1.clickProcess();
	      browser.sleep(2000);
	      openAcc1.acceptAlert();
	      winston.log('info', 'Pound Account opened')
	  });
	  
	  it('To oppen Account for Rupee', function(){
		  var manager=login.manLogin(); 
	      var openAcc1=manager.openAcc();
	      openAcc1.selectName(2);
	      openAcc1.selectCurrencyR();
	      openAcc1.clickProcess();
	      browser.sleep(2000);
	      openAcc1.acceptAlert();
	      winston.log('info', 'Rupee Account opened');
	      
	  });
	  
	  it('To delete Customer', function(){
           var manager=login.manLogin(); 
           var customerDel=manager.delAcc();
           customerDel.findCust(data.delCustomer);
           customerDel.delCust();
           browser.sleep(3000);
           winston.log('info', 'customer deleted')
	});
	
	it('customer login page', function(){
		 var customer=login.custLogin(0);
		 customer.selectName(1);
		 var Harry =  customer.clickLogin();
		 expect(Harry.getgreetingText()).toContain(data.expText)
		 winston.log('info','Harry Potter customer login page verified');
		 
	});
	it('Verify currency type', function(){
		var customer=login.custLogin(0);
		 customer.selectName(1);
		 var Harry = customer.clickLogin();	
		
		 Harry.clickAccNum(0);
         expect(Harry.getaccNum1()).toEqual(data.AccountNo1);
         expect(Harry.getcurrD()).toEqual(data.currency1);
         winston.log("info","Account no.1004 has currency type Dollar");
         browser.sleep(2000);
         Harry.clickAccNum(1);
         expect(Harry.getaccNum2()).toEqual(data.AccountNo2);
         expect(Harry.getcurrP()).toEqual(data.currency2);
         winston.log("info","Account no.1005 has currency type Pound");
         browser.sleep(2000);
         Harry.clickAccNum(2);
         expect(Harry.getaccNum3()).toEqual(data.AccountNo3);
         expect(Harry.getcurrR()).toEqual(data.currency3);
         winston.log("info","Account no.1006 has currency type Rupee");
         browser.sleep(2000);	 
	});
	
        it('intital transaction', function(){ 
         var customer=login.custLogin(0);
   		 customer.selectName(1);
   		 var Harry = customer.clickLogin();	
 
		var transactionPage = Harry.clickTransaction();
		browser.sleep(3000);
		//var tabData=transactionPage.getTransaction();
		//console.log(tabData);
		winston.log("info", "transaction page is empty")
	
        });
       
        
        it('Deposit Money', function(){
        	
         var customer=login.custLogin(0);
   		 customer.selectName(1);
   		 var Harry = customer.clickLogin();	
   		 Harry.clickAccNum(2);
       
		var deposit = Harry.clickDeposit();
		deposit.enterDeposit(data.Amount);
		deposit.clickSubmit();
		browser.sleep(2000);
		expect(deposit.confirmBal()).toContain(data.Amount);
		winston.log("info", "Balance is 2000 in the account");
       
        });
        
        it('TransationAfterDeposit', function(){
        	
        	var customer=login.custLogin(0);
      		customer.selectName(1);
      		var Harry = customer.clickLogin();
      		Harry.clickAccNum(2);
      		browser.sleep(2000);
      		var transactionPage = Harry.clickTransaction();
            browser.sleep(2000);
            var row1 = transactionPage.getRow();
    		console.log(row1);
    		winston.log("info", "Row value obtained");
    		
        });
      
        it('withDrawError', function(){
        
        var customer=login.custLogin(0);
  		customer.selectName(1);
  		var Harry = customer.clickLogin();
  		Harry.clickAccNum(2);
  		browser.sleep(2000);
  		Harry.clickwithdraw();
  		Harry.enterAmt('2001');
  		Harry.clickwdraw();
  		expect(Harry.getMsg()).toBe(data.errorMsg);
  		winston.log("info", "error message verified");
  		
  		
        });

        it('withDrawSuccess', function(){
        	
        	var customer=login.custLogin(0);
      		customer.selectName(1);
      		var Harry = customer.clickLogin();
      		Harry.clickAccNum(2);
      		browser.sleep(2000);
      		Harry.clickwithdraw();
      		Harry.enterAmt('1000');
      		browser.sleep(2000);
      		Harry.clickwdraw();
      		expect(Harry.getMsg()).toBe(data.WithdrawMsg);
      		winston.log("info", "Withdraw message verified");
        	
        });
        
        it('TransationAfterWithdraw', function(){
        	
        	var customer=login.custLogin(0);
      		customer.selectName(1);
      		var Harry = customer.clickLogin();
      		Harry.clickAccNum(2);
      		browser.sleep(2000);
      		var transactionPage = Harry.clickTransaction();
            browser.sleep(2000);
            var row2 = transactionPage.getRow2();
    		console.log(row2);
    		winston.log("info", "Row value obtained");
        	
        })

	  
        .3it('TransationReset', function(){
		  var customer=login.custLogin(0);
    		customer.selectName(1);
    		var Harry = customer.clickLogin();
    		Harry.clickAccNum(2);
    		browser.sleep(2000);
    		var transactionPage = Harry.clickTransaction();
            browser.sleep(2000);
            transactionPage.clickReset();
            var row = transactionPage.getRow3();
            //console.log(row);
            //expect(transactionPage.getRow3()).toBeGreaterThan(0);
            winston.log("info", "Row is empty");
		    
            var homePage =  transactionPage.clickBack();
            browser.sleep(2000);
            homePage.clickLogout();
            browser.sleep(2000);
	  })
	
});