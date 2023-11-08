// const a = false;

// console.log(a);

// Single line comment

/**
 * Multi line comment
 * tot ce voi scrie aici
 * va fi scris pe mai
 * multe linii
 */

/*
Example 11 - The for loop
Write a for loop that prints numbers in ascending order to the browser console
from min to max, but only if the number is a multiple of 5.
*/

// const max = 100;
// const min = 20;

// for (let i = min; i <= max; i++) {
//     if (i % 5 === 0) {
//         console.log(i);
//     }
// }

// const userInput = prompt("intoduceti numarul:");

// const number = Number(userInput);
// debugger
// if (number > 0){
//     console.log("numarul este pozitiv");
// } else if (number === 0){
//     console.log("numarul este zero");
// } else {
//     console.log("numarul este negativ");
// }
// const a = 90;
// const b = 150;

// const isLarger = a > 100 && b > 100;
// if (isLarger){
//     console.log(Math.max(a, b));
// }else {
//     console.log(b + 512);
// }

// let link = 'htpps://my-site.come/about';

// const lastCharacter = link.charAt(link.length -1);

// if(lastCharacter !== '/'){
//     link += '/';
// };
// console.log(link);

// let link = 'htpps://my-site.come/about';

// const lastCharacter = link.charAt(link.length -1);

// if(lastCharacter !== '/' && link.includes('my-site')){
//     link += '/';
// };
// console.log(link);

// let link = 'htpps://my-site.come/about';

// const lastCharacter = link.charAt(link.length -1);
// const isLastCharSlash = lastCharacter !== '/' && link.includes('my-site');
// link += isLastCharSlash ? '/' : '';

// console.log(link);

// const hours = 27;
// if (hours < 17) {
//     console.log('pending');
// }else if(hours >= 17 && hours <= 24){
// console.log('Expires')
// }else{
// console.log('overdue')
// }

// const daysUntilDeadline = 2;

// if (daysUntilDeadline === 0){
// console.log('Today')

// }else if(daysUntilDeadline === 1){
// console.log('Tomorrow')}

// else if(daysUntilDeadline === 2){
// console.log('the day after Tomorrow')

// }else{
// console.log('Date in the future')
// }

// const daysUntilDeadline = 10;

// switch(daysUntilDeadline){
//     case 0:
//         console.log('Today');
//         break;
//         case 1:
//             console.log('Tomorrow');
//             break;
//             case 2:
//                 console.log('The day after tomorrow');
//                 break;
//                 default:
//                     console.log('Date in the future');
// }

// let test = 5;
// console.log(test)
// test = test + 1;
// console.log(test)
// test++;
// console.log(test)
// test += 1;
// console.log(test)

// const max = 500;
// const min = 10;

// for (let i = min; i <= max; i++) {
//     if (i % 5 === 0){
//         console.log(i);
//     }
// }

// let counter = 0;
// while (counter < 10) {
//     console.log(`Numaratorul ${counter}`)
//     counter += 1;
// }

// const loginAnswer = prompt('Care este username-ul?');

// if (loginAnswer === 'Admin'){
//     const passwordAnswer = prompt('Care e parola?');
//     if(passwordAnswer === 'Sunt admin'){
//         console.log('Hello!');
//     }else{
//         console.log('Parola este grestia');
//     }
// }else if(loginAnswer && loginAnswer.length > 0){
// console.log('I don\'t know you')
// }else {
//     console.log('Cancelled');
// }

// const clients = ['mango', 'poly', 'ajax'];
// console.log(clients[0]);

// const genres = ['jazz', 'blues'];
// genres.push('Rock and roll');
// console.log(genres);

// console.log(typeof genres[0]);

// console.log(genres[genres.length - 1]);

// console.log(genres.shift());
// console.log(genres);
// genres.unshift('country', 'reggae');
// console.log(genres);

// const values = '8 11';
// const rectangleSizes = values.split(' ');
// console.log(rectangleSizes);

// const height = Number.parseInt(rectangleSizes[0]);
// const width = Number.parseInt(rectangleSizes[1]);

// const aria = height * width;

// console.log(aria);

// console.log(rectangleSizes[0] * rectangleSizes[1]);

// const fruits = ['banana', 'grape', 'apple', 'pinapple', 'cherry'];

// for (let i = 0; i < fruits.length; i++){
// console.log(`${i + 1}: ${fruits[i]}`)
// }

// let i = 0;
// for (const fruit of fruits) {
//     i++;
//     console.log(`${i}: ${fruit}`)
// }

// const names = 'Rima,Ralda,Rana,Majd';
// const phones = '0944353325,0731798000,0731789000,0731790000';

// const arrayOfNames = names.split(',');
// const arrayOfPhones = phones.split(',');

// console.log(arrayOfNames, arrayOfPhones);

// for (let i = 0; i < arrayOfNames.length; i++) {
//     console.log(`${arrayOfNames[i]} - ${arrayOfPhones[i]}`);
// }

// const string = '    Welcome to the future';
// console.log(string);

// const words = string.split(' ');
// console.log(words);
// if (words.length > 1) {
//     words.shift();
// }
// for (let i = 0; i < words.length; i++) {
//     if (words[i] = ''){
//     words.shift();
//     }else {
//         break;
//     }
// }
// console.log(words);

// if (words.length > 1) {
//     words.pop();
// }
// console.log(words);

// let finalString = '';
// for (const word of words) {
//     if (word !== '') {
//         finalString += word + ' ';
//     }
// }
// console.log(finalString);

// const string = 'Welcome to the future';

// const words = string.split(' ');
// for (let i = 0; i < words.length; i++) {
//     words[i] = words[i].split('').reverse().join('');
//     }
//     console.log(words);
//     const finalString = words.join(' ');
//     console.log(finalString);

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ryby'];
// console.log(langs.sort());
// console.log(langs);

// const numbers = [2, 17, 94, 1, 0, 5, 23, 37];
// let min = numbers[0];

