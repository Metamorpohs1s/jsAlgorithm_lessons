function factorial(num, result = 1) {
    console.log('num', num);
    if (num === 0) return result;
    return factorial(num - 1, result * num);
}

console.log(factorial(3))
