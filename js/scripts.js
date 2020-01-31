// BUSINESS LOGIC
function PizzaOrder(sizeResponse, toppingsResponse, premiumResponse) {
  this.standardPrice = 7
  this.sizeResponse = sizeResponse,
  this.toppingsResponse = toppingsResponse,
  this.premiumResponse = premiumResponse;
}

PizzaOrder.prototype.update = function(sizeResponse, toppingsResponse, premiumResponse) {
  this.sizeResponse = sizeResponse,
  this.toppingsResponse = toppingsResponse,
  this.premiumResponse = premiumResponse;
  console.log(pizzaOrder);
}

PizzaOrder.prototype.getPrice = function() {
  var upCharge = 0
  if (this.sizeResponse === "md") {
    upCharge += 3;
  } else if (this.sizeResponse === "lg") {
    upCharge += 5;
  }
  if (this.toppingsResponse.length === 1) {
    upCharge += 1;
  }
  // for (let index = 0; index < this.toppingsResponse.length; index += 1) {
  //   toppingsAmount = this.toppingsResponse.indexOf("");
  //   upcharge = (toppingsAmount +=1);

  // }
  // console.log(this.standardPrice + upCharge);
}


function makeOrder() {
  var sizeResponse = $("#size").val();
  var toppingsResponse = [];
  var premiumResponse = [];
  console.log(sizeResponse);
  
  $("input:checkbox[name=toppings]:checked").each(function() {
    var toppings = $(this).val();
    toppingsResponse.push(toppings);
    console.log(toppingsResponse);
  });
  $("input:checkbox[name=premium]:checked").each(function() {
    var premium = $(this).val();
    premiumResponse.push(premium);
    console.log(premiumResponse);
  });
  
  pizzaOrder.update(sizeResponse, toppingsResponse, premiumResponse)
  
  var pizzaPrice = pizzaOrder.getPrice();
  console.log(pizzaPrice);
}







// USER LOGIC 
var pizzaOrder = new PizzaOrder();

$(document).ready(function(){
  $("form.orderForm").submit(function(event){
    event.preventDefault();
    makeOrder();
    

  
    
    var premiumToppings = [];
    var pizzaSize = $("#size").val();
    
   

  })
})