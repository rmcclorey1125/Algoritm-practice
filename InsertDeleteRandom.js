
var RandomizedSet = function() {
    this.map = {}
    this.values = []
};

RandomizedSet.prototype.insert = function(val) {
    if(this.map[val] !== undefined) return false
    this.map[val] = this.values.length
    this.values.push(val)
    return true
};

RandomizedSet.prototype.remove = function(val) {
    if (this.map[val] === undefined) return false
    const idx = this.map[val]
    delete this.map[val]
    const last = this.values.pop()
    if(this.values.length === idx) return true
    this.map[last] = idx
    this.values[idx] = last
    return true
};

RandomizedSet.prototype.getRandom = function() {
    if (this.values.length === 0) return null;
    return this.values[Math.floor(Math.random() * this.values.length)];
};

const newSet = new RandomizedSet

console.log(newSet.insert(1))
newSet.insert(2)
newSet.insert(3)
newSet.insert(4)
console.log(newSet.insert(1))

newSet.remove(2)

console.log(newSet.getRandom())

// console.log(newSet)



