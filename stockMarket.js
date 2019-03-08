function maxProfit(list){

let profits = [];

for(let i = 0; i < list.length; i++){

  for(let n = i +1; n < list.length - i; n++){

    if(list[n]-list[i] > 0){
      profits.push(list[n]-list[i])
    }

  }

}

return Math.max(...profits);
}

let arr = [45, 24, 35, 31, 40, 38, 11]
console.log(maxProfit(arr))
//should return 4
//[3, 6, 10]

// should return 16
// [45, 24, 35, 31, 40, 38, 11]


// Create a function maxProfit, which, given a list of stock prices for a given day, returns the maximum profit that could have been made by buying a stock at the given price and then selling the stock later on. For example if the input is: [45, 24, 35, 31, 40, 38, 11] then your program should return 16 because if you bought the stock at $24 and sold it at $40, a profit of $16 was made and this is the largest profit that could be made. If no profit could have been made, return -1.

// Strategy 1: Brute Force
// If you think about it for a few minutes, you'll realize this problem is non-trivial to solve. So, let's not worry about a "clean" or "efficient" solution. Here's the recommended "brute force" strategy: for each pair of valid dates, calculate the profit, then, figure out which dates corresponded to the max profit.

// For example, if your values were: [a, b, c], you would check profits for: [a,b], [a,c] and [b,c].