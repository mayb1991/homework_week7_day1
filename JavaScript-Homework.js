//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]


function findWords(string, list){
    for(let i = 0; i < list.length; i++){
        let name = list[i]
      if (string.search(name)  > 5){
            console.log (`Matched dog_name: ${name}`)
      }
      else {
            console.log(`No Matches`)
      }
      
        }
      }

findWords(dog_string, dog_names)



//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i+= 2){
        arr.splice(i, 1, "even index")
    }
    console.log(arr)
}

replaceEvens(["Max","Baseball","Reboot","Goku","Trucks","Rodger"])


//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]




// ================================ JS Codewar Problems ==============================
// question 1

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
    const final = []
    let pos_sum = 0
    let neg_sum = 0
  
    if(input && input.length) {
      for(let i = 0; i < input.length; i++) {
        if(input[i] > 0) {
            pos_sum += 1
        } else {
            neg_sum += input[i]
        }
      }
      final.push(pos_sum)
      final.push(neg_sum)
    }
    return final
  }
  console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,]));

// question 2

// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
    let bmi = weight / (height**2)
    if(bmi <= 18.5){
      return "Underweight"
    }
    else if(bmi <= 25.0){
      return "Normal"
    }
    else if(bmi <= 30.0){
      return "Overweight"
    }
    else {
      return "Obese"
}}
console.log(bmi(54,5.7))