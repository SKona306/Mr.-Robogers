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

