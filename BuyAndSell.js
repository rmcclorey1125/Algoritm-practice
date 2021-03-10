const maxProfit = (prices) => {
    let ans = 0
    let min = prices[0]
    for(let i = 1; i < prices.length; i++){
        min = Math.min(prices[i], min)
        ans = Math.max(ans, prices[i] - min)
    }
    return ans
};