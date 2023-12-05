let greeting;
function weatherGreeting(name,temp,condition){
greeting =  ` hello ${name}, it is currently ${temp} degrees and is ${condition}`;
return greeting;
}
console.log("before Invocation"+greeting);
weatherGreeting("Maxwell",50,"cloudy");
console.log("After Invocation"+greeting);