// for (let i = 0; i < numbers.length; i++) {
//    console.log(`${min} > ${numbers[i]}`);
//     if (min > numbers[i]){
//         min = numbers[i]
//     }
//     console.log(min);
// }
// console.log('------fnal-----');
// console.log(min);

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i++) {
//   console.log(clients[i]);
// }

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;

// for (const client of clients) {
//   // La fiecare iterație, vom verifica dacă elementul din array se potrivește cu
//   // numele clientului. Dacă se potrivește, atunci scriem un mesaj de succes
//   // în variabila message adăugăm break-ul pentru a nu căuta mai departe
//   if (client === clientNameToFind) {
//     message = "Clientul cu acest nume există în baza de date!";
//     break;
//   }

//   // Dacă nu se potrivesc, atunci scriem un mesaj din care reiese că acest nume nu s-a putut găsi message = "Nu există nici un client cu acest nume în baza de date!";
// }

// console.log(message); // "Clientul cu acest nume există în baza de date!"

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Pentru numere mai mici decât valoarea limită, va funcționa continue, iar corpul
// // execuției statement se oprește.
// // Se va efectua următoarea iterație.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Numărul este mai mare decât ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }
// const message = "JavaScript is cool";
// console.log(message.split(""));

// const numbers = [];

// numbers.push(1);

// numbers.push(2);
// numbers.push(3, 4, 5, 6);
// numbers.push(7);
// console.log(numbers)
// numbers.pop();
// console.log(numbers);
// numbers.pop();
// console.log(numbers);
// numbers.pop();
// console.log(numbers);
// numbers.pop();
// console.log(numbers);
// numbers.pop();
// console.log(numbers);
// numbers.pop();
// console.log(numbers);
// numbers.pop();
// console.log(...numbers);

// let user = { name: "Majd Khawam", age: 30}

// let newUser = { ...user};
// console.log(newUser);

// const scores = [1, 2, 3, 4, 5];

// // Ștergem trei elemente ale matricei, începând cu primul element (index 0)
// const deletedScores = scores.splice(0, 3);

// // Acum array-ul scores conține două elemente
// console.log(scores); // [4, 5]

// // Și array-ul deletedScores conține cele trei elemente șterse
// console.log(deletedScores); // [1, 2, 3]

// const colors = ["red", "green", "blue"];

// colors.splice(0, 0, "purple");
// console.log(colors); // ["red", "green", "purple", "blue"]

// const languages = ["C", "C++", "Java", "JavaScript"];
// // Să înlocuim elementul de la indexul 1 cu unul nou
// languages.splice(0, 0, "Python");
// languages.splice(1, 1, "xxx");
// languages.splice(3, 1, "test1", "test2", "test3");
// console.log(languages);

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Monkong", "Singu"];

// const allClientsWithOldFirst = oldClients.concat(newClients);
// console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

// const allClientsWithNewFirst = newClients.concat(oldClients);
// console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

// 1. Declararea parametrilor x, y, z
// function multiply(x, y, z) {
//     console.log(`Rezultatul înmulțirii este ${x + y + z}`);
//   }

//   // 2. Parsarea argumentelor
//   multiply(2, 100, 5);
//   multiply(4, 8, 12);
//   multiply(17, 6, 25);

// function multiply(x, y, z) {
//     console.log(`Rezultatul înmulțirii este ${x + y + z}`);

//     return x * y * z;
// }
// multiply(2, 2, 2);

// function count(countFrom = 0, countTo = 10, step = 1) {
//     console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//     for (let i = countFrom; i <= countTo; i += step) {
//       console.log(i);
//     }
//   }

//   count(1, 5); // countFrom = 1, countTo = 5, step = 1
//   count(2); // countFrom = 2, countTo = 10, step = 1
//   count(); // countFrom = 0, countTo = 10, step = 1

// function withdraw(amount, balance) {
//     if (amount === 0) {
//       console.log("Vă rugăm să introduceți o sumă mai mare decât zero pentru retragere.");
//     } else if (amount > balance) {
//       console.log("Fonduri insuficiente în cont!");
//     } else {
//       console.log("Operația de retragere a fost finalizată cu succes!");
//     }
//   }

//   withdraw(0, 300); // "Vă rugăm să introduceți o sumă mai mare decât zero pentru retragere."
//   withdraw(500, 300); // "Fonduri insuficiente în cont!"
//   withdraw(100, 300); // "Operația de retragere a fost finalizată cu succes!"

// function withdraw(amount, balance) {
//     // Dacă condiția este adevărată, se apelează console.log
//     // și funcția se va opri. Codul de după instrucțiunea if nu va mai fi executat.
//     if (amount === 0) {
//       console.log("Introduceți o sumă mai mare decât zero pentru a finaliza tranzacția.");
//       return;
//     }

//     // Dacă condiția primului if nu este îndeplinită, corpul acestuia este omis
//     // și interpretorul ajunge la al doilea if.
//     // Dacă condiția este adevărată, se apelează console.log și funcția este oprită.
//     // Codul de după instrucțiunea if nu va mai fi executat.
//     if (amount > balance) {
//       console.log("Fonduri insuficiente în cont");
//       return;
//     }

//     // Dacă niciunul dintre if-urile anterioare nu a fost îndeplinit,
//     // interpretorul ajunge la acest cod și îl execută.
//     console.log("Operațiune de retragere este finalizată");
//   }

//   withdraw(0, 300); // "Introduceți o sumă mai mare decât zero pentru a finaliza tranzacția."
//   withdraw(500, 300); // "Fonduri insuficiente în cont"
//   withdraw(100, 300); // "Operațiune de retragere este finalizată"

// // Function declaration
// function multiply(x, y, z) {
//     console.log(`Rezultatul înmulțirii este ${x * y * z}`);
//   }
//   multiply(2, 2, 2);

// // Function expression
// const multiply = function (x, y, z) {
//     console.log(`Rezultatul înmulțirii este ${x * y * z}`);
//   };

//   multiply(2, 2, 2);

// const c = 20;
// function foo(a, b){
//     const c = 10;
//     return a + b + c;
// }
// foo(5, 15);
// function foo(array){
//     for (let i = 0; i < array.length; i++) {
//         array[i] *= 2;;
//     }
// }
// const numbers = [1, 2, 3, 4, 5];
// foo(numbers);
// console.log(numbers);

// function calcBMI(weight, height){
//     const parsedWeight = Number(weight.replace(",", "."));
//     const parsedHeight = Number(height.replace(",", "."));

//     const result = parsedWeight/Math.pow(parsedHeight, 2);
//     return result;
// }
// const bmi = calcBMI("70", "1.75");
// console.log(bmi);

// function calcBMI(weight, height) {
//     const parsedWeight = Number(weight.replace(",", "."));
//     const parsedHeight = Number(height.replace(",", "."));

//     const result = parsedWeight/Math.pow(parsedHeight, 2);

//     return result;
// }

// const bmi = calcBMI("80", "1.92");
// console.log(bmi); // 28.8

// function min(a, b){
//     // if (a < b) {
//     //     return a;
//     // }else {
//     //     return b;
//     // }
//     console.log("test")
//     return Math.min(a, b);
// }
// console.log(min(2, 5));
// console.log(min(3, -1));
// console.log(min(1, 1));
// console.log(min(1, 1));

// function getRectArea(dimensions) {
//     const values = dimensions.split(' ');
//     const dimensionA = Number(values[0]);
//     const dimensionB = Number(values[1]);

//     return dimensionA * dimensionB;
// }
// console.log(getRectArea("8 11"));
// console.log("LOVE IT")***********************

// function logItems(items) {
//     for (let i = 0; i < items.length; i++) {
//         const numberOfItem = i + 1;
//         const value = items[i];
//         console.log(`${numberOfItem} - ${value}`)
//     }
// }
// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

// function printContactsInfo(names, phones) {
// const arrayOfNames = names.split(',')
// const arrayOfPhones = phones.split(',')

// console.log(arrayOfNames);
// console.log(arrayOfPhones);
// for (let i = 0; i < arrayOfNames.length; i++) {
//     console.log(`${arrayOfNames[i]} - ${arrayOfPhones[i]}`);

// }
// }

// printContactsInfo(
//   "Jacob,William,Solomon,Artemis",
//   "89001234567,89001112233,890055566377,890055566300"
// );

// function findLargestNumber(numbers) {
//     let max = numbers[0];

//     for (let i = 0; i < numbers.length; i++){
//         if (numbers[i] > max){
//             max = numbers[i];

//         }
//     }

//     return max;
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

// function calAverage() {
//     let total = 0;
//     for (let i = 0; i < arguments.length; i++){
//         total = total + arguments[i]
//     }

//     const average = total / arguments.length;
//     return average / arguments.length;

// return average;
///

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

// function formatTime(totalMinutes) {
//     const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// // console.log(hours);
// // console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// // console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

// const result = `${doubleDigitHours}:${doubleDigitMinutes}`
// return result;
// }

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"

// testFunction();//nu functioneaza din cauza variabila nu este declarata inca
// const testFunction = function(){
//     console.log('functia declarata')
// }
// testFunction();

// testFunctionKeyword();
// function testFunctionKeyword(){
//     console.log('codul se va executa indiferent cum este declarat')
// }
// testFunctionKeyword()

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];
// function addCourse(courseName){
//     if(courses.indexOf(courseName) > -1){
//         console.log("You already have this course");
//         return;
//     }
//     courses.push(courseName);

// }

// function removeCourse(courseName){
//     const courseIndex = courses.indexOf(courseName)
//     if(courseIndex === -1){
//         console.log("Course with this name was not found")
//         return;
//     }
//     courses.splice(courseIndex, 1);
// }

// function updateCourse(oldCourse, newCourse){
//     const courseIndex = courses.indexOf(oldCourse);
//     if(courseIndex === - 1){
//         console.log("Course with this name was not found");
//         return;
//     }
//  courses.splice(courseIndex, 1, newCourse);

// }
// addCourse("Express");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse("CSS"); // ' You already have this course'

// removeCourse("React");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse("Vue"); // 'Course with this name was not found'

// updateCourse("Express", "NestJS");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
//   const keys = Object.keys(book);

//   for (const key of keys) {
//     // Key
//     console.log(key);
//       // Property value
//   console.log(book[key]);
// }

// const goods = {
//     apples: 6,
//     grapes: 3,
//     bread: 4,
//     cheese: 7,
//   };

//   const values = Object.values(goods); // [6, 3, 4, 7]

//   let total = 0;

//   for (const value of values) {
//     total += value;
//   }

//   console.log(total); // 20

// LOVE THIS *************

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   };
//   const keys = Object.keys(book);
//   console.log(keys); // ['title', 'author', 'rating']

//   const values = Object.values(book);
//   console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

//   const entries = Object.entries(book);
//   console.log(entries);
//   // [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//   ];

// for (const book of books) {
//     // Book object
//     console.log(book);
//     // Title
//     console.log(book.title);
//     // Author
//     console.log(book.author);
//     // Rating
//     console.log(book.rating);
//   }

//   const bookNames = [];

// for (const book of books) {
//   bookNames.push(book.title);
// }

// console.log(bookNames); // ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man"]

// let totalRating = 0;

// for (const book of books) {
//   totalRating += book.rating;
// }

// const averageRating = (totalRating / books.length).toFixed(1);
// console.log(averageRating); // 8.2

// ## Example 1 - Object Basics

// Write a script that, for the `user` object, successively:

// - adds a `mood` field with value `'happy'`
// - replaces the value `hobby` to `'skydiving'`
// - replaces `premium` to `false`
// - prints the contents of the `user` object in `key:value` format using
//   `Object.keys()` and `for...of`

// ### Code

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };
// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;
// console.log(user)

// for( const key in user){
//     console.log(`${key} - ${user[key]}`)
// }

// ## Example 2 - Object.values() method

// We have an object that stores our team salaries. Write code for
// summing all salaries and store the result in the sum variable. Should
// get 390. If the `salaries` object is empty, then the result should be 0.

// ### Code

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sumA = 0;
// const salariesList = Object.values(salaries);
// console.log(salariesList);

// for (let i = 0; i < salariesList.length; i++) {
//     sumA += salariesList[i];
//   }
// console.log(sumA);
// let sumB = 0;
// for (const key in salaries) {
//     sumB += salaries[key];
//     }
//     console.log(sumB);

// ## Example 3 - Array of objects

// Write a function `calcTotalPrice(stones, stoneName)` that takes an array
// of objects and a string with the name of the stone. The function calculates and returns the total cost
// of stones with the same name, price and quantity from the object

// ### Code

// const stones = [
//   { name: "Emerald", price: 1300, quantity: 4 },
//   { name: "Diamond", price: 2700, quantity: 3 },
//   { name: "Sapphire", price: 400, quantity: 7 },
//   { name: "Rubble", price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName){

//     for (const key of stones){
//         if (key.name === stoneName) {
//             return key.price * key.quantity;
//         }
//     }
//     return 'stone do not exist';
// }
// console.log(calcTotalPrice(stones, 'Rubble'));

// ## Example 4 - Complex tasks

// Write a script for managing a personal account of an Internet bank. There is an `account` object
// in which it is necessary to implement methods for working with balance and
// transaction history.

// ```js
// /*
//  * There are only two types of transaction.
//  * You can deposit or withdraw money from your account.
//  */

/*
 * Each transaction is an object with properties: id, type and amount
 */

// const Transaction = {
//     DEPOSIT: "deposit",
//     WITHDRAW: "withdraw",
//   };

//   /*
//    * Each transaction is an object with properties: id, type and amount
//    */

//   const account = {
//     // Current account balance
//     balance: 0,
//     // Transaction History
//     transactions: [],
//     transactionsId: 0,

//     /*
//      * Method creates and returns a transaction object.
//      * Accepts amount and type of transaction.
//      */
//     createTransaction(amount, type) {
//         const newTransaction = {
//             id: this.transactionsId,
//             amount: amount,
//             type: type
//         }
//         this.transactionsId++;
//         this.transactions.push(newTransaction);
//     },

//     /*
//      * The method responsible for adding the amount to the balance..
//      * Accepts the amount of the transaction.
//      * Calls createTransaction to create a transaction object
//      * then adds it to the transaction history
//      */
//     deposit(amount) {
//         this.createTransaction(amount, Transaction.DEPOSIT);
//         this.balance += amount;
//     },

