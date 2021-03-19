const subsets = (nums) => {
    const ans = []
    getSubsets([], 0)
    
    function getSubsets(path, index){
        ans.push(path)
        for(let i = index; i < nums.length; i++) {
            getSubsets([...path, nums[i]], i+ 1)
        }
    }
    return ans
};
