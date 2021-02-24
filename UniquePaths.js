let uniquePaths = (M, N) => {
    let cur = Array(N).fill(1);
    for (let i = 1; i < M; ++i) {
        let pre = [...cur];
        for (let j = 1; j < N; ++j)
            cur[j] = pre[j] + cur[j - 1];
    }
    return cur[N - 1];
};