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
}
PizzaOrder.prototype.getPrice = function() {
  var upCharge = 0;
  if (this.sizeResponse === "sm") {
    upCharge = 0;
  } if (this.sizeResponse === "md") {
    upCharge += 2;
  } else if (this.sizeResponse === "lg") {
    upCharge += 3;
  }
  var toppingsAmount = parseInt(this.toppingsResponse.length) * .50; 
  var premiumAmount = parseInt(this.premiumResponse.length) * 1;
  return this.standardPrice + toppingsAmount + premiumAmount + upCharge; 
  }
function makeOrder() {
  var sizeResponse = $("#size").val();
  var toppingsResponse = [];
  var premiumResponse = [];
  
  $("input:checkbox[name=toppings]:checked").each(function() {
    var toppings = $(this).val();
    toppingsResponse.push(toppings);
  });
  $("input:checkbox[name=premium]:checked").each(function() {
    var premium = $(this).val();
    premiumResponse.push(premium);
  });
  
  pizzaOrder.update(sizeResponse, toppingsResponse, premiumResponse)
  
  var pizzaPrice = pizzaOrder.getPrice();
  $("#output").text("$" + pizzaPrice);
  $(".output").show();
}
// USER LOGIC 
var pizzaOrder = new PizzaOrder();

$(document).ready(function(){
  $("form.orderForm").submit(function(event){
    event.preventDefault();
    makeOrder();
  });
});


