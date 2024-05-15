/*
We have a function that takes in an integer n, and returns a number x.
Lets call this function findX(n):

function findX(n) {
  let x = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 2*n; j++)
      x += i + j;
  }
  return x;
}

The functions loops through the number n and at every iteration, 
performs a nested loop on 2*n, at each iteration of this nested loop 
it increments x with the (nested loop index + parents loop index).
This works well when the numbers are reasonably small.

Examples:
  findX(2) //=> 16
  findX(3) //=> 63
  findX(5) //=> 325

However, it may be slow for numbers > 10 to the third power.
So your task is to optimize the function findX/find_x,
so it works well for large numbers.

Input Range:
1 <= n <= 10**6 (10**5 in JS)

Note: 
  This problem is more about logical reasoning 
  than it is about finding a mathematicial formula, 
  in fact there are no complex math formula involved.
*/