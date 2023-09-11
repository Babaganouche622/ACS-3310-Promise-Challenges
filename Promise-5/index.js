function whatToEat(timeOfDay) {
  // Create a new promise and return it here
  return new Promise((resolve, reject) => {
    if (timeOfDay === 'breakfast') {
      resolve('Granola')
    } else if (timeOfDay === 'lunch') {
      resolve('Burgers')
    } else if (timeOfDay === 'dinner') {
      resolve('.Lasagna')
    } else {
      reject("I don't eat between meal snacks!")
    }
  });
}

// whatToEat should return a promise. 
// If the `timeOfDay` is 'breakfast', 'lunch', or 'dinner' 
// resolve the promise with your favorite food for that time. 
// If the `timeOfDay` is anything else reject the promise with 
// the the message: "I don't eat between meal snacks!"

// Handle the Promise returned from whatToEat here: 

whatToEat('lunch')
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });

// Handle this Promise: 
whatToEat('elevens')
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });
