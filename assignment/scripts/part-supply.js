console.log('****** Part Supply *******');
// ***** REQUIRED FEATURES *********************************************
// For each question, be sure to use console.log statements to ensure that
// your code does what you expect!

// 1. Create a variable called 'partsNeeded' with a value of the number 40.
console.log('1. Create partsNeeded:');
let partsNeeded = 40;
console.log('1. Create partsNeeded:', partsNeeded);

// 2. Create a variable called 'supplyChanges' whose value is an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11.
console.log('2. Create supplyChanges:');
let supplyChanges = [3, 5, -6, 0, 7, 11];
console.log('2. Create supplyChanges:',supplyChanges);

// 3. Create a variable called 'secondItem' and assign it the value of the second
//    item in the 'supplyChanges' array.
console.log('3. Access the second value of supplyChanges:');
 let secondItem = supplyChanges[1]
 console.log('3. Access the second value of supplyChanges:', secondItem);

// 4. The last value in the 'supplyChanges' array was added by mistake.
//    Remove it from the array and store it inside a new variable called 'removedItem'.
console.log('4. Remove the last value from supplyChanges:');
let removedItem = supplyChanges.pop();
console.log('4. Remove the last value from supplyChanges:', removedItem);

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
console.log('5. Add the value 25 into supplyChanges.');
supplyChanges.push(25);
console.log('5. Add the value 25 into supplyChanges.',supplyChanges);

// 6. Create three new variables named 'positives', 'negatives', and
//    'zeroes' whose values are empty arrays. Then, write a for loop
//    that loops through the 'supplyChanges' array. For each iteration of
//    the loop:
//      - If the value is a positive number, push it into the 'positives' array.
//      - If the value is a negative number, push it into the 'negatives' array.
//      - If the value is a zero, push it into the 'zeroes' array.
console.log('6. Looping through supplyChanges to populate arrays with positive, negative, and zero values:');
 
let positives = [];
let negatives = [];
let zeroes = [];

for (let i=0; i<=supplyChanges.length-1; i++) {
  // if the values is positive push oneSupplychange into postive array
  if (supplyChanges[i] > 0 ) {
    positives.push(supplyChanges[i]);
    // If the value is a negative number, push it into the 'negatives' array.
  } else if (supplyChanges[i] < 0 ) {
    negatives.push(supplyChanges[i]);
    //      - If the value is a zero, push it into the 'zeroes' array.
  }  else if (supplyChanges[i] === 0 ) {
    zeroes.push(supplyChanges[i]);
  } 
}
console.log('These are the positives in the supplyChanges array',positives);
console.log('These are the negatives in the supplyChanges array',negatives);
console.log('These are the zeroes in the supplyChanges array',zeroes);

// ***** STRETCH GOALS *********************************************
// 7. Rewrite the 'for' loop from #6 as a 'for...of' loop. Instead of 'positives',
//    'negatives', and 'zeroes', create three new arrays named 'stretchPositives',
//    'stretchNegatives', and 'stretchZeroes'. 
console.log('7. Looping through supplyChanges to populate more arrays with positive, negative, and zero values:');
// create three new arrays named 'stretchPositives',
// 'stretchNegatives', and 'stretchZeroes'. 
stretchPositives = [];
stretchNegatives =[];
stretchZeroes = [];
for ( array of supplyChanges) {
  if (array > 0) {
    stretchPositives.push(array);
  } else if (array < 0) {
    stretchNegatives.push(array);
  } else if (array === 0) {
    stretchZeroes.push(array)
  }
}
console.log('stretchPositives:',stretchPositives);
console.log('stretchNegatives:',stretchNegatives);
console.log('stretchZeroes:',stretchZeroes);
// 8. Create a variable called 'totalParts' and assign it a value of 0.
//    Then, write a loop that adds each value of the 'supplyChanges'
//    array to the 'totalParts' variable.
console.log('8. Looping through supplyChanges to calculate the sum:');
// Create a variable called 'totalParts' and assign it a value of 0.
let totalParts = 0;
for ( let i =0; i<supplyChanges.length; i++ ) {
totalParts += (supplyChanges[i])
}
console.log('8. Looping through supplyChanges to calculate the sum:', totalParts);

// 9. We have a large stash of parts in our warehouse that we 
//    need to box up and get ready for shipment. There are 572
//    parts in total, and each box holds 7 parts.
//    Create two variables:
//      1. 'parts': Set its value to 572
//      2. 'boxesFilled': Set its value to 0
//    Use a 'while' loop to keep adding parts to boxes UNTIL
//    no more boxes can be filled. When the loop is finished,
//    the value of 'parts' should reflect how many parts are
//    "left over," and the value of 'boxesFilled' should reflect
//    how many boxes were filled.
console.log('9. Filling boxes with a "while" loop');
// 82 boxes that each hold 7 parts
// total number of parts equlas 572
let parts = 572;
let boxesFilled = 0;
// run code whole the boxes filleed is less than 572
 while (boxesFilled <= 572) {
  // if the boxes filled is less than 572 add 7 to the value in boxes filled.
if (boxesFilled < 572) {
boxesFilled += 7;
// determine if boxes filled is greater than 572 by subtracting the value in boxes filled minues 572.
// console log the differnce 
} else if (boxesFilled > 572){
 let leftOver = boxesFilled - 572;
 console.log('This is the remainder',leftOver)
} 
 }
//  console.log('9.Filling boxes with a "while" loop',boxesFilled);
// console.log(parts);
// trying again
while ( parts <= 572) {
 if (parts > 0) {
  boxesFilled += 1;
parts -=7 ;
} else if ( parts > 0 ) {
   console.log('This is the remainder',parts)
 } 
}
// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    partsNeeded: typeof partsNeeded !== 'undefined' ? partsNeeded : undefined,
    supplyChanges: typeof supplyChanges !== 'undefined' ? supplyChanges : undefined,
    secondItem: typeof secondItem !== 'undefined' ? secondItem : undefined,
    removedItem: typeof removedItem !== 'undefined' ? removedItem : undefined,
    positives: typeof positives !== 'undefined' ? positives : undefined,
    negatives: typeof negatives !== 'undefined' ? negatives : undefined,
    zeroes: typeof zeroes !== 'undefined' ? zeroes : undefined,
    stretchPositives: typeof stretchPositives !== 'undefined' ? stretchPositives : undefined,
    stretchNegatives: typeof stretchNegatives !== 'undefined' ? stretchNegatives : undefined,
    stretchZeroes: typeof stretchZeroes !== 'undefined' ? stretchZeroes : undefined,
    totalParts: typeof totalParts !== 'undefined' ? totalParts : undefined,
    parts: typeof parts !== 'undefined' ? parts : undefined,
    boxesFilled: typeof boxesFilled !== 'undefined' ? boxesFilled : undefined,
  }
} catch (e) {
  // Do nothing
}
