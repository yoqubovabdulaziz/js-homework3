// if 1

// let a = 5;

// if (a > 0) {
//     a++
// }

// console.log(a);

// if 2

// let num = 0;

// if (num > 0) {
//   console.log(++num);
// } else if (num < 0) {
//   console.log(num - 2);
// } else if (num == 0) {
//   console.log(num + 10);
// }

// if 3

// let A = 3;
// let B = 2;
// let C = 6;

// let positiveCount = 0;

// if (A > 0) {
//     positiveCount++;
// }

// if (B > 0) {
//     positiveCount++
// }

// if (C > 0) {
//     positiveCount++
// }

// console.log(positiveCount);

// if 4

// let a = 10;
// let b = 20;

// if (a > b) {
//   console.log(a);
// } else {
//   console.log(b);
// }

// if 5

// let A = 9;
// let B = 7;

// if (A < B) {
//     console.log(1);
// } else if (A > B) {
//     console.log(2);
// }

// if 6

// let a = 10;
// let b = 15;

// if (a > b) {
//   console.log(a);
// } else {
//   console.log(b);
// } //Kottasi

// if (a < b) {
//   console.log(a);
// } else {
//   console.log(b);
// } //Kichkinasi

// if 7

// let a = 15;
// let b = 25;

// let k = a;

// if ((a = b)) {
//   console.log(a);
// }

// if ((b = k)) {
//   console.log(b);
// }

// if 8

// let a = 10;
// let b = 13;

// if (a != b) {
//   console.log(a + b);
// } else {
//   console.log(0);
// }

// if 9

// let a = 10;
// let b = 14;

// if (a != b && a > b) {
//   console.log(a);
// } else if (a != b && a < b) {
//   console.log(b);
// } else if (a == b) {
//   console.log(0);
// }

// if 10

// let a = 8;
// let b = 9;
// let c = 10;

// if (a > b && a > c) {
//   console.log(a);
// } else if (b > a && b > c) {
//   console.log(b);
// } else if (c > a && c > b) {
//   console.log(c);
// }

// if 11

// let a = 7;
// let b = 10;
// let c = 9;

// if (a > b && a < c) {
//   console.log(a);
// } else if (b > a && b < c) {
//   console.log(b);
// } else if (c > a && c < b) {
//   console.log(c);
// }

// if 12

// let a = 5;
// let b = 7;
// let c = 10;

// let ab = a + b;
// let ac = a + c;
// let bc = b + c;

// if (ab > ac && ab > bc) {
//   console.log(ab);
// } else if (ac > ab && ac > bc) {
//   console.log(ac);
// } else if (bc > ab && bc > ac) {
//   console.log(bc);
// }

// if 13

// let A = 5;
// let B = 10;
// let C = 5;

// if (A < B && B < C) {
//   A *= 2;
//   B *= 2;
//   C *= 2;
// } else {
//   A = -A;
//   B = -B;
//   C = -C;
// }

// console.log("A:", A);
// console.log("B:", B);
// console.log("C:", C);

// if 14

// let A = 15;
// let B = 10;
// let C = 5;

// if (A < B && B < C || A > B && B > C) {
//   A *= 2;
//   B *= 2;
//   C *= 2;
// } else {
//   A = -A;
//   B = -B;
//   C = -C;
// }

// console.log("A:", A);
// console.log("B:", B);
// console.log("C:", C);

// if 15

// let A = 3;
// let B = 1;
// let C = 3;
// let D = 3;

// if (A == B && A == C) {
//     console.log(4);
// }

// if (A == B &&  A== D) {
//     console.log(3);
// }

// if (B == C && B == D) {
//     console.log(1);
// }

// if (A == C && A  == D) {
//   console.log(2);
// }

// if 16

// let x = 6;

// if (x <= 0) {
//   console.log(-x);
// } else if (0 < x < 2) {
//   console.log(x ** 2);
// } else if (x >= 2) {
//   console.log(4);
// }

// if 17

// let x = 1;

// if (x % 100 === 0 && x % 400 !== 0) {
//   console.log("Yilda 365 kun bor");
// } else if (x % 4 === 0) {
//   console.log("Yilda 366 kun bor");
// } else if (x <= 0) {
//   console.log("Bunday yil yo'q");
// } else {
//   console.log("Yilda 365 kun bor");
// };

// if 18

// let son = 101;

// let a = son % 2 == 0 && son >= 10 && son < 100;
// let b = son % 2 !== 0 && son >= 100 && son < 1000;

// if (a) {
//     console.log('${son} Ikki xonali juft son');
// } else if (b) {
//     console.log('${son} Uch xonali toq son');
// } else {
//     console.log('boshqa kategoriya');
// }

// Case 1

// let baho = 5;

// switch (baho) {
//   case 1:
//     console.log("yomon");
//     break;
//   case 2:
//     console.log("qoniqarsiz");
//     break;
//   case 3:
//     console.log("qoniqarli");
//     break;
//   case 4:
//     console.log("yaxshi");
//     break;
//   case 5:
//     console.log("a'lo");
//     break;
//     default:
//     console.log("xato");
//     break;
// }

// case 2

// let oy = 6;

