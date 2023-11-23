// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together
function sumTwoNumbers(a,b){
console.log(a,b);
return console.log(a+b);
};
// invoke the function and pass in two numbers
sumTwoNumbers(2,3);
// invoke the function and pass in more than two numbers
sumTwoNumbers(3,4,5);
// invoke the function and pass in only one number
sumTwoNumbers(1);
// change the function to set default values for the parameters
function sumTwoNumbersA(a=1,b=1){
  console.log(a,b);
  return console.log(a+b);
  };
// again, invoke the function and pass in only one number
sumTwoNumbersA(1);
// Rest Operator
function sumTwoNumbersB(a=1,b=1,...c){
  console.log(a,b);

   console.log(c);
   return(a+b);
  };
  sumTwoNumbersB(1,2,3,4,5);
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator

// again, invoke the function and pass in more than two numbers
