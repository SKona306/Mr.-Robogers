// Business logic

function beebBoop(number){
  let numberArray = [];
  for(let i = 0; i <= number; i++) {
    numberArray.push(i);
  }
  return numberArray;
}

beebBoop(10);