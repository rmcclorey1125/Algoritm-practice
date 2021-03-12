const ConstructionMat = (arr) => {
    if(arr.length === 0){
        return 0
    }

    for(let i = 1; i < arr.length; i++){
        arr[i][0] += Math.min(arr[i-1][1], arr[i-1][2])
        arr[i][1] += Math.min(arr[i-1][0], arr[i-1][2])
        arr[i][2] += Math.min(arr[i-1][0], arr[i-1][1])
    }
    
    let ans = Math.min(Math.min(arr[arr.length - 1][0], arr[arr.length - 1][1]), arr[arr.length - 1][2])
    // console.log(ans)
    return ans
}

ConstructionMat([[1,2,2], [2,2,1], [2,1,2]])
//3