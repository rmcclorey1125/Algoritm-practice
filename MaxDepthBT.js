const maxDepth = (root) => {
    if(root === undefined || root === null){
        return 0
    }
    return Math.max(maxDepth(root.right), maxDepth(root.left)) + 1
};