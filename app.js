/*********************************************************
Lab 3 - Complex Object
Create a bankAccount object that satisfies the following requirements:

The bankAccount object has a field named checking with an initial value of 500.23.
The bankAccount object has a field named savings with an initial value of 200.00.
The bankAccount object has a method named transfer() that enables you to transfer a certain amount of money from checking to savings.
Verify that the bankAccount object works as you expect by calling transfer(100) to transfer 100.00 from checking to savings. After performing the transfer, verify that checking equals 400.23 and savings equals 300.00.
*********************************************************/

// Create a bankAccount object
var bankAccount = {
  /* The bankAccount object has a field named checking with an initial value of
  500.23*/
  checking: 500.23,
  /* The bankAccount object has a field named savings with an initial value of
  200.00.*/
  savings: 200.00,
  /* The bankAccount object has a method named transfer() that enables you to
  transfer a certain amount of money from checking to savings.*/
  transfer: function(amountTransfer){
    this.checking -= amountTransfer;
    this.savings += amountTransfer;
    console.log('Checking: ' + this.checking);
    console.log('Savings: ' + this.savings);
  }
};

/* Verify that the bankAccount object works as you expect by calling transfer(100)
to transfer 100.00 from checking to savings. After performing the transfer,
verify that checking equals 400.23 and savings equals 300.00.*/
console.log('Checking: ' + bankAccount.checking);
console.log('Savings: ' + bankAccount.savings);

bankAccount.transfer(100);

/**********Output**********
app.js:26 Checking: 500.23
app.js:27 Savings: 200
app.js:21 Checking: 400.23
app.js:22 Savings: 300
***************************/
