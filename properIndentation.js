const power = (num, exp)=> {
  var result = 1;
  for(let i = 1; i < exp; i++) {
    result *= num;
  };
  return result;
};
