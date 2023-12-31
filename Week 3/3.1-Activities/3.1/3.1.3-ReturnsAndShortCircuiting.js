// ? what does the function below return?
function myNumberFunction() {
  let num = 2 ** 2;
  num = num + 3;
  num = num % 4;
  num = num * 14;
  console.log(num);
  return num;
}
myNumberFunction();
// change the function above to return a value

// Short Circuiting
// ! the console.log will not print
function shortCircuitFunction() {
  return console.log("Zap! - Short Circuited!");
  console.log(
    "This will never print because it is after the return statement."
  );
}
shortCircuitFunction();

// ? will the following function short circuit?
let height = 47;
function checkCircusRides() {
  if (height < 48) {
    return console.log("zap-short circuited!");
    console.log("Take a ride on the carousel!");
  }
  if (height < 60) {
    console.log("Try the bumper cars!");
  }
  console.log("Enjoy the roller coaster!");
}
 checkCircusRides();
//no the code will not short circuit.
// change the function above to use short circuiting
