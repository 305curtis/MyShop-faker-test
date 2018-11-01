var faker = require("faker");

console.log("=====================");
console.log("WELCOME TO MY SHOP");
console.log("=====================");

for(var i = 0; i < 10; i++){

    var randoProduct = faker.commerce.productName();
    var randoPrice = faker.commerce.price();

    console.log(randoProduct + " - $" + randoPrice);
}