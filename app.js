// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 0.93;
    return valueInDollar;

}
console.log(fromEuroToDollar(1))










module.exports = {fromDollarToYen, fromEuroToDollar, fromYenToPound};