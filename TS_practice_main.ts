//implicit vs explicit types in TS

// 3 common types number, bool and string
// 2 others too but are less common like symbol and other one, I am not sure about
// .any can be used too to avoid type check in TS

//explicit
let firstNameE: string = "Mohsin Explicit";
//let firstNameExplicit: string = "Mohsin Explicit";

//good for better readability and strongly coupled types

//implicit
let firstNameI = "Mohsin Implicit";

console.log(
  "Exp: ",
  typeof firstNameE,
  firstNameE,
  "Imp: ",
  typeof firstNameI,
  firstNameI
);

let colleaguesArray: string[] = [];

colleaguesArray.push("Mohsin1");
colleaguesArray.push("Mohsin2");
colleaguesArray.push("Mohsin3");
colleaguesArray.push("Mohsin4");

console.log("type of collarray: ", typeof colleaguesArray, colleaguesArray);

// Implicit any as JSON.parse doesn't know what type of data it returns so it can be "any" thing...
let json: any = JSON.parse("55");
// Most expect json to be an object, but it can be a string or a number like this example

json = true;
console.log(typeof json);

function getdateandtime(numberparam: number): number {
  let datetobereturned: number = new Date().getDate();
  return datetobereturned + numberparam;
}

let outputoffunction: number = getdateandtime(33);
console.log(outputoffunction);

function divide({
  dividend,
  divisor,
}: {
  dividend: number;
  divisor: number;
}): number {
  return dividend / divisor;
}

const a = { dividend: 10, divisor: 2 };
// Example usage:
const result = divide(a);
console.log(result); // Output: 5