//     /*
//      *The method responsible for withdrawing the amount from the balance.
//      * Calls createTransaction to create a transaction object
//      * then adds it to the transaction history.
//      *
//      * If amount is greater than the current balance, display a message
//      * about the fact that the withdrawal of such an amount is not possible, there are not enough funds.
//      */
//     withdraw(amount) {
//         if(amount > this.balance){
//             console.log('Nu exista suficienti bani in cont');
//             return;
//         }
//         if(amount < this.balance){
//             console.log(`Poti etrage mai mult bani decat ${amount} RON`);
//         }
//         this.createTransaction(amount, Transaction.WITHDRAW);
//         this.balance -= amount;
//     },

//     /*
//      * The method returns the current balance
//      */
//     getBalance() {
//         console.log(`Balanta este: ${this.balance}`);
//     },

//     /*
//      * The method searches and returns the transaction object by id
//      */
//     getTransactionDetails(id) {
//         for (const item of this.transactions){
//             if(item.id === id){
//                 console.log(`Tranzactia cu id-ul: ${item.id} - valoare: ${item.amount} - ${item.type}`);

//                 return item;
//             }
//         }
//         console.log(`Nu exista tranzactia cu id-ul: ${id}`);
//     },

//     /*
//      * The method returns the amount of funds
//      *a specific type of transaction from the entire history of transactions
//      */
//     getTransactionTotal(type) {
//         let sum = 0;

//         for(const item of this.transactions){
//             if(item.type === type){
//                 sum += item.amount;
//             }

//         }
//         console.log(`Totalul tranzactilor de tipul: ${type} este: ${sum}`);
//     },
//   };
// account.getBalance();
// account.deposit(500);
// account.getBalance();
// account.withdraw(400);
// account.withdraw(50);
// account.withdraw(250);
// account.getBalance();
// account.getTransactionDetails(3);
// account.getTransactionTotal(Transaction.WITHDRAW);
// console.log(console);

// const temps = [14, -4, 25, 8, 11];

// // Consola va printa o matrice
// console.log(temps);
// // ❌ Acest lucru nu va funcționa deoarece transmitem o matrice întreagă
// console.log(Math.max(temps)); // NaN

// // // În consolă se va printa un set de numere individuale
// console.log(...temps);
// // // ✅ Pulverizăm o colecție de elemente ca și niște argumente individuale
// console.log(Math.max(...temps)); // 25

// const temps = [14, -4, 25, 8, 11];

// // This is an exact but independent copy of the temps array
// const copyOfTemps = [...temps];
// console.log(copyOfTemps); // [14, -4, 25, 8, 11]

// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// // console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//   };

//   // Adăugăm o imagine de copertă dacă aceasta nu se află în obiectul carte
//   const {
//     title,
//     coverImage = "https://via.placeholder.com/640/480",
//     author,
//   } = book;

//   console.log(title); // The Last Kingdom
//   console.log(author); // Bernard Cornwell
//   console.log(coverImage); // https://via.placeholder.com/640/480

// const firstBook = {
//     title: "The Last Kingdom",
//     coverImage:
//       "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
//   };

//   const {
//     title: firstTitle,
//     coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
//   } = firstBook;

//   console.log(firstTitle); // The Last Kingdom
//   console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

// de explicat mai mult!

//   const secondBook = {
//     title: "Amintiri din copilărie",
//   };

//   const {
//     title: secondTitle,
//     coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
//   } = secondBook;

//   console.log(secondTitle); // Amintiri din copilărie
//   console.log(secondCoverImage); // https://via.placeholder.com/640/480

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Baltagul",
//       author: "Mihail Sadoveanu",
//       rating: 8.51,
//     },
//   ];

//   for (const book of books) {
//     // console.log(book.title);
//     // console.log(book.author);
//     // console.log(book.rating);
//   }

// for (const book of books) {
//     const { title, author, rating } = book;

//     console.log(title);
//     console.log(author);
//     console.log(rating);
//   }

//...iar de explicat mai mult!!

// const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     stats: {
//       followers: 5603,
//       views: 4827,
//       likes: 1308,
//     },
//   };

//   const {
//     name,
//     tag,
//     stats: { followers, views: userViews, likes: userLikes = 0 },
//   } = user;

//   console.log(name); // Jacques Gluke
//   console.log(tag); // jgluke
//   console.log(followers); // 5603
//   console.log(userViews); // 4827
//   console.log(userLikes); // 1308

// ## Example 1 - Destructuring

// Rewrite the function so that it takes one object of the parameter instead of a set
// of independent arguments.

// function calcBMI(bmi){
//     const { weight, height } = bmi;
//     const numericWeight = Number(weight.replace(",", "."));
//     const numericHeight = Number(height.replace(",", "."));
//     return Number((numericWeight / numericHeight ** 2).toFixed(1));
//   }

//   // It was
//   // console.log(calcBMI('88,3', '1.75'));
//   // console.log(calcBMI('68,3', '1.65'));
//   // console.log(calcBMI('118,3', '1.95'));

//   // Is expected
//   console.log(
//     calcBMI({
//       weight: "88,3",
//       height: "1.75",
//     })
//   );
//   console.log(
//     calcBMI({
//       weight: "68,3",
//       height: "1.65",
//     })
//   );
//   console.log(
//     calcBMI({
//       weight: "118,3",
//       height: "1.95",
//     })
//   );

// ## Example 2 - Destructuring

// Rewrite the function so that it takes one object of the parameter instead of a set
// of independent arguments.

// function printContactsInfo(arg) {
//     const { names: listOfNames, phones: listOfPhones} = arg;

//   const nameList = listOfNames.split(",");
//   const phoneList = listOfPhones.split(",");
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// // It was
// // printContactsInfo(
// //   'Jacob,William,Solomon,Artemis',
// //   '89001234567,89001112233,890055566377,890055566300',
// // );

// // Is expected
// printContactsInfo({
//   names: "Jacob,William,Solomon,Artemis",
//   phones: "89001234567,89001112233,890055566377,890055566300",
// });

// ## Example 3 - Deep destructuring

// Rewrite the property so that it uses one object's parameter instead of a set
// of independent arguments.

// function getBotReport(arg) {
//     const { companyName, bots } = arg;
//     const { defence: defenceBots ,repair: repairBots} = bots;
//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// // It was
// // console.log(getBotReport('Cyberdyne Systems', 150, 50));

// // Is expected
// console.log(
//   getBotReport({
//     companyName: "Cyberdyne Systems",
//     bots: {
//       repair: 150,
//       defence: 50,
//     },
//   })
// ); // "Cyberdyne Systems has

// ## Example 4 - Destructuring

// Rewrite the function so that it accepts a parameters object with properties
// `companyName` and `stock` and display a report about the number of goods in the warehouse
// of any companies.

// function getStockReport(arg) {
//     const { companyName: numeNouCompanie, stock } = arg;
//   let total = 0;
//   for (const value of Object.values(stock)) {
//     total += value;
//   }
//   return `${numeNouCompanie} has ${total} items in stock`;
// }

// console.log(
//   getStockReport({
//     companyName: "Cyberdyne Systems",
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   })
// ); // "Cyberdyne Systems has 200 items in stock"

// const obiectTrimisFunctiei = {
//     companyName: "Cyberdyne Systems",
//     stock: {
//         repairBots: 150,
//         defenceBots: 50,
//         attackBoots: 20,
//         yellowBots: 10
//     }
// }
// console.log(getStockReport(obiectTrimisFunctiei));

// console.log(
//   getStockReport({
//     companyName: "Belacci",
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   })
// ); // "Belacci has 35 item in stock"

// ## Example 5 - operation Spread

// Extend the `createContact(partialContact)` function so that it returns a new
// contact object with `id` and `createdAt` properties added, as well as `list` with
// value "default" if there is no such property in `partialContact`.

// function generateId() {
//     return Math.random() + "Random";
//   }

// function createContact(partialContact) {
//   return {
//     id: generateId(),
//     list: "default",
//     ...partialContact,
//     id: generateId(),
//     createdAt: Date.now(),
//   };
// }

// console.log(
//   createContact({
//     name: "Mango",
//     email: "mango@mail.com",
//     list: "friends",
//   })
// );
// console.log(
//   createContact({
//     name: "Poly",
//     email: "poly@hotmail.com",
//   })
// );

// ## Example 6 - Operation rest

// Write a `transformUsername(user)` function to return a new object
// with `fullName` property instead of `firstName` and `lastName`.

// function transformUsername(arg) {
//     const { firstName, lastName, ...restulProprietatilor } = arg;

// // console.log(firstName);
// // console.log(lastName);
// // console.log(restulProprietatilor);

// const fullName = `${firstName} ${lastName}`;

//   return {
//     fullName,
//     ...restulProprietatilor,
//   };
// }

// console.log(
//     transformUsername({
//     id: 1,
//     firstName: "Jacob",
//     lastName: "Mercer",
//     email: "j.mercer@mail.com",
//     friendCount: 40,
//   })
// );

// console.log(
//   transformUsername({
//     id: 2,
//     firstName: "Adrian",
//     lastName: "Cross",
//     email: "a.cross@hotmail.com",
//     friendCount: 20,
//   })
// );

//PENTRU SPEAD SI REST!!
// const original = [1, 2, 3, 4, 5];
// // const [first, second, ...rest] = original;

// const copy = [...original];
// const fakeCopy = original;

// fakeCopy.push(6);

// console.log(original);
// console.log(copy);
// console.log(fakeCopy);

// const originalObject = {
//     name: 'Sergiu',
//     age: 25,
//     address: {
//         city: 'London',
//         zip: 45454
//     }
// }

// const copyObject = {...originalObject, address: {...originalObject.address}}; ///important!!
// const fakeObjectCopy = originalObject;
// fakeObjectCopy.name = 'Alex';

// copyObject.name = 'bob';
// copyObject.address.city = 'Bucharest';

// console.log(originalObject);
// console.log(fakeObjectCopy);
// console.log(copyObject);

// function greet(name) {
//     return `Bine ai venit, ${name}.`;
//   }

//   // Apelăm funcția greet și printăm rezultatul în consolă
//   console.log(greet("simon")); // Bine ai venit, Andrei.

