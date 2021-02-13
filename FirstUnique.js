const firstUniqChar = (s) => {
    const mp = {}
    for(let i = 0; i < s.length; i++){
        mp[s[i]] = mp[s[i]] + 1 || 1
    }
    for(let prop in mp){
        if(mp[prop] === 1){
            for(let i = 0; i < s.length; i++){
                if(s[i] === prop){
                    return i
                }
            }
        }
    }
    return -1
};