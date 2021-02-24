const twoSum = (nums, target) => {
    let map = new Map()
    for(let i = 0; i < nums.length; i++){
        const diff = target - nums[i]
        
        if(map.has(diff)){
            return[map.get(diff), i]
        }
        map.set(nums[i], i)
    }
}


const twoSum = (nums, target) => {
    let map = {}
    
    for(let i = 0; i < nums.length; i++){
        const diff = target - nums[i]
        
        if(diff in map){
            return[map[diff], i]
        }
        map[nums[i]] = i
    }
};


const twoSum = (nums, target) => {
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[j] === target - nums[i]){
                return [i,j]
            }
        }
    }
};