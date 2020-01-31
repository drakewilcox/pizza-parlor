// BUSINESS LOGIC
function PizzaOrder(size, veggieToppings, premiumToppings) {
  this.standardPrice = 7
  this.size = size,
  this.veggieToppings = veggieToppings,
  this.premiumToppings = premiumToppings;
}




// USER LOGIC 
var pizzaOrder = new PizzaOrder();

$(document).ready(function(){
  $("form.orderForm").submit(function(event){
    var pizzaSize = [];
    var veggieTopping = [];
    var premiumToppings = [];

    event.preventDefault();

  })
})