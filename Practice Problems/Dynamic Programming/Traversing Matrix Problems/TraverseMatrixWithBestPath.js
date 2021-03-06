//Problem: What is the most profit to be made when traversing to point (i,j) if you started at point (0,0)?


//function takes in the the matrix with profits from each cell and outputs the most profit to be made while getting to the final point (m,n)
function uniquePath(grid){

	//create multidimentional array of size (m x n)
	let m = grid.length;
	let n = grid[0].length;

	let dp = new Array(m);
	for(let i = 0; i < m; i++){
		dp[i] = new Array(n);
	}

	//keep adding the profit from each of ways to get to the point you want to get to, choose the most profitable path 
	for(let i = 0; i < m; i++){
		for(let j = 0; j < n; j++){
			dp[i][j] = grid[i][j];
			if(i > 0 && j > 0){
				dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]) + grid[i][j];
			} else if(i > 0){
				dp[i][j] = dp[i-1][j] + grid[i][j];
			} else if(j > 0){
				dp[i][j] = dp[i][j-1] + grid[i][j];
			}
		}
	}

	//return the path of most profits that goes to (m,n)
	let path = new Array();
	return getPath(dp, m-1, n-1, path);
}

//this function traverses backwars to the original starting point and returns the most profitable path using recursion
function getPath(dp, i, j, path){
	if( j === 0 && i === 0){
		path.push([i,j]);
		return path;
	} else if (i === 0){
		path = getPath(dp, i, j-1, path);
	} else if (j === 0){
		path = getPath(dp, i-1, j, path);
	} else {
		if (dp[i-1][j] > dp[i][j-1]){
			path = getPath(dp, i-1, j, path);
		} else {
			path = getPath(dp, i, j-1, path);
		}
	}
	path.push([i,j]);
	return path;
}

//matrix
let grid = [
	[0,2,2,50],
	[3,1,1,100],
	[4,4,2,0]
];

uniquePath(grid);