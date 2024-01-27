// YOU have to use a HOF.

// 1. Write a function that takes a string parameter, and it console "YES" if the string,
// contains 'y' other wise it console "NO".
// Example - 'Crazyy'
const hasY=(word)=>{
    if (word.toLowerCase().split('').find(isY)){
        console.log('yes')
    }else{
        console.log('no')
    }
   }
   const isY=(letter)=> letter === "y"
   hasY('crazYY')
   

// 2. Write a function that finds a factorial of a number.
// Example - 5! = 120 (Use a normal loop for this one.)

// function getFactorial(num) {
// logic
// return the value;
// }
const factorial=(num)=>{
    if (num<1){
        return 1
    }else{
        return num * factorial(num-1)
    }
}
console.log(factorial(5))

//3. You have an array of students
// let studentList = [
//   { name: "Mike", marks: [80, 50, 60, 100] },
//   { name: "Daniel", marks: [40, 50, 100, 100] },
//   {
//     name: "Stacy",
//     marks: [20, 100, 50, 70],
//   },
// ];

// function getHighestAverageStudent() {
    // returns the student name with highest average marks
// }
let studentList = [
    { name: "Mike", marks: [80, 50, 60, 100] },
    { name: "Daniel", marks: [30, 50, 100, 100] },
    {name: "Stacy",marks: [20, 100, 50, 70],},
];
 const getHighestAverageStudent=(arr)=>{
     
     const studentMarks=arr.map(function(student){
         return student.marks.reduce((accumulator,currentValue)=>{
             return accumulator + currentValue
         },0)/student.marks.length
     })
     //console.log(studentMarks)
     const max=studentMarks.reduce((accumulator2,currentValue2)=>{
         if (accumulator2> currentValue2){
             return accumulator2
         }else{
             return currentValue2
         }
     },-Infinity)
     
     //console.log(max)
     //let indexMax= studentMarks.indexOf(max)
     //console.log(indexMax)
     return arr[studentMarks.indexOf(max)].name
 }
 console.log(getHighestAverageStudent(studentList))
//4. HARD Question - You have to write a function that has the highest number of occurrences
// [ 20, 4, -10, 4, 11, 20, 4, 2]; // 4
 
const numArr=[ 20, 4, -10, 4, 11, 20, 4, 2]

const highestOccurence=(arr)=>{
    let mostOccurences
    let numberOfTimes=0
    arr.forEach(countNum => {
        let count=0
        arr.forEach( checkNum=> {
            if(checkNum=== countNum){
                count++
            }
            if (count>numberOfTimes){
                mostOccurences=countNum
                numberOfTimes=count
            }
        });
        
    });
    return mostOccurences
}
console.log(highestOccurence(numArr))
//5. You have to write a function that has to find a number which is unique in the array (I.e Only occured once)
// [20, 20, 11, 4, 11, 20, 2, 4]
let numArr2=[20, 20, 11, 4, 11, 20, 2, 4]    
const firstUnqiueNum=(arr)=>{
        let unqiue
        arr.forEach(num => {
            
        if(arr.filter(num2=>{if (num===num2){return num2}}).length===1){//the return array should be 1 length
            unqiue=num
        }
    });
        if(unqiue){
        return unqiue
    }else{
        return 'no unqiue number'
    }

}
console.log(firstUnqiueNum(numArr2))

//6. You have an arryay of palindromes and not palindromes,  and you have to return only palindromes array

// ['abc', 'aba', 'ccc', 'dca', 'a']

// ['aba', 'ccc', 'a']
let possiblePalidrom=['abc', 'aba', 'ccc', 'dca', 'a']
const isPalidrome=(arr)=>{

    const plaidrome=arr.filter(word=>{
        return word.split('').reverse().join('')===word
    })
    return plaidrome
}
console.log(isPalidrome(possiblePalidrom))