const rotate = (matrix) => {
    matrix = matrix.reverse()
    for(let i in matrix){
        for(let j = 0; j < i; j++){
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }
    return matrix
}; 
