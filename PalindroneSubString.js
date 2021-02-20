const countSubstrings = (s) => {
    let count = 0
    
    for(let i = 0; i < s.length; i++){
        helper(s, i, i)
        helper(s, i, i+1)
    }
    console.log(count)
    return count
    
    function helper(s, low, high){
        while(low >= 0 && high <= s.length && s[low] === s[high]){
            count++
            low--
            high++
        }
    }
};

countSubstrings('aaa')