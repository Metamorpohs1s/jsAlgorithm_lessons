let  [list,chunkSize] = [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 6];
list = [...Array(Math.ceil(list.length / chunkSize))].map(_ => list.splice(0,chunkSize))
console.log(list);


/* function* chunks(arr, n) {
    for (let i = 0; i < arr.length; i += n) {
      yield arr.slice(i, i + n);
    }
  }
  
  let someArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10]
  console.log([...chunks(someArray, 2)]) */