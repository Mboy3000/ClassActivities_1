// create an Array using an Array literal
const trucks=["F-459","f-259","Silverado"];

// access the 1st item in the Array
console.log(trucks[0]);
// access the last item in the Array
console.log(trucks[2]);
// print the length of the Array
console.log(trucks.length);
// use the length property to access the last item in the Array
console.log(trucks[trucks.length-1]);
// with for...of, loop over the Array, modify the value and add to a different Array
const cars=[];

for (let vehicle of trucks){
let output=`Ford ${vehicle}`;
cars.push(output);
}
console.log(cars);
