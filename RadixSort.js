function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

function digitCount(num) {
     if(num === 0){
         return 1
     }
     return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(arr){
    let maxLength = 0
    for(let i = 0; i < arr.length; i++){
        maxLength = Math.max(maxLength, digitCount(arr[i]))
    }
    return maxLength
}

function radixSort(nums){
    let k = mostDigits(nums)
    for(let i = 0; i < k; i++){
        let buckets = Array.from({length: 10}, () => [])
        for(let j = 0; j < nums.length; j++){
            let digit = getDigit(nums[j],i)
            buckets[digit].push(nums[j])
        }
        nums = [].concat(...buckets)
    }
    return nums
}