const getTotalArea = (squareDimensions) => {
    return squareDimensions.map((side) => {
        return side * side
    }).reduce((prev, current) => {
        return prev + current
    }, 0)

}

const squareDimensions = [3, 5, 12, 3, 5, 3]

const result = getTotalArea(squareDimensions)
console.log("result: ", result)

//------------------CERINTA 2-----------------------------
const sumDivisibleNumbers = (numbers, divisor) => {
  return numbers
    .filter(num => num % divisor === 0)  
    .reduce((sum, num) => sum + num, 0); 
};
const numbers = [10, 55, 50, 7, 9, 65, 30];
const divisor = 5;

const rezultat = sumDivisibleNumbers(numbers, divisor);
console.log("Rezultatul este:", rezultat);
