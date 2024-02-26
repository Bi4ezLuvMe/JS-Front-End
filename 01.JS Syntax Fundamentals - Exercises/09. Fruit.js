function fruits(fruit,weight, pricePerKilogram){
    console.log(`I need $${((weight/1000)*pricePerKilogram).toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${fruit}.`);
}