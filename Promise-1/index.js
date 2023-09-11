// Make a new Promise
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('>>> Success! <<<');
    reject("--- Oops ---");
  }, 2000);
});

p.then((message) => {
  console.log('Promise resolved! 😀');
  console.log(message);
}).catch((err) => {
  console.log('Promise rejected! 😞');
  console.log(err);
});

p.catch((err) => {
  console.log('Promise rejected! 😞');
  console.log(err);
});

// **Problems to solve**

// **1)** What happens when a promise is rejected? Test it by calling `reject()`
// If a promise catches the reject() it will return the message in the .catch() error block and skips the .then() block

// **2)** What happens when you call both `resolve` and `reject`? Test this.
// Well if you call both inside the promise, it will return the first one it sees.
// I did find that if you called only p.catch() it will skip entirely if the resolve() is called first.

// **3)** Does the order matter you call resolve and reject matter? Test this. 
// Yes, absolutely. Unless you have proper conditional statemtents operating around the resolve() and reject() calls.

// **4)** What happens if you call `resolve` or `reject` more than once? Test this out for yourself.
// It will return the first one it sees. If you call resolve() first, it will return the .then() block. If you call reject() first, it will return the .catch() block. It doesn't matter how many you chain.
