function bubbleSort(arr) {
    let noSwaps
    for(let i = arr.length; i > 0; i--){
        for(let j = 0; j < i - 1; j++){
            let temp = arr[j]
            if(arr[j] > arr[j+1]){
                arr[j] = arr[j+1]
                arr[j+1] = temp
                noSwaps = false
            } 
        }
    }
    if (noSwaps) break
} 