//   // Parsăm funcția greet fără a fi apelată pentru a o printa în consolă
//   console.log(greet); // ƒ greet() { return `Bine ai venit, ${name}.`; }

// Funcție callback
// function greet(name) {
//     console.log(`Bine ai venit taztouz, ${name}.`);
//   }

//   // Funcție de tip HOF
//   function registerGuest(name, callback) {
//     // console.log(`Introducem datele vizitatorului în sistem: ${name}.`);
//     callback(name);
//   }

//   registerGuest("majd", greet);

// function registerGuest(name, callback) {
//     console.log(`Introducem datele vizitatorului în sistem: ${name}.`);
//     callback(name);
//   }

//   // Transmitem funcția inline greet ca și callback.
//   registerGuest("Andrei", function greet(name) {
//     console.log(`Bine ai venit, ${name}.`);
//   });

//   // Transmitem funcția notify greet ca și callback.
//   registerGuest("Andrei", function notify(name) {
//     console.log(`Dragă ${name}, comanda dvs. va fi procesată în 30 de minute.`);
//   });

// function processCall(recipient) {
//     // Simulăm disponibilitatea unui abonat cu un număr aleatoriu
//     const isRecipientAvailable = Math.random() > 0.5;

//     if (!isRecipientAvailable) {
//       console.log(`Abonatul ${recipient} nu este disponibil, va rugăm să lăsați un mesaj.`);
//       // Logica de activare a robotului telefonic
//     } else {
//       console.log(`Încercăm efectuarea conexiunii cu ${recipient}, vă rugăm să așteptați...`);
//       // Logica de conectare a apelurilor între 2 utilizatori
//     }
//   }

//   processCall("Andrei");

// function processCall(recipient, onAvailable, onNotAvailable) {
//     // Simulăm disponibilitatea unui abonat cu un număr aleatoriu
//     const isRecipientAvailable = Math.random() > 0.5;

//     if (!isRecipientAvailable) {
//       onNotAvailable(recipient);
//       return;
//     }

//     onAvailable(recipient);
//   }

//   function takeCall(name) {
//     console.log(`Vă conectăm cu utilizatorul ${name}, va rugăm să așteptați...`);
//     // Logica de conectare a apelurilor între 2 utilizatori
//   }

//   function activateAnsweringMachine(name) {
//     console.log(`Abonatul ${recipient} nu este disponibil, va rugăm să lăsați un mesaj.`);
//     // Logica de activare a robotului telefonic
//   }

//   function leaveHoloMessage(name) {
//     console.log(`Abonatul ${name} nu este disponibil, înregistrați o hologramă.`);
//     // Logica de înregistrare a unei holograme
//   }

//   processCall("Andrei", takeCall, activateAnsweringMachine);
//   processCall("Vasile", takeCall, leaveHoloMessage);

// function repeatLog(n) {
//     for (let i = 0; i < n; i += 1) {
//       console.log(i);
//     }
//   }

//   repeatLog(11);

// function printValue(value) {
//     console.log(value);
//   }

//   function prettyPrint(value) {
//     console.log("Logging value: ", value);
//   }

//   function repeat(n, action) {
//     for (let i = 0; i < n; i += 1) {
//       action(i);
//     }
//   }

//   // Parsăm printValue ca și funcție callback
//   repeat(3, printValue);
//   // 0
//   // 1
//   // 2

//   // Parsăm prettyPrint ca și funcție callback
//   repeat(3, prettyPrint);
//   // Logging value: 0
//   // Logging value: 1
//   // Logging value: 2

// const numbers = [5, 10, 15, 20, 25];

// // Bucla for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Index ${i}, valoare ${numbers[i]}`);
// }

// // Metodă de iterare de tip Higher-Order Function
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, valoare ${number}`);
// });

// // Declararea unei funcții simple
// function classicAdd(a, b, c) {
//     return a + b + c;
//   }

//   // Declararea unei funcții de tip arrow
//   const arrowAdd = (a, b, c) => {
//     return a + b + c;
//   };

//Dacă sunt mai mulți parametri, aceștia vor fi separați prin virgulă în paranteze rotunde, între semnul egal = și săgeată =>.
// const add = (a, b, c) => {
//     return a + b + c;
//   };

//Dacă există un singur parametru, declararea acestuia poate fi fără paranteze.
//   const add = a => {
//     return a + 5;
//   };

//Dacă nu există parametri, atunci trebuie obligatoriu să existe paranteze rotunde goale.
// const greet = () => {
//     console.log("Salut! Ce faci azi?");
//   };

//Într-o funcție arrow, simbolul => este urmat de corpul său. Aici pot fi două opțiuni: cu acolade sau fără.
// const add = (a, b, c) => {
//     console.log(a, b, c);
//     return a + b + c;
//   };
//   add([2, 2, 2], [3, 3, 3], [4, 4, 4, 4]);
//   add();

// const add = (a, b, c) => a + b + c;
// add();

// Înainte
// function classicAdd(a, b, c) {
//     return a + b + c;
//   }

//   // După
//   const arrowAdd = (a, b, c) => a + b + c;

// const add = (...args) => {
//     console.log(args);
//   };

//   add(1, 2, 3); // [1, 2, 3]

// const numbers = [5, 10, 15, 20, 25];

// //Declararea funcției
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, valoare ${number}`);
// });

// // Anonymus arrow function
// numbers.forEach((number, index) => {
//   console.log(`Index ${index}, valoare ${number}`);
// });

//Callback arrow function poate fi, de asemenea, declarată separat și transmisă doar o referință la aceasta. Acest lucru merită făcut dacă o funcție este utilizată în mai multe locuri din cod.

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Index ${index}, valoare ${number}`);
// };

// numbers.forEach(logMessage);

// Abordare imperativă
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = [];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > 3) {
//     filteredNumbers.push(numbers[i]);
//   }
// }
//console.log(filteredNumbers); // [4, 5]

// // Abordare declarativă
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(value => value > 3);
// console.log(filteredNumbers); // [4, 5]

// //functie declaratie - function declaration

// doSomething();
// function doSomething(){
//     console.log('Something')
// }
// ////functie declaratie - function declaration

// //functie expresie - function expretion
// const doOtherThing = function(){
//     console.log('Something')
// }
// // //functie expresie - function expretion not used
// // const doOtherThing2 = function RarlyUsed(){
// //     console.log('Something')
// // }
// // doOtherThing2();
// //functie expresie - function expretion

// //functie expresie - function expretion
// // function arrow
// const doSomthingArrow = () => {
//     console.log('Something')
//     return 5;
// }

// doSomething();

// doOtherThing();
// doSomthingArrow();

// const result = doSomthingArrow;
// console.log(result());
// console.log(result);
// //functie expresie - function expretion

// // ## Example 1 - Function callback

// // Write the following functions:

// // - `createProduct(obj, callback)` - accepts a product object without an id, and also
// //   callback. The function creates a product object by adding a unique identifier to it in
// //   property `id` and calls the callback passing it the created object.
// // - `logProduct(product)` - callback accepting a product object and logging it to
// //   console
// // - `logTotalPrice(product)` - callback receiving product object and logging
// //   the total value of the item in the console

// function createProduct(partialProduct, callback) {
//     const product = {
//         id: 'prefix' + Date.now(),
//         ...partialProduct
//     };
//     return callback(product);
// }

// function logProduct(product) {
//   console.log(product);
// }

// function logTotalPrice(product) {
//   console.log(product.price * product.quantity);
// }

// createProduct({ name: "🍎", price: 30, quantity: 3 }, logProduct);
// createProduct({ name: "🍋", price: 20, quantity: 5 }, logTotalPrice);

// ## Example 2 - Function callback

// Add methods `withdraw(amount, onSuccess, onError)` to the `account` object and
// `deposit(amount, onSuccess, onError)`, where the first parameter is the amount of the operation, and
// second and third are callbacks.

// The `withdraw` method raises onError if amount is greater than TRANSACTION_LIMIT or
// this.balance, and onSuccess otherwise.
// `deposit` method raises onError if amount is greater than TRANSACTION_LIMIT or less
// or either zero and onSuccess otherwise.

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: "Jacob",
//   balance: 400,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount > this.balance) {
//       onError(`Amount can't exceed account balance of ${this.balance} credits`);
//     } else {
//       this.balance -= amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount <= 0) {
//       onError(`Amount must be more than 0 credits`);
//     } else {
//       this.balance += amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
// };

// function handleSuccess(message) {
//   console.log(`✅ Success! ${message}`);
// }
// function handleError(message) {
//   console.log(`❌ Error! ${message}`);
// }

// // account.withdraw(200, handleSuccess, handleError);
// // account.withdraw(600, handleSuccess, handleError);
// // account.withdraw(300, handleSuccess, handleError);
// account.deposit(200, handleSuccess, handleError);
// // account.deposit(0, handleSuccess, handleError);
// // account.deposit(-600, handleSuccess, handleError);
// // account.deposit(600, handleSuccess, handleError);
// // account.withdraw(200, handleSuccess, handleError);
// account.withdraw(200, handleSuccess, handleError);
// account.withdraw(200, handleSuccess, handleError);
// account.withdraw(200, handleSuccess, handleError);
// account.withdraw(200, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

// ## Example 3 - Function callback

// Write a function `each(array, callback)` that takes as its first parameter
// array, and the second - a function that will be applied to each element of the array.
// The each function must return a new array whose elements will be the results
// of callback call.

// function each(array, callback) {
// //   const newArr = [];
// //   for (const el of array) {
// //     newArr.push(callback(el));
// //   }
// const newArr = [];
// // debugger
// array.forEach(element => {
//     newArr.push(callback(element));
// });
// return newArr;

// }

// function multiplyByThree(value){
//     return value * 3;
// }

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   })
// );

// console.log(each([64, 49, 36, 25, 16], multiplyByThree))

// ## Example 4 - Arrow functions

// Make the code refactoring using arrow functions.

// function createProduct(partialProduct, callback) {
//   const product = { id: Date.now(), ...partialProduct };
//   callback(product);
// }

