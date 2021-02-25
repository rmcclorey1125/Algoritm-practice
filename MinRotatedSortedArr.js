// Binary Search

const findMin = (nums) => {
    let left = 0
    let right = nums.length - 1
    
    while(right > left){
        let mid = Math.floor((right + left) / 2)
        if(nums[mid] > nums[right]){
            left = mid + 1
        } else {
            right = mid
        }
    }
    return nums[left]
};

// Search Everything

const findMin = (nums) => {
    let min = Infinity
    for(let i = 0; i < nums.length; i++){
      min = Math.min(min, nums[i])
    }
    return min
};