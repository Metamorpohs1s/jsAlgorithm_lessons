// ! i -- N ( range ) have %3 = 0 fizz, %5 = 0 Buzz, 
 for (let i = 0; i < 100;) console.log((++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') + (i % 15 ? '' : '') || i); 

// ! i -- N i range else if solution

/* for ( let i = 1; i<101; i++){
    if (i%15==0)console.log("FizBuzz");
    else if(i%3==0)console.log("Fizz");
    else if(i%5==0)console.log("Buzz");
    else console.log(i);
}; */