// const createProduct = (partialProduct, callback) => {
//     const product = { id: Date.now(), ...partialProduct };
//     callback(product);
// }

// // function logProduct(product) {
// //   console.log(product);
// // }
// const logProduct = (product) => {
//     console.log(product);
// }
// // function logTotalPrice(product) {
// //   console.log(product.price * product.quantity);
// // }

// const logTotalPrice = product => {
//     console.log(product.price * product.quantity);
// }

// createProduct({ name: "🍎", price: 30, quantity: 3 }, logProduct);
// createProduct({ name: "🍋", price: 20, quantity: 5 }, logTotalPrice);

// ## Example 5 - Arrow functions

// Make the code refactoring using arrow functions.

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: "Jacob",
//   balance: 400,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount > this.balance) {
//       onError(`Amount can't exceed account balance of ${this.balance} credits`);
//     } else {
//       this.balance -= amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount <= 0) {
//       onError(`Amount must be more than 0 credits`);
//     } else {
//       this.balance += amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
// };

// // function handleSuccess(message) {
// //   console.log(`✅ Success! ${message}`);
// // }

// const handleSuccess = (message) => {
//     console.log(`✅ Success! ${message}`);
// }

// // function handleError(message) {
// //   console.log(`❌ Error! ${message}`);
// // }

// const handleError = (message) => {
//     console.log(`❌ Error! ${message}`);

// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

// ## Example 6 - Inline Arrow Functions

// Make the code refactoring using arrow functions.

// function each(array, callback) {
//   const newArr = [];
//   for (const el of array) {
//     newArr.push(callback(el));
//   }
//   return newArr;
// }

// const each = (array, callback) => {
//     const newArr = [];
//     for (const el of array) {
//       newArr.push(callback(el));
//     }
//     return newArr;
// }

// // console.log(
// //   each([64, 49, 36, 25, 16], function (value) {
// //     return value * 2;
// //   })
// // );
// console.log(
//   each([64, 49, 36, 25, 16], value => value * 2)
//   );

// // console.log(
// //   each([64, 49, 36, 25, 16], function (value) {
// //     return value - 10;
// //   })
// // );
// console.log(
//   each([64, 49, 36, 25, 16], (value) => value - 10)
// );

// // console.log(
// //   each([64, 49, 36, 25, 16], function (value) {
// //     return Math.sqrt(value);
// //   })
// // );
// console.log(
//   each([64, 49, 36, 25, 16], value => Math.sqrt(value))
// );

// // console.log(
// //   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
// //     return Math.ceil(value);
// //   })
// // );

// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value))
// );

// // console.log(
// //   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
// //     return Math.floor(value);
// //   })
// // );

// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.floor(value))
// );

// ## Example 7 - forEach method

// Make the code refactoring using `forEach` method and arrow functions.

// const logItems = items => {
// console.log(items);
//   // for (let i = 0; i < items.length; i += 1) {
//   //   console.log(`${i + 1} - ${items[i]}`);
//   // }

//   items.forEach((item, index) => {
//     console.log(`${index + 1} - ${item}`)});
// }

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

// ## Example 8 - forEach method

// Make the code refactoring using `forEach` method and arrow functions.

// const printContactsInfo = ({ names, phones }) => {
//   const nameList = names.split(",");
//   const phoneList = phones.split(",");
//   // for (let i = 0; i < nameList.length; i += 1) {
//   //   console.log(`${nameList[i]}: ${phoneList[i]}`);
//   // }
//   nameList.forEach((name, index) => {
//     console.log(`${name}: ${phoneList[index]}`)
//   });
// }

// printContactsInfo({
//   names: "Jacob,William,Solomon,Artemis",
//   phones: "89001234567,89001112233,890055566377,890055566300",
// });

// ## Example 9 - forEach method

// Make the code refactoring using `forEach` method and arrow functions.

// function calсulateAverage(...args) {
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total / args.length;

// }

// const calсulateAverage = (...args) => {
//   let total = 0;

//   args.forEach(element => {
//     total += element;
//    });

//   // for (let i = 0; i < args.length; i++) {
//   //   total += args[i];
//   // }

//   return total / args.length;
// }

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2

// array.filter((element, index, array) => {
//   // Corpul funcției callback
// });

// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues); // [-3, -68, -37]

// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues); // []

// // Matricea inițială nu s-a modificat.
// console.log(values); // [51, -3, 27, 21, -68, 42, -37]

// const students = [
//   { name: "Vasile", courses: ["matematică", "fizică"] },
//   { name: "Ion", courses: ["informatică", "matematică"] },
//   { name: "Andreea", courses: ["fizică", "biologie"] },
// ];

// const allCourses = students.flatMap(student => student.courses);
// // ['matematică', 'fizică', 'informatică', 'matematică', 'fizică', 'biologie'];

// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Radu", score: 59 },
//   { name: "Alex", score: 37 },
//   { name: "Andrei", score: 94 },
//   { name: "Ion", score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best); // O matrice cu obiectele: Mango și Andrei

// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst); // O matrice cu un singur obiect Alex

// // Într-o funcție callback este comod să destructurăm proprietățile unui obiect
// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );
// console.log(average); // O matrice cu obiectele: Radu și Ion

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// colorPickerOptions.find(option => option.label === "blue"); // { label: 'blue', color: '#2196F3' }
// colorPickerOptions.find(option => option.label === "pink"); // { label: 'pink', color: '#E91E63' }
// colorPickerOptions.find(option => option.label === "white"); // undefined

// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.log(total); // 32
// # În primul rând, metoda reduce() crează o variabilă acumulator internă și
// # îi atribuie valoarea parametrului initialValue sau a primului element
// # din matricea iterabilă dacă initialValue nu este setată.
// previousValue = 0

// # În continuare, funcția callback este apelată pentru fiecare element al matricei.
// # Valoarea actuală a parametrului previousValue este ceea ce funcția callback a returnat
// # în ultima iterație.
// Iterația 1 -> previousValue = 0 -> number = 2 -> return 0 + 2 -> return 2
// Iterația 2 -> previousValue = 2 -> number = 7 -> return 2 + 7 -> return 9
// Iterația 3 -> previousValue = 9 -> number = 3 -> return 9 + 3 -> return 12
// Iterația 4 -> previousValue = 12 -> number = 14 -> return 12 + 14 -> return 26
// Iterația 5 -> previousValue = 26 -> number = 6 -> return 26 + 6 -> return 32

// # După ce întreaga matrice a fost iterată, metoda reduce() returnează valoarea acumulatorului.
// Rezultat -

// const students = [
//   { name: "Andrei", score: 83 },
//   { name: "Cozmina", score: 59 },
//   { name: "George", score: 37 },
//   { name: "Nicolae", score: 94 },
//   { name: "Ioana", score: 64 },
// ];

// // Numele acumulatorului poate fi orice, este doar un parametru de funcție
// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);

// const averageScore = totalScore / students.length;

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// // Parcurge toate elementele colecției și adună valorea din proprietatea likes
// // la acumulator, a cărui valoare inițială este 0.
// const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

// console.log(likes); // 32

// // Dacă numărarea aprecierilor este o operație repetitivă, vom scrie o funcție
// // pentru a număra aprecierile dintr-o colecție
// const countLikes = tweets => {
//   return tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// };

// console.log(countLikes(tweets)); // 32

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// // Parcurgem toate elementele colecției și adăugăm valorile proprietății tags
// // la acumulator, a cărui valoare inițială va fi specificată printr-o matrice goală [].
// // La fiecare iterație, apelăm metoda push() pentru a adăuga toate elementele din tweet.tags
// // în acumulator și-l vom returna.
// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);

//   return allTags;
// }, []);

// console.log(tags);

// // Dacă colectarea tagurilor este o operație repetitivă, vom scrie sub forma unei funcții
// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// // console.log(getTags(tweets));

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// const tags = getTags(tweets);

// // Declarăm separat funcția callback, iar în reduce, parsăm o referință la ea.
// // Aceasta este o practică standard, dacă funcția callback este destul de mare.

// // Dacă obiectul acumulator acc nu are propria sa proprietate cu cheia tag
// // îl vom creaa și stoca apoi valoarea 0.
// // În caz contrar, mărim valoarea cu 1.
// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// // Valoarea inițială a acumulatorului este un obiect gol {}
// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);

// const scores = [61, 19, 74, 35, 92, 56];
// scores.sort();
// console.log(scores); // [19, 35, 56, 61, 74, 92]

// const scores = [27, 2, 41, 4, 7, 3, 75];
// scores.sort();
// console.log(scores); // [2, 27, 3, 4, 41, 7, 75]

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort();

// console.log(scores); // [61, 19, 74, 35, 92, 56]
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort((a, b) => a - b);
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// const scores = [61, 19, 74, 35, 92, 56];
// const descendingScores = [...scores].sort((a, b) => b - a);
// console.log(descendingScores); // [92, 74, 61, 56, 35, 19]

// const students = ["Valentin", "Andrei", "Popescu", "Ana", "Diana", "Mihaela"];

// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // ["Ana", "Andrei", "Diana", "Mihaela", "Popescu", "Valentin"]

// const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // ["Valentin", "Popescu", "Mihaela", "Diana", "Andrei", "Ana"]

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
// ];

// const inAscendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );

// const inDescendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );

// const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );

// const students = [
//   { name: "Alex", score: 83, courses: ["matematică", "fizică"] },
//   { name: "Vasile", score: 59, courses: ["informatică", "matematică"] },
//   { name: "Andrei", score: 37, courses: ["fizică", "biologie"] },
//   { name: "Georgiana", score: 94, courses: ["limba engleză", "informatică"] },
// ];

// const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
// const names = sortedByAscendingScore.map(student => student.name);

// console.log(names); // ['Andrei', 'Vasile', 'Alex', 'Georgiana']

// const names = [...students]
//   .sort((a, b) => a.score - b.score)
//   .map(student => student.name);

// console.log(names); // ['Andrei', 'Vasile', 'Alex', 'Georgiana']

