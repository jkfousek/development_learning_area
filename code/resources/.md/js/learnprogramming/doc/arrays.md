

# Arrays

## Why do we need Arrays?
**let's say you're the teacher in a class that contains 2 students. You have your students sit for a test and get the results afterward. You will need to store the grades for your 2 students, thus you create 2 variables: grade1 and grade2. Each one of these 2 variables represents the grade of a student. For example:**

```javascript
   let john = "john's grade is " + 18 + "/20"
      // result = john's grade is 18/20
   let billy = "grade" + 11 + "/20"
      //  result = billy's grade is 11/20
// next you need an average
   let sum = john + billy
   let average = sum / 2
   return average 
// now you cant put that together into a function, however this is slow and makes larger data sets nearly impossible to work with.    
```
**Introducing Arrays, an array allows you to make a set of data.**

```javascript
   // example:
   let grades = [10, 5, 1, 12, 12]
```

----------
# Array Indexing/ Methods

**in short an index uses scientific notation to order items in a data set. This notation starts at 0.**

```javascript
   let items = [5,23,1,3,65]
   items[0] 
   // returns the item at index 0 in this list it would be 5.
   items[1] // returns 23
```
## Function example: 
```javascript
   function getFirstItem(items) {
      return items[0]
   }
   // call function
  function getFirstItem([10,2,1]) // returns 10
``` 
## *interpolation note =*  ` " $[let, or param] " ` :   


----------

# .push() function

**The push() method in JavaScript is used to add one or more elements to the end of an array. It returns the new length of the array. This method is part of the Array prototype, making it available for all arrays.**

```js
   let romanNumerals = ['XXI', 'XXII'];
   let twentyThree = 'XXIII';
   romanNumerals.push(twentyThree); // now equals ['XXI', 'XXII', 'XXIII']
```

# The .forEach() function and a brief explanation of array iteration

**The .forEach() function will now be referred to as ".fE()"** 

**This function is used to iterate a list, set, array, ect. An iteration in simple terms means repeating a set of statements. the .forEach() function is used to log or return each value of your array one by one.


## Example one:
```javascript
   let grades = [1,2,3,1,2,345,62]
   grades.forEach(function(grade){
      console.log(grade) // or
      return grade 
      // this will display each value of you array line by line 
   })
```

## Example two:
```javascript 
   let sum = 0 // this will be important soon
   let grades = [0,12,3,1,4,12,11]
   grades.foreach(function(grade){
      sum = sum + grade
      console.log(sum)
      // this will return a iterated list add the numbers with each iteration.
   })
```

## Example three: 
```javascript
   // say you want to get the values only above 10
   let prices = [10,1,2,7,9,11,2,12]
   prices.forEach(function(price){
      // now you use an if statement.
      if (price > 10) {
         console.log(price)
         return price
      }
   })
```

# The .map() function 

**The .map() function is use to iterate each element from an array while adjusting its value using an equation**

## .map() example
```javascript
   let grades = [0,1,11,21,11,1,14,4,6]
   let sum = grades.map(function(grade){
      return grade * 2
   })
   console.log(sum) // will equal each grade * 2
```

```js
   let users = ["SAM", "CHARLIE", "ALEX"]

let lowercased = users.map(function(user) {
    return user.toLowerCase()
})
console.log(lowercased) // ["sam", "charlie", "alex"]
```
# The .reduce() function

**This function is used to return a single value from an array. Done by using two parameters, *total* referring to the *reducer* return by the function while the current param is used as a *initial value* for said function. theres two key differences with this function compared to the others. the first being that we have two params and the second, being the sum variable is actually used for the function itself however its important to remember that you have to set the *initial value* of sum still for this example we used 0.**

## .reduce() example

```js
   let sum = grades.reduce(function(total, current) { 
    console.log(total + current)
    return total + current  //this is where you define what type of equation being done
}, 0);  //this is where you define the sum
console.log(sum)
```

# Recap

- ## The reduce() method is used to calculate a single value from an array.
- ## In other terms, the reduce() method reduces an array into a single value.
- ## The most common use cases of reduce (when working with arrays of numbers) are sum & multiplication.
- ## The reduce() method takes a reducer which allows you to configure the logic of how the array will be reduced into a single number.
- ## The reduce() method takes 2 parameters: reducer and initialValue. .reduce(reducer, initialValue).
- ## The initialValue is always 0 for sum.
- ## The reducer is a callback function that receives 2 parameters: total and current.
- ## The total (also called accumulator) keeps track of the result of the reduce method. For example, when calculating the sum, it keeps track of the sum, step by step.
- ## The current represents one item of the array.
- ## The reducer is called for every item in the array.
- ## For multiplication, we use an initialValue of 1.
- ## Reduce common mistakes:
- ## 1. Syntax errors
- ## 2. Forgetting to return
- ## 3. Wrong initialValue