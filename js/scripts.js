// Business logic

function beebBoop(number){
  let numbersArray = [];
  for(i = 0; i <= number; i++) {
    numbersArray.push(i);
  }
  let numbersString = numbersArray.toString();
  console.log(numbersString)

  return numbersArray;
}

beebBoop(3);