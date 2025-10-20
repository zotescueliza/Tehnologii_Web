const sampleArray = [1, 2, 3, 4, 5]

const map = (array, transformation) => {

    const result = []
    for (const element of array) {
        result.push(transformation(element))
    }
    return result
}
console.log(map(sampleArray, (x) => x * 2))

//--------------CERINTA 4 -----------------

const reduce = (array, reducer, initialValue) =>
 {
  let accumulator = initialValue;   
  for (const element of array) 
    {    
    accumulator = reducer(accumulator, element); 
    }
  return accumulator;                
};

const numbers = [1, 2, 3, 4, 5];
const sum = reduce(numbers, (acc, x) => acc + x, 0);
console.log(sum); 
