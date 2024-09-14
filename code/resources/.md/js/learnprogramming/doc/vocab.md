# vocab

- ## iteration
  **definition - The act or an instance of iterating, repetition. A form, adaption or version of something. in javascript you transform dataset to your desired function.**

- ## Example: 

```js
   const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number, index) => {
  console.log(`${index}: ${number}`);
});
// output:
 0: 1
 1: 2
 2: 3
 3: 4
 4: 5
```
- ## callback function
   **A callback function is a self-contained block of code that is passed as an argument to another function and is executed at a later time, typically after the outer function has completed ita task. There are two primary types of callback functions: synchronous and asynchronous. Synchronous callbacks are executed immediately after the outer function has finished, whereas asynchronous callbacks are executed at a later time, after an asynchronous operation has completed. In JavaScript, callbacks are often used with events, such as mouse clicks or key presses, where the application supplies a reference to a custom callback function for the windowing system to call. They can also be used with asynchronous functions, such as setTimeout() or API calls, which return a promise or a callback method.**

## Example:

```javascript
   function outerFunc(callback) {
  // some code execution
  callback(2);
}

function callback(value) {
  console.log(value);
}

outerFunc(callback);
// Output: 2
```

## Temple strings

**These strings should be your most common used instance of a string it just makes life easier. From interpolation to multiline strings and syntax the temple strings does it all easier.**

```js
  let message = `Welcome to
LPO's  Website !`
```


# Data types: 
- ### Number (30)
- ### String ("hello",'hello',`hello`) note: let message = "i like /"tacos/" man."
- ### Boolean (true, false)
- ### Null **absence of any object value on purpose** 
- ### Undefined **unintended absence of object or value** (let x = undefined)
- ### Symbol **used to replace the key in a key/value pair**
- ### BigInt **built-in object that allows you to represent whole numbers larger than 2^52-1**
- ### Object **any key/value pair  including arrays and functions** (let key = value, key(value))