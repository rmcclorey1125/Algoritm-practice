const maxArea = (height) => {
    let max = 0
    let i = 0
    let j = height.length - 1
    
    while(i < j){
        max = Math.max(max, ((j-i) * Math.min(height[i], height[j])))
        height[i] <= height[j] ? i++ : j--
    }
    return max
};



// const maxArea = (height) => {
//     let max = 0
//     for(let i = 0; i < height.length; i++){
//        for(let j = 0; j < height.length; j++){
//            max = Math.max(max, ((j-i) * Math.min(height[i], height[j])))
//        }
//     }
//     return max
// };