// switch (oy) {
//   case 1:
//     console.log("qish fasli");
//     break;
//   case 2:
//     console.log("qish fasli");
//     break;
//   case 3:
//     console.log("bahor fasli");
//     break;
//   case 4:
//     console.log("bahor fasli");
//     break;
//   case 5:
//     console.log("bahor fasli");
//     break;
//   case 6:
//     console.log("yoz-fasli");
//     break;
//   case 7:
//     console.log("yoz-fasli");
//     break;
//   case 8:
//     console.log("yoz-fasli");
//     break;
//   case 9:
//     console.log("kuz fasli");
//     break;
//   case 10:
//     console.log("kuz fasli");
//     break;
//   case 11:
//     console.log("kuz fasli");
//     break;
//   case 12:
//     console.log("qish fasli");
//     break;
//   default:
//     console.log("bunday oy va mos fasl yoq");
// }

// case 3

// let oy = 2;

// switch (oy) {
//   case 1:
//     console.log("yanvar oyi:30 kun bor");
//     break;
//   case 2:
//     console.log("fevral oyi: 29 kun bor");
//     break;
//   case 3:
//     console.log("mart oyi: 31 kun bor");
//     break;
//   case 4:
//     console.log("aprel oyi: 30 kun bor");
//     break;
//   case 5:
//     console.log("may oyi: 31 kun bor");
//     break;
//   case 6:
//     console.log("iyun oyi: 30 kun bor");
//     break;
//   case 7:
//     console.log("iyul oyi: 31 kun bor");
//     break;
//   case 8:
//     console.log("avgust oyi: 30 kun bor");
//     break;
//   case 9:
//     console.log("sentabr oyi: 31 kun bor");
//     break;
//   case 10:
//     console.log("oktabr oyi 30 kun bor");
//     break;
//   case 11:
//     console.log("noyabr oyi: 31 kun bor");
//     break;
//   case 12:
//     console.log("dekabr oyi: 30 kun bor");
//     break;
//   default:
//     console.log("bunday oy yoq");
// }

// case 4

// let birlik = 5;
// let kesma = 10;

// switch (birlik) {
//   case 1:
//     console.log("desimetr" + " " + kesma * 100 + " " + "metr");
//     break;
//   case 2:
//     console.log("kilometr" + " " + kesma / 100000 + " " + "metr");
//     break;
//   case 3:
//     console.log("metr" + " " + kesma * 1 + " " + "metr");
//     break;
//   case 4:
//     console.log("millimetr" + " " + kesma * 1000 + " " + "metr");
//     break;
//   case 5:
//     console.log("santimetr" + " " + kesma * 10 + " " + "metr");
//     break;
// default:
// console.log("xato");
// }

// case 5

// let birlik = 1;
// let ogirlik = 5;

// switch (birlik) {
//   case 1:
//     console.log("kilogramm" + " " + ogirlik * 1 + " " + "kilogramm");
//     break;
//   case 2:
//     console.log("milligramm" + " " + ogirlik / 1000000 + " " + "kilogramm");
//     break;
//   case 3:
//     console.log("gramm" + " " + ogirlik / 1000 + " " + "kilogramm");
//     break;
//   case 4:
//     console.log("tonna" + " " + ogirlik * 1000 + " " + "kilogramm");
//     break;
//   case 5:
//     console.log("sentner" + " " + ogirlik * 100 + " " + "kilogramm");
//     break;
//   default:
//     console.log("xato");
// }

// case 6

// let M = +prompt("Oyni sonda kiriting!");
// let D = +prompt("Kunni kiriting!");

// let res;

// if (D < 31) {
//   switch (M) {
//     case 1:
//       res = D + " chi yanvar";
//       break;
//     case 2:
//       res = D + " chi Fevral";
//       break;
//     case 3:
//       res = D + " chi Mart";
//       break;
//     case 4:
//       res = D + " chi Aprel";
//       break;
//     case 5:
//       res = D + " chi May";
//       break;
//     case 6:
//       res = D + " chi Iyun";
//       break;
//     case 7:
//       res = D + " chi Iyul";
//       break;
//     case 8:
//       res = D + " chi Avgust";
//       break;
//     case 9:
//       res = D + " chi Sentyabr";
//       break;
//     case 10:
//       res = D + " chi Oktyabr";
//       break;
//     case 11:
//       res = D + " chi Noyabr";
//       break;
//     case 12:
//       res = D + " chi Dekabr";
//       break;
//     default:
//       res = "Kiritilgan oy xato";
//       break;
//   }

//   console.log(res);
// } else {
//   console.log("Kiritilgan kun xato");
// }

// case 7

// let M = 6;
// let D = 10;

// let res;

// if (D < 31) {
//   switch (M) {
//     case 1:
//       res = ++D + " chi yanvar";
//       break;
//     case 2:
//       res = ++D + " chi Fevral";
//       break;
//     case 3:
//       res = ++D + " chi Mart";
//       break;
//     case 4:
//   res = ++D + " chi Aprel";
//   break;
// case 5:
//   res = ++D + " chi May";
//   break;
// case 6:
//   res = ++D + " chi Iyun";
//   break;
// case 7:
//   res = ++D + " chi Iyul";
//   break;
// case 8:
//   res = ++D + " chi Avgust";
//   break;
// case 9:
//   res = ++D + " chi Sentyabr";
//   break;
//     case 10:
//       res = ++D + " chi Oktyabr";
//       break;
//     case 11:
//       res = ++D + " chi Noyabr";
//       break;
//     case 12:
//       res = ++D + " chi Dekabr";
//       break;
//     default:
//       res = "Kiritilgan oy xato";
//       break;
//   }

//   console.log(res);
// } else {
//   console.log("Kiritilgan kun xato");
// }

// case 8


