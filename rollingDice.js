const rolling = num => {
  let result = [];

  while (result.length < num) {
    result.push(Math.floor(Math.random() * 6) + 1);
  }

  return `Rolled ${num} dice: ${result.join(", ").trim()}`;
};

console.log(rolling(process.argv[2]));
