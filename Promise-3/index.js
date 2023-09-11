function greet(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof name === 'string') { 
        resolve('hello ' + name);
      } else {
        reject('Greet expects a string!');
      }
    }, 1000);
  });
}

function uppercaser(str) {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      if (typeof str === 'string') {
        resolve(str.toUpperCase());
      } else {
        reject('Argument to uppercaser must be string');
      }
    }, 1000);
  });
}


// Above we have two functions that return promises. 
// These are greet and uppercaser. 
// Notice below how we chain these promises together. The 
// Result of one is then passed to the next. 
// When chained all of the promises have to resolve for success. 
// If any of the promises reject then you end in the catch block. 

greet('Your name') // Returns a Promise
  .then(str => uppercaser(str))  // Upper case the results from greet() Returns a Promise
  .then(str => console.log(str)) // Log the results of uppercaser()
  .catch(err => console.log(err)) // Catches an error

// Challenges: get greet() to fail by passing a non string value
// What happens? 
// This will reject immediately and actually print first because they resolve asyncronously. 
greet(100)
  .then(str => uppercaser(str))
  .then(str => console.log(str))
  .catch(err => console.log(err))

// Challenge: get uppercaser() to fail by passing a non string value
// What happens? 
// Interesting, this time instead of failing and being the second to print as I thought, it actually takes longer than the first one to print.
greet('Your name')
  .then(str => uppercaser(100))
  .then(str => console.log(str))
  .catch(err => console.log(err))

// Challenge: Notice there is only a single .catch() at the end. 
// Explain the behavior?
// If either step of our daisy chain of function and .then() fails, it will go to the catch block. 
