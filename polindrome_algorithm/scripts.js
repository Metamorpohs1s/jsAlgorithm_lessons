/* polindrome = (str)=> {
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            return false;
        }
        j--;
    }
    return true;
}
 
let str1 = "racecar";
let str2 = "nitin";
let str3 = "Rama";
 
console.log(polindrome(str1));
console.log(polindrome(str2));
console.log(polindrome(str3)); */

function polindrome(str){
    let newPoli = str.split('').reverse().join('')
    if(str ===newPoli){
        console.log(str, "is a polindrome word");
    }
    else{
        console.log(str, "'s not polindrome");
    }
}

polindrome("ava");