// Creăm o copie a matricei inițiale, înainte de a sorta.
// Apelăm metoda sort() peste copia creată.
// Aplicăm metoda map() peste rezultatul metodei sort().
// Variabilei names i se atribuie rezultatul metodei map().
// Să obținem o listă sortată alfabetic cu cursurile frecventate de studenți care nu sunt repetate.

// const uniqueSortedCourses = students
//   .flatMap(student => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .sort((a, b) => a.localeCompare(b));

// console.log(uniqueSortedCourses); // ['biologie', 'informatică', 'limba engleză', 'matematică', 'fizică']

// Apelăm metoda flatMap() peste matricea inițială și creăm o matrice aplatizată a tuturor cursurilor.
// Aplicăm metoda filter() asupra rezultatul metodei flatMap() pentru a filtra elementele unice.
// Peste rezultatul funcției filter(), apelăm sort().
// Variabilei uniqueSortedCourses i se atribuie rezultatul metodei sort().
// Un lanț de metode poate avea orice lungime, dar, de obicei, nu mai mult de 2-3 operații. În primul rând,
// metodele de iterație sunt folosite pentru operații relativ simple,
//  pe o colecție. În al doilea rând, fiecare apel de metodă este o iterație suplimentară a matricei,
//  care poate afecta performanța dacă este vorba de un lanț cu mai multe metode.

// ## Example 1 - Map method

// Let the `getModels` function return an array of models (model field) of all
// cars.
// // export const cars = [
//   const cars = [
//   {
//     make: "Honda",
//     model: "CR-V",
//     type: "suv",
//     amount: 14,
//     price: 24045,
//     onSale: true,
//   },
//   {
//     make: "Honda",
//     model: "Accord",
//     type: "sedan",
//     amount: 2,
//     price: 22455,
//     onSale: true,
//   },
//   {
//     make: "Mazda",
//     model: "Mazda 6",
//     type: "sedan",
//     amount: 8,
//     price: 24195,
//     onSale: false,
//   },
//   {
//     make: "Mazda",
//     model: "CX-9",
//     type: "suv",
//     amount: 7,
//     price: 31520,
//     onSale: true,
//   },
//   {
//     make: "Toyota",
//     model: "4Runner",
//     type: "suv",
//     amount: 19,
//     price: 34210,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Sequoia",
//     type: "suv",
//     amount: 16,
//     price: 45560,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Tacoma",
//     type: "truck",
//     amount: 4,
//     price: 24320,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "F-150",
//     type: "truck",
//     amount: 11,
//     price: 27110,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Fusion",
//     type: "sedan",
//     amount: 13,
//     price: 22120,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Explorer",
//     type: "suv",
//     amount: 6,
//     price: 31660,
//     onSale: false,
//   },
// ];

// import { cars } from "../../lectia-opt/practica/carsData.js";
// const getModels = (carlist) => {

//   if (carlist.length === 0){
//     return console.error('There is no cars in the list')
//   }
// // return carlist.map( (item) => {(item.model)}

// // )

//   return carlist.map( (item)  => {
//     return item.model;
//   });

// };

// console.table(getModels(cars));

// ## Example 2 - Map method

// Let the `makeCarsWithDiscount` function return a new array of objects with a changed
// value of the `price` property depending on the discount passed.

// const makeCarsWithDiscount = (cars, discount) => {

// // const updateCarList = cars.map( car => {
// //   const priceWithDiscount = car.price - car.price * discount;

// //   return {
// //     ...car,
// //     price: priceWithDiscount
// //   }
// // });

//   return cars.map( car => {
//     const priceWithDiscount = car.price - car.price * discount;

//     return {
//       ...car,
//       price: priceWithDiscount
//     }
//   });

//   // return updateCarList;
// };

// // console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));

// ## Example 3 -Filter method

// Let the `filterByPrice` function return an array of cars whose price is less
// than the value of the `threshold` parameter.

// const filterByPrice = (cars, threshold) => {
//   // return cars.filter((car) => car.price < threshold)
//    return cars.filter((car) => {
//     return car.price < threshold
//    })
// };

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

// ## Example 4 - Filter method

// Let the `getCarsWithDiscount` function return an array of cars whose
// onSale property is true.

// const getCarsWithDiscount = (cars) => {
//   return cars.filter( car =>  car.onSale)
// };

// console.table(getCarsWithDiscount(cars));

// ## Example 5 - Filter method

// Let the `getCarsWithType` function return an array of cars whose type
// coincide with the value of the `type` parameter.

// const getCarsWithType = (cars, type) => {
//   return cars.filter( car => car.type === type)
// };

// console.table(getCarsWithType(cars, "suv"));
// console.table(getCarsWithType(cars, "sedan"));

// ## Example 6 - The find method

// const getCarByModel = (cars, model) => {
//   return cars.find( car => car.model === model)
// };

// console.log(getCarByModel(cars, "F-150"));
// console.log(getCarByModel(cars, "CX-9"));

// ## Example 7 - Sort method

// Let the `sortByAscendingAmount` function return a new array of cars
// sorted in ascending order by the value of the `amount` property.

// const sortByAscendingAmount = (cars) => {
//   return cars.sort((a, b) => a.amount - b.amount);
// };

// console.table(sortByAscendingAmount(cars));

// LOVE IT!

// const newArr = ["Rima", "Ralda", "Rana", "Simon", "Majd"];
// const newArr1 = [1, 200, 30, 4, 500];
// console.log(newArr1.sort((a, b) => b - a));
// console.log(newArr1.sort((a, b) => a - b));
// console.log(newArr1.sort());

// ## Example 8 - Sort method

// Let the `sortByDescendingPrice` function return a new array of cars
// sorted in descending order by the value of the `price` property.

// const sortByDescendingPrice = (cars) => {

//     // const newCarList = [...cars];
//     // const newCarList = cars.map(car => car);

//   return cars.sort((a, b) => b.price - a.price);
// };

// console.table(sortByDescendingPrice(cars));
// console.log(cars);

// ## Example 9 - Sort method

// Let the `sortByModel` function return a new array of cars sorted
// by model name in alphabetical and reverse alphabetical order, depending on
// the value of the `order` parameter.

// const sortByModel = (cars, order) => {
//  const ascSort = (a, b) => {
//   if (a.model < b.model) {
//     return -1;
//   }
//   if(a.model > b.model) {
//     return 1
//   }
//   return 0;
//  }

//  const descSort = (a, b) => {
//   if (a.model < b.model) {
//     return -1;
//   }
//   if(b.model < a.model) {
//     return 1
//   }
//   return 0;
//  }
//  return cars.sort((a, b) => {
//   if(order === 'asc'){
//   return ascSort(a, b);
// } else {
//   return descSort(a, b);
// }
//  })

//   // if (order === 'asc') {
//   //   return [...cars].sort( (a, b) => a.model -b.model);
//   // } else if (order === 'desc'){
//   //   return [...cars].sort( (a, b) => a.model - b.model);
//   // }
// }
// ;

// console.table(sortByModel(cars, "asc"));
// console.table(sortByModel(cars, "desc"));

// ## Example 10 - Reduce method

// Let the `getTotalAmount` function return the total number of cars (the value
// of the `amount` properties).

// const getTotalAmount = (cars) => {
//   return cars.reduce( (total, car) => {
//     // debugger
//     return total+ car.amount;
//   }, 0);

// };

// console.log(getTotalAmount(cars));

// ## Example 11 - Method chains

// Let the `getAvailableCarNames` function return an array of car models, but
// only those that are currently for sale.

// const getModelsOnSale = (cars) => {
//   return cars
//       .filter( car => car.onSale)
//       .map(car => {
//         return {
//             name: `${car.make} - ${car.model}`
//       }
//   })

// };

// console.table(getModelsOnSale(cars));

// ## Example 12 - Method chains

// Let the `getSortedCarsOnSale` function return an array of cars for sale
// (onSale property), sorted by price ascending.

// const getSortedCarsOnSale = (cars) => {
//     const tempCars = [...cars];
//     return tempCars
//     .filter(car => car.onSale)
//     .map(car => {
//       return {
//         name: `${car.make} - ${car.model}`,
//         price: car.price
//       }
//     })
//     .sort((a, b) => a.price - b.price)
// };

// console.table(getSortedCarsOnSale(cars));

// function foo() {
//   console.log(this);
// }

// foo(); // window fără "use strict" și undefined cu "use strict"

// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const vasile = {
//   username: "Vasile",
// };
// const georgiana = {
//   username: "Georgiana",
// };

// // greetGuest.apply(mango, ["Bun venit"]); // Bunt venit, Vasile.
// greetGuest.apply(poly, ["Mă bucur să te revăd"]); // Mă bucur să te revăd, Georgiana.

// 'use strict'
// function foo() {
//     console.log(this);
//   }
//   foo();

//   function addFive(num){
//    return num + 5;
//   }
//   console.log(addFive(10));

//   const addFiveResult = addFive(20);

//   console.log(addFiveResult)
//   const addFiveCopy = addFive;
//   console.log(addFiveCopy(30))

//   const myObj = {
//     fullName: 'simon klhawam',
//     logName: function (){
//       console.log(this.fullName)
//     }
//   }

//   myObj.logName();

//   const newObjFunctionCopy = myObj.logName;
//   newObjFunctionCopy();

//   const newObj = {
//     fullName: 'Alex',
//     doTheCopy: myObj.logName
//   }

//   newObj.doTheCopy();
//   console.log(newObj.anyPropertyThatDoesntExistWillBeUndefined);
//   // nu scrieti nicio data denumiri de variabile asa lungi
//   // console.log(newObj.property?.anyPropertyThatDoesntExistWillBeUndefined);
//   // //eroare, null check operator

//   console.log(this);

// ## Example 1 - Jewelry workshop

// Write a `calcTotalPrice(stoneName)` method that takes the name of a stone,
// calculates and returns the total cost of stones with that name, price, and
// quantity from the `stones` property.

