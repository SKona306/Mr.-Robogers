// Business logic

function beebBoop(userInputNumber){
  let numbersArray = [];
  for(let i = 0; i <= userInputNumber; i++) {
    i = i.toString();
    if(i.match(/3/g)) {
      numbersArray.push("Won't you be my neighbor?")
    }else if(i.match(/2/g)) {
      numbersArray.push("Boop!")
    }else if(i.match(/1/g)) {
      numbersArray.push("Beep!")
    }else {
      numbersArray.push(i); 
    }
  }
  return numbersArray;
}

beebBoop(20);

// Interface Logic 

$(document).ready(function() {
  
})