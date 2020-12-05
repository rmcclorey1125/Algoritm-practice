function binarySearch(arr, val){
    let left = 0
    let right = arr.length - 1
    let mid = Math.floor((right + left)/2)
    
    while(arr[middle] !== val && left <= right){
        if(val < arr[middle]){
            right = mid - 1
        } else {
            left = mid + 1
        }
        mid = Math.floor((right + left)/2)
    }
    if(arr[mid] === val){
        return mid
    }
    return -1
}