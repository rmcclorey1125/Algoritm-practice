


const combinationSum = (candidates, target) => {
    const temp = [];
    const result = [];
    
    const search = (idx, target) => {
        if(target === 0){
            return result.push(temp.slice())
        }
        if(target < 0){
            return
        }
        if(idx === candidates.length){
            return
        }
        temp.push(candidates[idx]);
        search(idx, target - candidates[idx]);
        temp.pop();
        search(idx + 1, target);
    }   
    search(0, target);
    return result;
};






combinationSum([2,3,6,7],7)