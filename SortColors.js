const sortColors = (nums) => {
    let start = 0
    let end = nums.length - 1
    
    for(let i = 0; i <= end; i++){
        if(nums[i] === 0) {
            [nums[i], nums[start]] = [nums[start], nums[i]]
            start++
        } else if (nums[i] === 2){
            [nums[i], nums[end]] = [nums[end], nums[i]]
            end--
            i--   
        }
    }
    return nums
};