const searchRange = (nums, target) => {
    let low = 0
    let high = nums.length
    
    while(low < high) {
        const mid = Math.floor((low+high)/2)
        if(nums[mid] >= target){
          high = mid  
        } else {
            low = mid + 1
        }
    }
    if(nums[low] !== target) return [-1, -1]
    
    const leftBound = low;
    
    low = 0, high = nums.length;
    
    while(low < high) {
        const mid = Math.floor((low+high)/2);
        if(nums[mid] > target) high = mid;
        else low = mid + 1;
    }
    return [leftBound, high-1]
};

// const searchRange = (nums, target) => {
//     return [nums.indexOf(target), nums.lastIndexOf(target)]
// };