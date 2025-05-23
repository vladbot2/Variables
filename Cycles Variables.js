
// Variables

let user = prompt("Your name?");
alert("Hello, " + user + "!");

const now = 2025;
let year = prompt("Birth year?");
alert("Your age " + (now - year));

let len = prompt("Square side");
alert("P = " + (len * 4));

let r = prompt("Circle radius");
alert("S = " + (3.14 * r * r));

let km = prompt("Distance km");
let hr = prompt("Time hours");
alert("Need speed " + (km / hr));

const eur = 0.93;
let usd = prompt("USD");
alert("EUR = " + (usd * eur));

let gb = prompt("Flash size gb");
let fit = Math.floor(gb * 1024 / 820);
alert("Files fit " + fit);

let cash = prompt("Money");
let choc = prompt("1 chocolate price");
let pcs = Math.floor(cash / choc);
let left = cash - pcs * choc;
alert("You buy " + pcs);
alert("Change " + left);

let n = prompt("3 digit");
let p = n[2] + n[1] + n[0];
alert("Reversed " + p);

let val = prompt("Enter number");
let check = val % 2;
alert("Even = " + (check == 0));
alert("Odd = " + (check != 0));


// Cycles

let start = +prompt("Enter start number");
let end = +prompt("Enter end number");
let sum = 0;
for (let i = start; i <= end; i++) {
  sum += i;
}
console.log("Sum = " + sum);


let a = +prompt("Enter first number");
let b = +prompt("Enter second number");
let d = 1;
for (let i = 1; i <= a; i++) {
  if (a % i == 0) {
    if (b % i == 0) {
      d = i;
    }
  }
}
console.log("GCD = " + d);


let num = +prompt("Enter number");
for (let i = 1; i <= num; i++) {
  if (num % i == 0) {
    console.log(i);
  }
}


let digits = prompt("Enter a number");
console.log("Digits: " + digits.length);


let count = 0;
let plus = 0;
let minus = 0;
let zero = 0;
let even = 0;
let odd = 0;
while (count < 10) {
  let n = +prompt("Enter number");
  if (n > 0) plus++;
  if (n < 0) minus++;
  if (n == 0) zero++;
  if (n % 2 == 0) even++;
  if (n % 2 != 0) odd++;
  count++;
}
console.log("+ : " + plus);
console.log("- : " + minus);
console.log("0 : " + zero);
console.log("Even: " + even);
console.log("Odd: " + odd);


let again = true;
do {
  let x = +prompt("Enter first number");
  let y = +prompt("Enter second number");
  let sign = prompt("Enter operator");
  if (sign == "+") console.log(x + y);
  if (sign == "-") console.log(x - y);
  if (sign == "*") console.log(x * y);
  if (sign == "/") console.log(x / y);
  again = confirm("One more?");
} while (again);


let str = prompt("Enter number");
let shift = +prompt("Enter shift");
let res = str.slice(shift) + str.slice(0, shift);
console.log(res);


let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sun", "Sat"];
let i = 0;
do {
  alert(days[i]);
  i++;
  if (i == 7) i = 0;
} while (confirm("Next day?"));


for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(i + " * " + j + " = " + (i * j));
  }
  console.log("---");
}


let min = 0;
let max = 100;
let mid;
let ans;
do {
  mid = Math.floor((min + max) / 2);
  ans = prompt("Is your number >, < or = " + mid);
  if (ans == ">") min = mid + 1;
  if (ans == "<") max = mid - 1;
} while (ans != "=");
alert("Your number is " + mid);