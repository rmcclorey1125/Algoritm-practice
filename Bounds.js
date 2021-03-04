function bounds(a, l, r) {
    const ans = []
    for(let i = 0; i < a.length; i++){
        let num = a[i]/(i+1)
        if(num >= l && num <= r && num % 1 === 0){
            ans.push(true)
        }else{
            ans.push(false)
        }
    }
    return ans
}