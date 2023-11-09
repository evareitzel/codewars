// Grasshopper - Terminal game move function

// Description: 
// Terminal game move function
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

// Example:
// move(3, 6) should equal 15

// My Solution:
move = (p,r) => p + r*2

function move2 (position, roll) {
  return position + ( roll * 2 )
}

// Best Practice Solutions: 

// 1
// const move = (position, roll) => position + roll * 2

// 2
// function move (position, roll) {
//   return position + roll * 2
// }

// 3
// const move = (p, r) => p + r * 2;