const numIslands = (grid) => {
    const rows = grid.length
    const columns = grid[0].length
    let count = 0
    
        dfs = (r, c) => {
        if(r < 0 || c < 0 || r === rows || c === columns){
            return
        }
        if(grid[r][c] === '0'){
            return
        }
        grid[r][c] = '0'
        dfs(r-1, c)
        dfs(r+1, c)
        dfs(r, c-1)
        dfs(r, c+1)
    }
    
    for(let r = 0; r < rows; r++){
        for(let c = 0; c < columns; c++){
            if(grid[r][c] === '0'){
                continue
            }
            count++
            dfs(r, c)
        }
    }
    return count
};