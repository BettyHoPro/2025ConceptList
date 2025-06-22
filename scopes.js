let myGlobalVar = "global";

const printMyVars = () => {
  let myLocalVar = "local";
  console.log("-- Inside printMyVars --");
  console.log("myLocalVar is :",  myLocalVar);
  console.log("MyGlobalVar is :", myGlobalVar);
};

printMyVars();

console.log("--Outside of printMyVas now--");
// console.log(myLocalVar);

console.log("=======");
let myVar = "global";

const myFunc = () => {
  let myVar = "local";
  console.log("Inside myFunction, myVar is:", myVar);
};

myFunc();

console.log("Outside myFunction, myVar is:", myVar);