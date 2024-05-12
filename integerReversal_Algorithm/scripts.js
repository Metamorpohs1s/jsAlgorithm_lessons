function reverseInt(n){
    let reversed = n.toString().split('').reverse().join('');
    console.log(parseInt(reversed)*Math.sign(n));
    
}
reverseInt(-50);