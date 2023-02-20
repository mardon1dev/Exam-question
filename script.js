// 1-dars
// const newArr = []; //Bo'sh array

// for (let i = 0; i < 3; i++) { 
//     const num = prompt("Biror narsa kiriting");
//     if (!num || isNaN(num)) {
//         if (isNaN((num))) {
//             alert("Harf kiritmang");
//         }else if(!num){
//             alert("Bo'sh qiymat kiritmang");
//         } // Bu qismda promptdan olingan ma'lumot bo'sh string yoki srting ekanligini tekshiradi 
//     } else {
//         newArr.push(Number(num)); 
//     } // Son bo'lsa newArr ga element qilib qo'shib beradi
// }
// const calcSum = function(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         const num = numbers[i];
//         sum += num;
//     } // Yig'indi
//     return sum;
// }
// console.log(calcSum(newArr)); // Natija

// 2-task
// let myArray = ["Jazz", "Blues"]; // Boshlang'ich array
// console.log(myArray);
// myArray.push("Rock-n-roll"); // R0ck-n-roll ni qo'shdik
// console.log(myArray);
// myArray[1] = ("Classics"); // Bluesni o'rniga Classikni qo'shdik
// console.log(myArray);
// myArray.shift(); // Jazzni olib tashlandi
// console.log(myArray);
// myArray.unshift("Rap", "Reggae"); // Rap va Reggae ni qo'shdik
// console.log(myArray);


// 3-task
// let salaries = {  
//     "Bob": 1700,
//     "John": 6000,
//     "Evelina": 1200
// }  // Salariess deb nomlangan object ochilgan va uning property va valuelari berilgan

// const sumSalaries = function(salaries) {
//     let sum = 0;
//     for (const salary in salaries) {
//         let salary1 = salaries[salary];
//         sum += salary1
//     }
//     return sum;
// } // Salariesni yig'indisi funksiyasi

// console.log(sumSalaries(salaries)); // Natija



// 4-dars
// const numbers = [1,2,3,4,5,6,7,8,9]; // Boshlangich array
// const evenNum = []; // Juft sonlar arrayi
// const oddNum = []; // Toq sonlar arrayi

// for (let i = 0; i < numbers.length; i++) { // for loop ishlatilgan
//     const element = numbers[i]; //numbers arrayining har bir elementini olib elementga tenglasdim. Juft yoki toqligini tekshirish uchun
//     if(element % 2 == 0){ // Juft son bo'lsa
//         evenNum.push(element); // evenNum ga element qilib qo'shib beradi.
//     } else{ // yoki ya'ni toq bo'lsa soninimiz
//         oddNum.push(element);  // oddNum ga qo'shadi
//     }
// }
// const calcSum = function (numbers) { // Arrayning ichidagi sonlar yi'gindisi
//     let sum = 0; // Boshlangich summa 0 deb oldim 
//     for (let i = 0; i < numbers.length; i++) { //for loop ishlatilgan
//         const num = numbers[i];  // har bir elementni num ga tenglangan
//         sum += num; // summani yig'adi
//     }
//     return sum; // yakuniy natija
// }
// console.log(calcSum(evenNum)); // Juft sonlar yig'indisi
// console.log(calcSum(oddNum)); // Toq sonlar yig'indisi


// 5-task
// const insertedArray = [-3,-2,1,5]; // Kiritilgan array;
// const max = Math.max(...insertedArray); // Arrayning eng katta sonni topadi;
// const min = Math.min(...insertedArray); // Arrayning eng kichik sonni topadi

// const leftNumbers = []; // Tushib qoldirilgan sonlar shuyerga tushadi;

// for (let i = min; i <max; i++) {
//     if (insertedArray.indexOf(i) == -1) // -1 means "no match found".The reason it returns -1 instead of "false" 
//                                         // is that a needle at the beginning of the string would be at position 0, 
//                                         // which is equivalent to false in Javascript. So returning -1 ensures that 
//                                         // you know there is not actually a match.
//     {
//       leftNumbers.push(i); // leftNumbersga number qo'shib beradi
//     }
//   }
//   console.log(leftNumbers); // Natija

// Ustoz Stackoverflowda shuning o'zi bor ekan lekin uni o'zini ko'chirib chiqmadim 
// ya'ni birinchi max va min topishni topdim keyin missing sonlarni topishni ko'rib chiqdim 
// keyin yozib bo'ganimdan keyin shuning o'zi chiqib qoldi Stackoverflowda.
// Lekin uni ko'chirib chiqmadim.


