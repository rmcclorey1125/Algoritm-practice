function findBalancedSubStr(str){
    let k=2; // minimum window size ( because the shortest substring should atleast have its uppercase and lowercase)
    let strLength=str.length; // input string length
    
    // check if substring is balanced
    function isBalanced(substr){
        if(!substr) return false;
        let seen=new Set(substr);

        
        for(let [cur] of seen){
             let lower=cur.slice(0).toLowerCase();
             let upper=cur.slice(0).toUpperCase();
            if(!seen.has(lower) || !seen.has(upper)){ // if either upper or lowercase of the character is missing its not balanced
               return false;
            }
        }
            
        return true;
    }


    // equivalent to substr method
    function getSubstr(start,end){
        let substr='';
        for(let i=start; i<end; i++){
            substr+=str[i];
        }

        return substr;
    }
    

    let currentSubstring;
    while(k <= strLength){ // there can be substrings of length min 2 to max input string length , so look for all combinations
        for(let i=0; i<=str.length-k; i++){ // start from 0th index of input string till (input string length - current window size)
             currentSubstring=getSubstr(i,i+k); // get the current Substring
             if(isBalanced(currentSubstring)){ // check if its balanced
                console.log(currentSubstring)
                return  currentSubstring;
             }
        }
      k++;
    }

    return -1;
  
}

findBalancedSubStr('AcZCbaBz')