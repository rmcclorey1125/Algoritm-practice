const fourSumCount = (A, B, C, D) => {
    let mp = {}
    for(let i = 0; i < A.length; i++){
        for(let j = 0; j < B.length; j++){
            let sum = A[i]+B[j]
            mp[sum] = mp[sum] + 1 || 1
        }
    }
    let counter = 0
    for(let i = 0; i < C.length; i++){
        for(let j = 0; j < D.length; j++){
            counter += mp[-1 * (C[i]+D[j])] || 0
        }
    }
    return counter
};
