const diagonalSum = (mat) => {
    let sum = 0
    let j = mat[0].length - 1
  
    for (let i = 0; i < mat.length; i++, j--) {
      if (i !== j){
          sum += mat[i][j]
      }
      sum += mat[i][i]
    }
  
    return sum
}


// var diagonalSum = function(mat) {
//     let sum = 0
    
//     for(let i = 0; i < mat.length; i++){
//         for(let j = 0; j < mat.length; j++){
//             if(i - j === 0){
//                 sum += mat[i][j]
//             }
//             if(i + j === mat.length-1 && i - j !==0){
//                 sum += mat[i][j]
//             }
//         }
//     }
//     return sum
// };
