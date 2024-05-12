


fib = (numMax) => {
    for (var fibArray = [0, 1], i = 0, j = 1, k = 0; k < numMax; i = j, j = x, k++) {
        x = i + j;
        fibArray.push(x);
    }
    console.log(fibArray);
}

fib(10);






// ! Fibonacci element by index number
/* function fibonacci(n) {
    return n < 1 ? 0
         : n <= 2 ? 1
         : fibonacci(n - 1) + fibonacci(n - 2)
 }
 
 console.log(fibonacci(4)) */