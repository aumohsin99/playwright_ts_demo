//implicit vs explicit types in TS
// 3 common types number, bool and string
// 2 others too but are less common like symbol and other one, I am not sure about
// .any can be used too to avoid type check in TS
//explicit
var firstNameE = "Mohsin Explicit";
//let firstNameExplicit: string = "Mohsin Explicit";
//good for better readability and strongly coupled types
//implicit
var firstNameI = "Mohsin Implicit";
console.log("Exp: ", typeof firstNameE, firstNameE, "Imp: ", typeof firstNameI, firstNameI);
var colleaguesArray = [];
colleaguesArray.push("Mohsin1");
colleaguesArray.push("Mohsin2");
colleaguesArray.push("Mohsin3");
colleaguesArray.push("Mohsin4");
console.log("type of collarray: ", typeof colleaguesArray, colleaguesArray);
// Implicit any as JSON.parse doesn't know what type of data it returns so it can be "any" thing...
var json = JSON.parse("55");
// Most expect json to be an object, but it can be a string or a number like this example
json = true;
console.log(typeof json);
function getdateandtime(numberparam) {
    var datetobereturned = new Date().getDate();
    return datetobereturned + numberparam;
}
var outputoffunction = getdateandtime(33);
console.log(outputoffunction);
function divide(_a) {
    var dividend = _a.dividend, divisor = _a.divisor;
    return dividend / divisor;
}
var a = { dividend: 10, divisor: 2 };
// Example usage:
var result = divide(a);
console.log(result); // Output: 5
