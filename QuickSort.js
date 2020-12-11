function pivot(arr, start = 0, end = arr.length - 1){
    function swap(array, i, j) {
        let temp = array[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    let piv = arr[start]
    let swapIndex =  start
    for(let i = start + 1; i < arr.length; i++){
        if(piv > arr[i]){
            swapIndex++
            swap(arr, swapIndex, i)
        }
    }
    swap(arr, start, swapIndex)
    return swapIndex
}

function quickSort(arr, left = 0, right =arr.length-1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right)
        quickSort(arr, left, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr
}

quickSort([4,6,8,1,2,5])