// const chopShop = {
//   stones: [
//     { name: "Emerald", price: 1300, quantity: 4 },
//     { name: "Diamond", price: 2700, quantity: 3 },
//     { name: "Sapphire", price: 1400, quantity: 7 },
//     { name: "Ruby", price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {
//     const stone = this.stones.find( (element) => element.name === stoneName);
//     if(!stone){
//       // console.log(`Nu avem piatra cu numele de ${stoneName}`);
//       // return;
//       return `Nu avem piatra cu numele de ${stoneName}`;
//     }
//     return stone.price * stone.quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice("Emerald")); // 5200
// console.log(chopShop.calcTotalPrice("Diamond")); // 8100
// console.log(chopShop.calcTotalPrice("Sapphire")); // 9800
// console.log(chopShop.calcTotalPrice("Ruby")); // 1600

// ## Example 2 - Phone book

// Make methods' refactoring of the `phonebook` object to make the code work.

// const phonebook = {
//   contacts: [],
//   add(contact) {
//     const newContact = {
//       list: "default",
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };
//     this.contacts.push(newContact);
//   },
//   generateId() {
//     return "_" + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
//   get() {
//     return this.contacts;
//   }
// };

// phonebook.add({
//   name: "Mango",
//   email: "mango@mail.com",
//   list: "friends",
// });

// phonebook.add({
//   name: "Poly",
//   email: "poly@hotmail.com",
// });

// console.log(phonebook.get());

// ## Example 3 -Calculator

// Create a `calculator` object with three methods:

// - `read(a, b)`- takes two values and stores them as object properties.
// - `add()` - returns the sum of the stored values.
// - `mult()` - multiplies the stored values and returns the result.

// const calculator = {
//   firstNumber: 0,
//   secondNumber: 0,
//   read: function(firstValue , seconValue) {
//     this.firstNumber = firstValue;
//     this.secondNumber =  seconValue;
//   },
//   log() {
//     console.log(`Valorile pentru cele doua numere sun: ${this.firstNumber} ${this.secondNumber}`);
//   },
//   add: function() {
//     return `Suma celor doua numere este: ${this.firstNumber + this.secondNumber}`
//   },
//   mult(){
//     return `Produsul celor doua numere este: ${this.firstNumber * this.secondNumber}`;
//   }

// };

// calculator.read(5, 3);
// calculator.log();
// console.log(calculator.add());
// console.log(calculator.mult());

// class User {
//   constructor(name, email, phone, address, gender) {
//     this.name = name;
//     this.email = email;
//     this.phone = phone;
//     this.address = address;
//     this.gender = gender;
//   }
// }
// const andrei = new User('andrei', 'andrei@mail.com', '0777877887', 'bucuresti', 'barbat');
// console.table(andrei);

// const ioana = new User('ioana', 'ioana@mail.com');
// console.log(ioana);

// const simon = new User('Simon', 'simon@mail.com', '074745458', 'bucuresti', 'barbat');
// console.table(simon);

// class User {
//   constructor ({ name, email}) {
//     this.name = name;
//     this.email = email;
//   }
// }
// const mango = new User ( {
//   name: 'mango',
//   email: 'mango@mail.com',
// });
// console.log(mango)

// const poly = new User ( {
//   name: 'poly',
//   email: 'poly@mail.com',
// });
// console.log(poly);

// class User{
//   constructor({ name, email } ){
//     this.name = name
//     this.email = email
//   }

//   getEmail() {
//     return this.email;
//   }

//   changeEmail(newEmail){
//     this.email = newEmail;
//   }

// }

// class User{
//   name;
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }
//   getEmail(){
//     return this.#email;
//   }
//   changeEmail(newEmail){
//     this.#email = newEmail;
//   }
// }
// const andrei = new User( {
// name: 'Andrei',
// email: 'andrei@email.com',
// });
// andrei.changeEmail('andrei@superemail.com');
// console.log(andrei.getEmail());
// // // console.log(andrei.#email); // Va apărea o eroar

