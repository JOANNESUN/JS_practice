

// start
// 2 new objects (apple and orange) of type product
// shoppingCart [] => shoppingCart.add(Apple)
// shoppingCart.Remove();
// forEach in shopping -> Every loop -> get price and assign it
// global varialbe called 'total', total= total + price
// print total


class Product {

    constructor(name, price) {
      // invokes the setter
      this.name = name;
      this.price = price;
    }
  }


  //Adding Apple
  module.exports =  apple = new Product("Apple",4.95)

  // Adding Orange
  module.exports =  orange = new Product("Orange",3.99)


  //Initializing the shopping cart
  module.exports = shoppingCart = [];
  //console.log(shoppingCart);
  console.log('\n')
  console.log("Welcome to My Fruit Shop!")

//module.exports = function cart()
module.exports = cart = () =>
{
  console.log('\n')
  console.log("Press 1 to Add a fruit to cart")
  console.log("Press 2 to Remove a fruit from cart")
  console.log("Press 3 to View total")
  console.log("Press 4 to Exit")
  console.log("---------------------------")

  // sigint lets the user exit the command prompt using Ctrl+C
  const prompt = require('prompt-sync')({sigint: true});;

  var choice = prompt('What is your choice??');
  // validating that the input is number
  choice = Number(choice)
  console.log("Your choice is: "+choice)

if (choice === 1){

    // put the below in a function like viewAddMenu()
    console.log("Press 1 to add Apple: $4.95")
    console.log("Press 2 to add Orange: $3.99")


    addChoice = prompt('Type 1 or 2 :')
    addChoice = Number(addChoice)

    if(addChoice === 1){
      console.log("Added Apple!")
      shoppingCart.push(apple)

    } else if (addChoice === 2){
      console.log("Added Orange!")
      shoppingCart.push(orange)
    }}

else if (choice === 2){

    console.log("Type Apple to remove Apple: $4.95")
    console.log("Type Orange to remove Orange: $3.99")

    removeChoice = prompt('What is your choice?')
    removeChoice = String(removeChoice)

    if(removeChoice === 'Apple'){
        console.log("Remove Apple!")
        console.log('\n')

        var indexOfApple = shoppingCart.findIndex(e => e.name === "Apple")
        //console.log("Value of x: " +indexOfApple)
        if(indexOfApple != -1){
            shoppingCart.splice(indexOfApple,1)
        } else {
            console.log("Cannot remove! No Apples in your shopping cart")
        }
        return shoppingCart

    } else if (removeChoice === 'Orange'){
        console.log("Remove Orange!")
        console.log('\n')
        var indexOfOrange = shoppingCart.findIndex(e => e.name === "Orange")
        //console.log("Value of x: " +indexOfOrange)

        if(indexOfOrange != -1){
            shoppingCart.splice(indexOfOrange,1)
        } else {
            console.log("Cannot remove! No Orange in your shopping cart")
        }
        return shoppingCart
    }
    else{
        console.log("Invalid Input! You can only enter 'Apple' and 'Orange'")
    }}

else if (choice === 3){

    console.log("Cart Total: $" + JSON.stringify(shoppingCart))

    }
else {

  console.log('Are you sure you want to exit?')
  console.log('\n')
}


  //variable to track the total price in the shopping cart
  module.exports = cartTotal = 0;
  console.log("Here is your shopping Cart!")
  var counter = 1;
  shoppingCart.forEach(function(product){
    console.log(counter+".")
    console.log("Name: "+product.name)
    console.log("Price: "+product.price)
    //console.log("Name: "+product.count)
    // Calculating the price of the shopping cart
    cartTotal += product.price
    counter++;})

    console.log("Cart Total: $" + cartTotal.toFixed(2))
    console.log('\n')


 }// entire cart function ends here


//cart();


var choices = 'y'

while (choices ==='y'){
  var finalPrice = cart();
  console.log("Type y to continue Shopping")
  console.log("Type n to Exit")
  console.log("---------------------------")

  // sigint lets the user exit the command prompt using Ctrl+C
  const prompts = require('prompt-sync')({sigint: true});;

  choices = prompts('Please type y or n:');
  // validating that the input is number
  choices = String(choices)
  console.log("You choose : "+choices)

}

// Test1 Add 2 apples 1 orange total should be 13.89
module.exports = test1 = () => {
  cart1 = []
  cart1.push(apple)
  cart1.push(apple)
  cart1.push(orange)

  total = 0
  cart1.forEach(function(product){
    // Calculating the price of the shopping cart
    total += product.price
  })

  return total;
}

// Test 2 Add 3 apples remove one, correct price should be 9.9

module.exports = test2 = () => {
  cart2 = []
  cart2.push(apple)
  cart2.push(apple)
  cart2.push(apple)
  cart2.pop(apple)

  total = 0
  cart2.forEach(function(product){
    // Calculating the price of the shopping cart
    total += product.price
  })

  return total;
}
