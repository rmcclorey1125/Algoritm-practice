const maxAreaOfIsland = (grid) => {
    const row = grid.length
    const column = grid[0].length
    let max = 0
    
    const dfs = (r, c) =>{
        if(r >= 0 && c >= 0 && r < row && c < column){
            if(grid[r][c] === 1){
                grid[r][c] = 0
                return 1 + dfs(r-1, c) + dfs(r+1, c) + dfs(r, c-1) + dfs(r, c+1)
            }
        }
        return 0
    }
    
    for(let r = 0; r < row; r++){
        for(let c = 0; c < column; c++){
            max = Math.max(max, dfs(r, c))
        }
    }
    return max
};