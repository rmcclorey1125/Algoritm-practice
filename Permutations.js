const permute = (nums) => {
    const ans = []
    
    const rec = (current, rest) =>{
        if (rest.length === 0){
            ans.push(current)
            return
        }  
        for(let i = 0; i < rest.length; i++){
            rec([...current, rest[i]], [...rest.slice(0, i), ...rest.slice(i + 1)])
        }
    }
    
    rec([], nums)
    return ans
};