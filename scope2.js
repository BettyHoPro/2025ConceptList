const person = "Betty";

//Bad 
const sayHelloBadly = () => console.log(`Howdym ${person}`);

sayHelloBadly();

const sayHelloGoodly = name => console.log(`Howdy, ${name}`);

sayHelloGoodly(person);