 function LongestCommonPrefix(strs){
    let prefix = "";
    
    for(let x = 0; x < strs[0].length; x++){
        let thisChar = strs[0].charAt(x);
        
        for(let y = 0; y < strs.length; y++){
            if(strs[y].charAt(x) != thisChar) return prefix;
        }       
        prefix += thisChar;
    } 
    return prefix;
}

const output = LongestCommonPrefix(['apple','appe','appu'])
console.log(output)