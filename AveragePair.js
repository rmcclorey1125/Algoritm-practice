function averagePair(arr, avg){
    let first = 0
    let last = arr.length - 1
    while(first < last){
        if((arr[first] + arr[last]) / 2 === avg){
            return true
        } else if((arr[first] + arr[last]) / 2 > avg){
            last--
        } else {
            first++
        }
    }
    return false
}