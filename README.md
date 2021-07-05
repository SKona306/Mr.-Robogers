# Mr. Roborogers Neighborhood

### A webpage that takes users number input and returns a special message.

### By Shaun Kent

## Technologies Used

* HTML5
* CSS
* Bootstrap
* Javascript
* JQuery

## Description

A webpage that will take a user input (number) and return a range of numbers from 0-user input. It will then take the range and apply 3 exceptions to each number then return a special message for the user.

## Setup/Instillation Requirements

* Go to repository using this url: https://github.com/SKona306/Mr.-Robogers

* click green code button in top right of repository

* Copy HTTPS link

* Open command line and enter: `cd [directory name]`

* In command line enter: `git clone [copied link]`

* In command line enter: `code .`

## Specifications
```
Describe: beebBoop()

Test: "It should return an array with a 0 if the number 0 is inputted."
code: beebBoop(0)
Expect(beebBoop(0).toEqual([0]);

Test: "It should return an array with an inputted number that is not 0."
code: beebBoop(12)
Expect(beepBoop(12).toEqual([12]);

Test: "It should return an array of numbers from 0 to number inputted."
code: beebBoop(5);
Expect(beepBoop(5).toEqual([0, 1, 2, 3, 4, 5]);

Test: "It should turn an array of numbers into a string of numbers."
code:
beepBoop(3)
let string = arr.toString()
Expect(beepBoop(3).toEqual("0, 1, 2, 3");

Test: "It should replace any number with a 3 with "Won't you be my neighbor?"
code: beepBoop(3)
Expect(beepBoop(3).toEqual(["0", "1", "2", "Won't you be my neighbor?"]);

Test: "It should replace any number with a 2 with "Boop!"
code: beebBoop(2)
Expect(beepBoop(2).toEqual(["0", "1", "Boop!"]);

Test: "It should replace any number with a 1 with "Beep!"
Code: beepBoop(1)
Expect(beepBoop(1).toEqual(["0", "Beep!"]);

Test: "It will return an array with numbers except 1, 2, 3 which are replaced by strings with Regex."
code: beepBoop(5)
Expect(beepBoop(5).toEqual(["0", "Beep!", "Boop!", "Won't you be my neighbor?", "4", "5"]);
```
## Known Bugs

* When the viewport width of the page becomes too small (mobile size) then the info section text is squeezed making readability difficult.

## License 

[MIT](https://choosealicense.com/licenses/mit/)

## Contact Information

* shaunkent81@gmail.com

