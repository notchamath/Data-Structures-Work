//Climbing Stairs with Least Expenses Problem:
//What is the best(least costly) way to climb to the nth stair if each step has a cost and you can take k amount of steps at a time?


//time complexity: O(nk)
//Space complexity: O(k)
function climbStairs(n, k, toll){

    //use cache to store tolls for each step(after calculation) and temp to store prev k values
    let cache = [k];
	let temp = [k];

    //base cases
    cache[0] = 0;

    //for each step i calculate tolls by using equation which adds the k previous steps' tolls to current step's toll
    for(let i=1; i<=n; i++){
        for(let j=1; j<=k; j++){
            if(i-j >= 0){
                temp[j-1] = cache[(i-j) % k];
            }
        }
        cache[i % k] = toll[i] + Math.min(...temp);
    }

    //return toll for least expensive route
    return cache[n % k];
}

// n = the target stair
// k = maximum steps you can take at a time
// toll = toll for stepping on each stair

let n = 3;
let k = 2;
let toll = [0,3,2,4];
climbStairs(n, k, toll);