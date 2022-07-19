var validPalindrome = function(s) {
    let a_ptr = 0 , b_ptr = s.length - 1;
    while(a_ptr <= b_ptr){
     if(s[a_ptr] !== s[b_ptr]){
        return isPalindrome(s, a_ptr+1, r) || isPalindrome(s, a_ptr, b_ptr-1)
     }
    a_ptr++;
    b_ptr--;
    }
    return true;
};

var isPalindrome = function(s, a_ptr, b_ptr){
    while(a_ptr <= b_ptr){
     if(s[a_ptr] !== s[b_ptr]){
         return false;
     }
    a_ptr++;
    b_ptr--;
    }
    return true;
}

console.log(isPalindrome("aba"))