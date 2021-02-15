
const strStr = (haystack, needle) => {
    if(needle.length === 0){
        return 0
    }
    for(let i = 0; i < haystack.length; i++){
        if(haystack.substr(i, needle.length) === needle){
            return i
        }
    }
    return -1
};

strStr("hello", "ll")

