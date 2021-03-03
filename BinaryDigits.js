const binaryDigits = (arr) =>{
    const noOfZeros = new Array(arr.length).fill(0)
    let count = 0

    noOfZeros[arr.length - 1] = 1 - arr[arr.length - 1]
    for(let i = arr.length - 2; i >= 0; i--){
        noOfZeros[i] = noOfZeros[i+1]
        if(arr[i] === 0){
            noOfZeros[i]++
        }
    }
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 1){
            count += noOfZeros[i]
        }
    }
    console.log(count)
    return count
}

// const binaryDigits = (arr) =>{
//     let count = 0
//     let zeros = 0

//     for(let i = arr.length - 2; i >= 0; i--){
//         if(arr[i] === 0){
//             zeros++
//         }else{
//             count += zeros
//         }
//     }
//     console.log(count)
//     return count
// }




binaryDigits([0,0,1,0,1,0,1,1])

// binaryDigits([1,1,1,1,0,1,0,1])


// [1,1,1,1,0,1,0,1]