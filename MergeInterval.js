const merge = (intervals) => {
    if(intervals.length === 0){
        return intervals
    }
    intervals.sort((a, b) => a[0] - b[0])
    let ans = [intervals[0]]
    
    for(let [start, end] of intervals){
        if(start <= ans[ans.length - 1][1]){
            const [startPrev, endPrev] = ans.pop()
            ans.push([startPrev, Math.max(end, endPrev)])
        } else ans.push([start, end])
    }
    return ans
};