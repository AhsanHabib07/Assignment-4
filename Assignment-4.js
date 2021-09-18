// Function For SeerToMOn

function seerToMon(weight) {
    var mon = weight * 40;
    return mon;
}
var monNow = seerToMon(100);

console.log(monNow);

// function totalSales
function totalSales(tshirt, pant, shoe) {
    if (typeof tshirt === "number" && typeof pant === "number" && typeof shoe === "number") {

        let tshirtPrice = 100;
        let pantPrice = 200;
        let shoePrice = 500;

        let total = tshirt * tshirtPrice + pant * pantPrice + shoePrice * shoe

        return total;


    }
    else {
        return "Input Must Be Number"
    }

}

console.log(totalSales(5, 6, 10));

// Function For deliveryCost

function deliveryCost(quantity) {
    var first100 = 100;
    var second100 = 80;
    var restcost = 50;

    if (quantity <= 100) {
        const cost = quantity * first100
        return cost;
    }
    else if (quantity <= 200) {
        const firstCost = 100 * first100;
        const restNumbers = quantity - 100;
        const secondCost = restNumbers * second100;
        const totalCost = firstCost + secondCost;

        return totalCost;
    }
    else {
        const firstCost = 100 * first100;
        const secondCost = 100 * second100;
        const restNumbers = quantity - 200;
        const resttotal = restNumbers * restcost;

        const totalCost = firstCost + secondCost + resttotal;

        return totalCost;

    }
}

console.log(deliveryCost(250));

// Function For friendlist


var friendList = ["Saji", "kaws", "Rubay", "Epci"];
function getArray(array) {
    for (i = 0; i < array.length; i++) {
        if (array[i].length == 5) {
            return array[i];
        }

    }
    return "No Matching Item";
}
let returnValue = getArray(friendList);
console.log(returnValue);








