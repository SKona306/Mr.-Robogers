// Business logic

function beebBoop(number){
  let numbersArray = [];
  for(let i = 0; i <= number; i++) {
    i = i.toString();
    if(i.includes(3)) {
      numbersArray.push("Won't you be my neighbor?")
    }else if(i.includes(2)) {
      numbersArray.push("Boop!")
    }else if(i.includes(1)) {
      numbersArray.push("Beep!")
    }else {
      numbersArray.push(i);
    }
  }
  return numbersArray;
}

beebBoop(1);