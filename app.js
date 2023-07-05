console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i <= 100; i += 2) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

for (let i = 0; i < 100; i++) {
  if (i % 2 == 0) {
   
  } else {
    console.log(i);
  }
}
let i = 1;

while (i < 100) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
}

// Exercise 2 Section
console.log("EXERCISE 2:\nFizzBuzz\n");

for (let i = 1; i < 100; i++) {
  console.log(i);
  if (i % 3 == 0 && i % 5 == 0) {
    console.log((i), "FizzBuzz");
  } else {
    if (i % 3 == 0) {
      console.log((i), "Fizz");
    }
    if (i % 5 == 0) {
      console.log((i), "Buzz");
    }
  }
}

for (let i = 1; i <= 100; i++) {
  if (i % 15 == 0) {
    console.log(i, "Fizzbuzz");
  } else if (i % 5 == 0) {
    console.log(i, "Buzz");
  } else if (i % 3 == 0) {
    console.log(i, "Fizz");
  }
}
//Exercise 3 while and Do /while
i = 1;

while (i <= 100) {
  let output = "";

  if (i % 3 == 0) {
    output += "Fizz";
  }
  if (i % 5 == 0) {
    output += "Buzz";
    console.log(`${i} ${output}`);
  }
  i++;
}

let x = 1;

do {
  let output = "";

  if (x % 3 == 0) {
    output += "Fizz";
  }
  if (x % 5 == 0) {
    output += "Buzz";
    console.log(`${x} ${output}`);
  }
  x++;
} while (x <= 100);
 
// exersize 4 Find Value//

let numberToFind = Math.round(Math.random() * 500);

let n = Math.round(Math.random() * (500 - 100) + 100); 

 for (let i = 1; i <= n; i++) {
  if(i == numberToFind){
  console.log('found ${numberToFind}!');
  break;
  }

 if (i == n) {
  console.log('Did not find number ${numberToFind} within 1-$(n)..');
 break;
}
}