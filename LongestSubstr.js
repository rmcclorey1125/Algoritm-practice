const longestSubstring = (s, k) => {
    const mp = {}
    
    for(let letter of s){
        mp[letter] = mp[letter] + 1 || 1
    }
    
    let result = 0
    for(let prop in mp){
        if(mp[prop] < k){
            let spl = s.split(prop)
            for(let word of spl){
                result = Math.max(result, longestSubstring(word, k))
            }
            return result
        }
    }
    return s.length
};