// class User{
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   get email(){
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User ({ name: 'Mango', email: 'mango@email.com' });
// console.log(mango.email);

// mango.email = 'mango@supermail.com';
// console.log(mango.email);

// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }
// }

// const mango = new User({ email: "mango@mail.com" });

// console.log(User.isEmailTaken("poly@mail.com"));
// console.log(User.isEmailTaken("mango@mail.com"));

// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   // ContentEditor class body
// }

// const editor = new ContentEditor("mango@mail.com");
// console.log(editor); // { email: "mango@mail.com" }
// console.log(editor.email); // "mango@mail.com"

// # Module 5 - Lesson 10 - Prototypes and classes

// ## Example 1 - Blogger

// Write a `Blogger` class to create a blogger object with the following properties:

// - `email` - mail, line
// - `age` - age, number
// - `numberOfPosts` - number of posts, number
// - `topics` - an array of topics the blogger specializes in

// The class expects one parameter - object of settings with the same name properties.

// Add a `getInfo()` method that returns string:
// `User ${mail} is ${age} years old and has ${number of posts} posts`.

// Add the `updatePostCount(value)` method, which in the `value` parameter takes
// number of posts to add to the user.

// class Blogger {
//   constructor({email, age, numberOfPosts, topics}) {
//   this.age = age;
//   this.email = email;
//   this.numberOfPosts = numberOfPosts;
//   this.topics = topics;
//   }

//   getInfo(){
//     return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts`;
//   }
//   updatePostCount( value ) {
// this.numberOfPosts += value;
//   }
// }

// const mango = new Blogger({
//   name: "mango@mail.com",
//   age: 24,
//   numberOfPosts: 20,
//   topics: ["tech", "cooking"],
// });
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts
// console.log(mango)

// const poly = new Blogger({
//   name: "poly@mail.com",
//   age: 19,
//   numberOfPosts: 17,
//   topics: ["sports", "gaming", "health"],
// });
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts

// ## Example 2 - Storagе

// Write a `Storage` class that creates objects for managing a warehouse of goods.
// When called, it will receive one argument - the initial array of goods, and write
// it to the `items` property.

// Add class methods:

// - `getItems()` - returns an array of products.
// - `addItem(item)` - receives a new product and adds it to the current ones.
// - `removeItem(item)` - receives the product and, if it exists, removes it from the current.

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems(){
//     return this.items;
//   }
//   addItem(item){
//     this.items.push(item);
//   }
//   removeItem(item){
//     const index = items.indexOf(item);
//     if (index === -1) {
//         console.log('Elemenul nu exista in stoc');
//         return;
//     }
//       items.splice(index, 1);
//   }
// }

// const storage = new Storage(["🍎", "🍋", "🍇", "🍑"]);

// const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem("🍌");
// console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem("🍋");
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]

// ## Example 3 - User

// Write a class `User` which creates an object with properties `login` and `email`.
// Declare private properties `#login` and `#email`, which can be accessed via
// getter and setter of `login` and `email`.

// class User{
//   #login;
//   #email;
//   constructor({login, email}){
//     this.#login = login;
//     this.#email = email;
//   }
//   get(prop){
//     if(prop === 'login') {
//       return this.#login;
//     }
//     if (prop === 'email'){
//       return this.#email;
//     }
//   }
//   setLogin(newLogin) {
//     this.#login = newLogin;
//   }
// }

// const mango = new User({
//   login: "Mango",
//   email: "mango@dog.woof",
// });

// console.log(mango.get('login'));
// mango.setLogin('Simon');
// console.log(mango.get('login'));
// // console.log(mango.get('email'));
// // mango.login = 'test';
// // // console.log(mango.login);

// ## Example 4 - Notes

// Write a `Notes` class that manages the collection of notes in the `items` property.
// A note is an object with `text` and `priority` properties. Add a static
// property `Priority` to the class, which will store the object with priorities.

// ```js
// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }
// ```

// Add methods`addNote(note)`, `removeNote(text)` and
// // `updatePriority(text, newPriority)`.
// class Notes {
//   static Priority = {
//     LOW: 'low',
//     NORMAL: 'normal',
//     HIGH: 'hight'
//   }
//   constructor(notes) {
//     this.items = notes;
//   }

//   addNote(note) {
//     this.items.push(note)
//   }
//   removeNote(text) {
//     const index = this.items.findIndex( (el) => el.text === text);
//       if(index === -1){
//         console.log('Nu exista nota cu acest text');
//         return;
//       }
//       this.items.splice(index, 1);
//   }
//   updateNote(text, newPriority){
//     const index = this.items.findIndex ( (el) => el.text === text);
//     if (index === -1){
//         console.log('Nu exista nota cu acest text');
//         return;
//     }
//     this.items[index].priority = newPriority;
//   }

// }

// const myNotes = new Notes([]);

// myNotes.addNote({ text: "My first note", priority: Notes.Priority.LOW });
// console.table(myNotes.items);

// myNotes.addNote({
//   text: "My second note",
//   priority: Notes.Priority.NORMAL,
// });
// console.table(myNotes.items);

// myNotes.removeNote("My first note");
// console.table(myNotes.items);

// myNotes.updateNote("My second note", Notes.Priority.HIGH);
// console.table(myNotes.items);

// myNotes.updateNote("My first note", Notes.Priority.HIGH);
// console.table(myNotes.items);
// // // ## Example 5 - Toggle

// Write a `Toggle` class that takes a settings object `{isOpen: boolean}` and
// declares one property `on` - state on/off (true/false). By default
// the value of the `on` property should be `false`.

// class Toggle {
//   constructor(arg){
//     if(arg && arg.isOpen){
//       this.on = arg.isOpen;
//       return;
//     }
//     // in cazul in care nu trimit nici un argument se seteaza valoarea default
//     this.on = false;
//   }
//   toggle() {
//     this.on = !this.on;
//   }
// }

// const firstToggle = new Toggle({ isOpen: true });
// console.group("firstToggle");
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd("firstToggle");

// const secondToggle = new Toggle();
// console.group("secondToggle");
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd("secondToggle");

//  Primitive type

/**
 * String
 */

// let singleQuoteString = 'Single quote string';
// let doubleQuoteString = "Double quote string";
// let backTickString = `This is not a ${singleQuoteString}`;

// console.log(singleQuoteString.toUpperCase());
// console.log(backTickString.toUpperCase());

/**
 * Number
 */

// singleQuoteString = 5;
// let zipCode = 500500; // Ar trebui sa fie string

/**
 * Boolean
 */

// let isTrue = true;
// isTrue = !isTrue;

/**
 * Undefined
 */

// let isUndefined;
// console.log(isUndefined);

/**
 * Null
 */

// let isNull = null;
// console.log(isNull);
// console.log(typeof isNull);

// Reference type value => object, array, function

/**
 * Objects
 */

// const myObject = {
//     name: 'Sergiu',
//     address: {
//         city: 'Brasov',
//         zip: 500500
//     },
//     logName: function() {
//         console.log(this.name);
//     }
// }

// const newObject = myObject; // copiem referinta
// const newObject = {...myObject}; // copiem doar proprietatile

// newObject.name = 'Andrei';
// console.log(myObject);
// console.log(newObject);

// const newDestructuredObj = {...myObject};
// newDestructuredObj.name = 'Alex;'
// newDestructuredObj.address.zip = 100;
// console.log(myObject);
// console.log(newDestructuredObj);

// let stringifiedObject = JSON.stringify(newDestructuredObj);
// stringifiedObject += 5;
// console.log(stringifiedObject);

// myObject.logName();

// const objNameDuplicate = myObject.name;
// const logNameDuplicate = myObject.logName;
// // logNameDuplicate();

// const newName = {
//     name: 'Andreea',
//     logAnotherName: myObject.logName
// }
// // newName.logAnotherName();

/**
 * Array
 */

// const myList = [1, 2, 3, 4, 2];
// // console.log(typeof myList); // logheaza object

// // const newIdenticalList = myList; // ne copiem referinta
// const newIdenticalList = [...myList]; // ne copiem proprietatile intr-o referinta noua
// newIdenticalList.push(5);
// // console.log(myList);
// // console.log(newIdenticalList);

// const newDoubledCopyFail = myList.forEach((listItem) => { // forEach nu returneaza nimic
//    return listItem * 2; // returnul nu va functiona
// });

// const newDoubledCopy = myList.map((listItem) => {
//     return listItem * 2;
//  });

// console.log('NewArray:', newDoubledCopy);

// // Metoda find returneaza PRIMUL ELEMENT care indeplineste conditia
// const valueTwo = myList.find( element => element === 2); // return este implicit
// // console.log(valueTwo);

// // Metoda filter returneaza UN ARRAY NOU cu TOATE elementele care indeplinesc conditia

// const allValuesTwo = myList.filter(element => element === 2);
// // console.log(allValuesTwo);

// const students = [
//     { name: "Vasile", courses: ["matematică", "fizică"] },
//     { name: "Ion", courses: ["informatică", "matematică"] },
//     { name: "Andreea", courses: ["fizică", "biologie"] },
//   ];
//   const allCourses = students.flatMap(student => student.courses);
// //   console.log(allCourses);
//   const uniqueCourses = allCourses.filter(
//     (course, index, array) => {
//        return array.indexOf(course) === index;
//     }
//   );

//   console.log(uniqueCourses);

// const resultValue = myList.reduce((acc, curr) => {
//     return acc * curr;
// });
// // console.log(resultValue)

// /**
//  * Functions
//  */

// const addFive = (number) => {
//     return number + 5;
// }

// const newFunc = addFive; // copiem referinta functiei
// // console.log(newFunc(11));
// const tenResult = addFive(5); // ne folosim de valoarea returnata
// // console.log(tenResult);

// const addFiveTwice = ((number, addFiveCallback) => {
//     return addFiveCallback(number) + 5;
// });
// // addFiveTwice(20, addFive); // nu fac ceva cu valoarea, nu o sa se intample nimic
// const addFiveTwiceResult = addFiveTwice(30, addFive);
// console.log(addFiveTwiceResult);
// console.log(addFiveTwice(20, addFive));
// console.log(addFiveTwice(10, (number) => number + 3));

/**
 * Scope
 */

// const myConst = 1;
// let myLet = 2;

// if (true) {
//     let myConst = 3;
//     const myLet = 4;
//     const myLocalConst = 5;
//     let myLocalLet = 6;
//     // console.log(myConst, '--If/local scope');
//     // console.log(myLet, '--If/local scope');
//     // console.log(myLocalConst, '--If/local scope');
//     // console.log(myLocalLet, '--If/local scope');
// }

// console.log(myConst, '--Global scope');
// console.log(myLet, '--Global scope');
// console.log(myLocalConst, '--Global scope');
// console.log(myLocalLet, '--Global scope');

// const addFive = (myConst) => {
//     // console.log(myConst);
//     return myConst + 5;
//     // console.log(myConst); // acest cod nu va fi executat deoarece se afla dupa return
// }

// console.log(addFive(10));

// const addSix = (number) => {
//     const result = number + 6; // nu returnam nimic, vom vedea undefined
// }
// console.log(addSix(10));

// const myArr = [1, 2, 3, 4];

// let i = 100;
// console.log(i);
// for (let i = 0; i < myArr.length; i++) {
//     // console.log(`elementul ${myArr[i]} se afla la pozitia ${i}`)
// }
// console.log(i);

// const indexFirstElem = myArr.indexOf(1);
// console.log(`Elementul 1 se afla la pozitia ${indexFirstElem + 1}`);

/**
 * Ternary operator
 * Syntax: conditie ? valoare in caz de adevar : valoare in caz de fals
 */
// let copyOfI = i > 50 ? i : 30;

// console.log(copyOfI);

// if (i > 50) {
//     copyOfI = i;
// } else {
//     copyOfI = 30;
// }
// console.log(copyOfI);

// console.log(`Valoare pe care o are i este : ${ i > 50 ? i : 30}`);
// console.log(`Valoare pe care o are i este : ${ i > 50 ?? i }`);

// const numbersArray = [1, 2, 3, 4];
// numbersArray.push(5);
// // numbersArray = [...numbersArray, 5]; // nu va functiona, va da eroare pentru ca este const
// // console.log(numbersArray);

// const testFunction = () => {
// console.log('Test');
// }

// testFunction();

// Object literal creation
// let puppy = {
//     name: "Rex",
//     age: 5,
//     name: "Azorel",
//     address: {
//         city: "London",
//         levelTwo: {
//             firstProp: 1,
//             levelThree: 3,
//             street: "Long Street",
//         },
//     },
// };

// puppy.age = 7;
// puppy.breed = "Ciobanesc";
// // console.log(puppy.breed);
// // console.log(puppy);

// puppy = {
//     ...puppy,
//     breed: "Labrador",
// };

// // const newPuppy = puppy;
// // console.table(puppy)
// const anotherPuppy = { ...puppy, ...puppy.address };

// console.table(puppy);
// console.table(anotherPuppy);
// console.log(puppy.address.levelTwo.street);

// const { name, address, ...rest } = puppy;
// console.table(name);
// console.table(address);
// console.log(rest);

// const testArr = [1, 5, 3, 4];

// const [first, second, third, ...celelalte] = testArr;
// console.log(first);
// console.log(second);
// // console.log(celelalte);

// function testExtract() {
//     let test = 'Test';
//     function updateTest() {
//         test = 'Updated';
//     }

//     return [test, updateTest];
// }

// const [testValueDestructured, updateTestDestructured] = testExtract();

// const listWithId = document.querySelector('#menu');
// listWithId.style.textTransform = 'uppercase';
// listWithId.style.fontSize = '24px';
// console.log(listWithId);

// const listWithClass = document.querySelector('.menu');
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = 'tomato';
// console.log(firstMenuItem);

// const image = document.querySelector(".image");
// console.log(image.src); // https://picsum.photos/id/9/320/240
// console.log(image.alt); // A laptop

// image.src = "https://picsum.photos/id/13/640/480";
// image.alt = "River bank";

// const textEl = document.querySelector(".article-text");
// console.log(textEl.textContent); // text inside p.article-text

// const titleEl = document.querySelector(".article-title");
// titleEl.textContent = 'Welcome to Bahamas!';

// elem.classList.add()
// elem.classList.toggle()

// const link = document.querySelector(".link");
// console.log(link.classList);

// const hasActiveClass = link.classList.contains("is-active");
// console.log(`hasActiveClass - ${hasActiveClass}`);

// link.classList.add("special");
// console.log(link.classList);

// link.classList.remove("is-active");
// console.log(link.classList);

// link.classList.toggle("is-active");
// console.log(link.classList);

// link.classList.replace("special", "regular");
// // console.log(link.classList);

// const button = document.querySelector(".btn");

// button.style.backgroundColor = "teal";
// button.style.fontSize = "24px";
// button.style.textAlign = "center";

// console.log(button.style); // inline styles object

// const heading = document.createElement("h1");
// console.log(heading); // <h1></h1>

// heading.textContent = "This is a heading";
// console.log(heading); // <h1>This is a heading</h1>

// const image = document.createElement("img");
// image.src = "https://placeimg.com/640/480/nature";
// image.alt = "Nature";
// console.log(image); // <img src="https://placeimg.com/640/480/nature" alt="Nature" />

// # Task 1

// const technologies = ["Javascript", "Python", "CSS", "HTML"];

// 1. Get container element
// 2. Create a cycle for sorting array elements
// 3. Create a li tag
// 4. Write the text from the array inside the list items
// 5. Place li inside ul
// 6. Place ul tag with items on the page
// */

// const technologies = ["Javascript", "Python", "CSS", "HTML"];

// const containerEl = document.querySelector('#container');
// console.dir(containerEl)

//-------------------------------------------------------------------

// Change code below this line

// const galleryList = document.querySelector(".gallery");

// galleryItems.forEach((item) => {
//     const galleryItem = document.createElement("li");
//     galleryItem.classList.add("gallery__item");

//     const galleryLink = document.createElement("a");
//     galleryLink.classList.add("gallery__link");
//     galleryLink.href = item.original;

//     const galleryImage = document.createElement("img");
//     galleryImage.classList.add("gallery__image");
//     galleryImage.src = item.preview;
//     galleryImage.alt = item.description;

//     galleryLink.appendChild(galleryImage);
//     galleryItem.appendChild(galleryLink);

//     galleryList.appendChild(galleryItem);
// });

// const lightbox = new SimpleLightbox(".gallery a", {
//     captionsData: "alt",
//     captionDelay: 250,
// });

// console.log(galleryItems);
// console.log(galleryItems);
//-------------------------------------------------------------------
