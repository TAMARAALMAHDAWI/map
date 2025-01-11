

//1//

function cleanNames(names) {
    return names.map(name => name.trim());
  }
  
   
  const result = cleanNames([" injustice", " SuperMan", "Batman ", " flash "]);
  console.log(result); 
  

  //2//
  function convertMilesToKm(miles) {
     
    const kmArray = miles.map(mile => mile * 1.60934);
  
    
    const totalDistanceInKilometers = kmArray.reduce((total, km) => total + km, 0);
  
     
    return totalDistanceInKilometers;
  }
  
   
  const miles = [10, 20, 30, 40];
  const toKm = convertMilesToKm(miles);
  
  console.log(toKm); 

  //3//
{
  function averageOfSquaredElements(arr) {
    
    const squaredArray = arr.map(num => num ** 2);
  
    
    const sumOfSquares = squaredArray.reduce((acc, num) => acc + num, 0);
  
     
    const average = sumOfSquares / arr.length;
  
     
    return average;
  }
  
   
  const array = [1, 2, 3, 4, 5];
  const result = averageOfSquaredElements(array);
  
  console.log(result); 
  
}

//4//
{
function plusFour(numbers) {
    
    return numbers.map(num => num + 4);
  }

  const numbers = [1, 2, 3, 4, 5];
  const plus4 = plusFour(numbers);
  
  console.log(plus4); 
}

  //5//
  {
  function evenDoubleEven(numbers) {
    
    const evenNumbers = numbers.filter(num => num % 2 === 0);
  
    const doubleEvenNumbers = evenNumbers.map(num => num * 2);
  
    
    const sum = doubleEvenNumbers.reduce((acc, num) => acc + num, 0);
  
    return sum;
  }
  
 
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const evenDoubleEven = evenDoubleEven(numbers);
  
  console.log(evenDoubleEven);  
} 

//6//
{
function upperCaseWords(words) {
    
    return words.map(word => word.toUpperCase());
  }
  
  
  const words = ['apple', 'banana', 'cherry', 'date'];
  const upperCaseWordsResult = upperCaseWords(words);
  
  console.log(upperCaseWordsResult);
}

  //7//
  {
  function modifyHeroes(heros) {
    return heros.map((hero, index) => {
      
      return {
        hero: hero.name,         
        power: hero.power,       
        id: index             
      };
    });
  }
  
  
  const heros = [
    {name: 'Iron Man', power: 'Tech'},
    {name: 'Spider-Man', power: 'Spider abilities'},
    {name: 'Thor', power: 'Godly powers'},
    {name: 'Hulk', power: 'Super strength'}
  ];
  
  const newHeros = modifyHeroes(heros);
  
  console.log(newHeros);

  }
  //8//

  function filterLongWords(inputWords) {

    return inputWords.filter(word => word.length > 7);
  }
  
  
  const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
  const output = filterLongWords(inputWords);
  
  console.log(output); 

  //9//

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log("Odd Numbers:", oddNumbers); 


const divisibleBy2or5 = numbers.filter(num => num % 2 === 0 || num % 5 === 0);
console.log("Divisible by 2 or 5:", divisibleBy2or5); 


const divisibleBy3Squared = numbers.filter(num => num % 3 === 0).map(num => num ** 2);
console.log("Divisible by 3 and squared:", divisibleBy3Squared); 


const sumOfSquaresDivisibleBy5 = numbers.filter(num => num % 5 === 0).map(num => num ** 2).reduce((acc, num) => acc + num, 0);
console.log("Sum of squares of numbers divisible by 5:", sumOfSquaresDivisibleBy5); 

//10//



let nums = [11, 22, 33, 46, 75, 86, 97, 98];


let squaredEvenNums = nums.filter(num => num % 2 === 0)  
                           .map(num => num * num);      
  
let sum = nums.reduce((acc, num) => acc + num, 0);

console.log(`squaredEvenNums: ${squaredEvenNums}`); 
console.log(`Sum of array elements: ${sum}`); 



//11//
let countries = ['India', 'United States', 'Russia', 'Japan', 'China'];
 
let filteredCountries = countries.filter(country => !country.startsWith('U') && !country.startsWith('R'));


let upperCaseCountries = filteredCountries.map(country => country.toUpperCase());


let totalCharacters = upperCaseCountries.reduce((acc, country) => acc + country.length, 0);

console.log(filteredCountries); 
console.log(upperCaseCountries); 
console.log(totalCharacters); 


//12//
{
const numbers = [12, 45, 67, 89, 23, 56, 73, 99, 100];


const numbersGreaterThan50 = numbers.filter(num => num > 50);

console.log(numbersGreaterThan50); 

}


  