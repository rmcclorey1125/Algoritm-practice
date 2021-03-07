var diagonalSort = function(mat) {
    const map = {}
    const row = mat.length
    const col = mat[0].length
    
    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(!map[i-j]){
                map[i-j] = []
            }
            map[i-j].push(mat[i][j])
        }
    }
    
    for(let key in map){
         map[key].sort((a,b) => {return a - b})
    }
   
    
    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            mat[i][j] = map[i - j].shift()
        }
    }
    return mat
};






// const diagonalMatrix = (matrix) =>{
//     let map = {}
//     let size = matrix.length
//     for(let i = 0; i < size; i++){
//         for(let j = 0; j < size; j++){
//             if(!map[i+j]){
//                 map[i+j] = []
//             }
//             map[i+j].push(matrix[i][j])
//         }
//     }
//     for(let key in map){
//         map[key].sort((a,b) => {return b-a})
//     }

//     for(let i = 0; i < size; i++){
//         for(let j = 0; j < size; j++){
//             matrix[i][j] = map[i+j].shift()
//         }
//     }
//     console.log(map)
//     console.log(matrix)
// }


// let mat = [ [1,3,9,4],
//             [9,5,7,7],
//             [3,6,9,7],
//             [1,2,2,2]]

// diagonalMatrix(mat)

