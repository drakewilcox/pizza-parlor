// BUSINESS LOGIC
function PizzaOrder() {
}
PizzaOrder.prototype.update = function(sizeResponse, toppingsResponse, premiumResponse) {
  this.sizeResponse = sizeResponse,
  this.toppingsResponse = toppingsResponse,
  this.premiumResponse = premiumResponse;
}
PizzaOrder.prototype.getPrice = function() {
  var toppingsAmount = parseInt(this.toppingsResponse.length) * .50; 
  var premiumAmount = parseInt(this.premiumResponse.length) * 1;
  this.standardPrice = 7 + toppingsAmount + premiumAmount;
  if (this.sizeResponse === "sm") {
    this.standardPrice += 0
  } if (this.sizeResponse === "md") {
    this.standardPrice += 2;
  } else if (this.sizeResponse === "lg") {
    this.standardPrice += 3;
  }
  return this.standardPrice;
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
  pizzaOrder.getPrice();
  $("#output").text("$" + pizzaOrder.standardPrice);
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


