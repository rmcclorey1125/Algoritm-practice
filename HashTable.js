class HashTable{
    constructor(size=53){
        this.keyMap = new Array(size)
    }

    _hash(key) {
        let total = 0
        let WEIRD_PRIME = 31
        for(let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length
        }
        return total
    }

    set(key, val){
        let index = this._hash(key)
        if(!this.keyMap[index]){
            this.keyMap[index] = []
        }
        this.keyMap[index].push([key,val])
    }

    get(key){
        let index = this._hash(key)
        if(this.keyMap[index]){
            for(let i = 0; i < this.keyMap[index].length; i++){
                if(this.keyMap[index][i][0] === key){
                    return this.keyMap[index][i][1]
                }
            }
        }
        return undefined
    }

    keys(){
        let allKeys = []
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    if(!allKeys.include(this.keyMap[i][j][0])){
                        allKeys.push(this.keyMap[i][j][0])
                    }
                }
            }
        }
        return allKeys
    }

    values(){
        let allValues = []
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    if(!allValues.includes(this.keyMap[i][j][1])){
                        allValues.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        return allValues
    }
}