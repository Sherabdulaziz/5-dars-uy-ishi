//tub sonni aniqlash dasturi
let d = +prompt("1000gacha bulgan son kiriting");
let a = (d - (d % 100)) / 100;
let b = ((d % 100) - (d % 10)) / 10;
let c = d % 10;

if (c % 2 == 0) {
  console.log("tub son emas");
} else if ((a + b + c) % 3 == 0) {
  console.log("tub son emas");
} else if (c % 5 == 0) {
  console.log("tub son emas");
} else if (d % 7 == 0) {
  console.log("tub son emas");
} else {
  console.log("tub son ");
}
// //1 kilogirami 15 dollar bo'lgan shokaladni a kilogramgacha narxini chiqaradigan dastur;
// let a = +prompt("shokalad kilogiramini kiriting");
// for (let i = 1; i <= a; i++) {
//   let natija = 15 * i;
//   console.log(i + " kilogrami " + natija + " dollar");
// }
// //N5  k dan n gacha bo'lgan sonlarni chiqaradigan dastur;
// let k = +prompt("k sonini chiqaring");
// let n = +prompt("n sonini kiritng");
// if (n > k) {
//   for (let i = k; i <= n; i++) {
//     console.log(i);
//   }
// } else if (k > n) {
//   for (let i = n; i <= k; i++) {
//     console.log(i);
//   }
// } else {
//   console.log("sonlar o'zaro teng");
// }

// // N4  k sonini n marta chiqaradigan dastur;
// let k = +prompt("k sonini kiriting");
// let n = +prompt("n sonini kiriting");
// for (i = 1; i <= n; i++) {
//   console.log(k);
// }
// N1 funksiya yordamida kalkulyator yasash;
// let a = +prompt("birinchi sonni kiriting");
// let c = +prompt("ikkinchi sonni kiriting");
// let b = prompt("amalni kiriting");
// function calc(num) {
//   if (b == "+") {
//     natija = a + c;
//     console.log(natija);
//   } else if (b == "-") {
//     natija = a - c;
//     console.log(natija);
//   } else if (b == "*") {
//     natija = a * c;
//     console.log(natija);
//   } else if (b == "/") {
//     natija = a / c;
//     console.log(natija);
//   } else {
//     console.log("son va amal kiriting");
//   }
// }
// calc(a);
// // N1 switch yordamida kalkulyator yasash;
// let son1 = +prompt("birinchi sonni kiriting");
// let b = prompt("amalni bajaring");
// let son3 = +prompt("ikkinchi sonni kiriting");
// switch (b) {
//   case "+":
//     natija = son1 + son3;
//     break;
//   case "-":
//     natija = son1 - son3;
//     break;
//   case "+":
//     natija = son1 / son3;
//     break;
//   case "+":
//     natija = son1 * son3;
//     break;
// }
// let = natija;
// console.log(natija);
