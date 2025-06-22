let myGlobalVar = "global";

const printMyVars = () => {
  let myLocalVar = "local";
  console.log("-- Inside printMyVars --");
  console.log("myLocalVar is :",  myLocalVar);
  console.log("MyGlobalVar is :", myGlobalVar);
};

printMyVars();

console.log("--Outside of printMyVas now--");
console.log(myLocalVar);