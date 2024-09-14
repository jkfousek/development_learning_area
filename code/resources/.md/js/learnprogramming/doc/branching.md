

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
## Array Indexing 

**in short an index uses scientific notation to order items in a data set. This notation starts at 0.**

```javascript
   let items = [5,23,1,3,65]
   items[0] 
   // returns the item at index 0 in this list it would be 5.
   items[1] // returns 23
```
### Function example: 
```javascript
   function getFirstItem(items) {
      return items[0]
   }
   // call function
   getFirstItem([10,2,1]) // returns 10
```


- ## .includes()
- ## .join()
- ## .length()
- ## .map()
- ## .push()
- ## .reduce()
- ## 