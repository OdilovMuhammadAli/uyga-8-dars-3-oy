// // 1. Har bir so‘zni katta harf bilan yozish
//   // 1. Bo‘sh joylardan bo‘lib so‘zlarga ajratamiz
//   // 2. Har bir so‘zni birinchi harfini katta qilib, qolganini kichik yozamiz
//   // 3. So‘zlarni yana bo‘sh joy bilan birlashtiramiz.

// function capitalizeWords(str){
//   return str
//   .split(" ")
//    .map(soz => soz[0].toUpperCase()+ soz.slice(1).toLowerCase())
//   .join(" ")
// }
// console.log(capitalizeWords("salom dunyo"));


// 2. Massivdagi har bir ismni katta harfga o‘tkazing.
//  1. map() yordamida har bir ismdan yangi massiv yaratamiz.
//   2. Har bir ismni toUpperCase() bilan yozamiz.

// function toUpperNames(names) {
//   return names.map(function(name) {
//     return name.toUpperCase();
//   });
// }
// console.log(toUpperNames(["ali", "vali", "hasan"])); // ["ALI", "VALI", "HASAN"]

// 3. Massivda nechta musbat son borligini toping
// 1. filter() yordamida musbat sonlargina ajratib oling
// 2. filter() natijasining uzunligini qaytaring

// function countPositive(numbers) {

// let 
//   return numbers.filter(num => num > 0).length;
// }
// console.log(countPositive([1, -3, 4, 0, 6])); // 3

// 4. Stringdagi bo‘sh joylarni olib tashlang
//  1. trim() yordamida bosh va oxiridagi bo‘sh joylarni oling
//  2. replaceAll() bilan oradagi bo‘sh joylarni ham olib tashlang

// function removeSpaces(str) {
//   return str.trim().replaceAll(" ","")
// }
// console.log(removeSpaces("  salom   dunyo  ")); // "salomdunyo"

// 5. Berilgan sonlar orasidan biror juft son bor-yo‘qligini tekshiring
// 1. some() yordamida bironta son juft ekanligini tekshiring.

// function hasEvenNumber(arr) {
//  let isCouple = arr.some((num) => {
//   return num % 2 == 0;
// })
// return isCouple
// }
// console.log(hasEvenNumber([1, 3, 5, 8])); // true

// 6. Massivdagi 0 qiymatli elementlarni olib tashlang
// 1. filter() yordamida faqat 0 ga teng bo‘lmagan qiymatlarni oling.

// function removeZeros(arr) {
//   let notZero = arr.filter((num) => {
//     return num != 0;
//   })
//   return notZero
// }
// console.log(removeZeros([0, 1, 2, 0, 3])); // [1, 2, 3]

// 7. Har bir so‘zni teskari qilib qaytaring
  // 1. split() bilan so‘zlarga ajrating
  // 2. map() orqali har bir so‘zni teskari qilib chiqing
  // 3. So‘zlarni yana birlashtiring.

// function reverseWords(str) {
//  let reverseWord = s
// }
// console.log(reverseWords("salom dunyo")); // "molas oynud"

// 8. Faqat 3 harfli so‘zlarni qoldiring
// 1. filter() yordamida uzunligi 3 ga teng so‘zlarni ajrating.

// function threeLetterWords(words) {
//   let lengthWords = words.filter((words) => {
//     return words.length === 3; 
//   }) 
//   return lengthWords
// }
// console.log(threeLetterWords(["sal", "olma", "kor", "bor"])); // ["sal", "ko‘r", "bor"]

// 9. Massivdagi sonlarni 2 ga ko‘paytiring
  // 1. map() yordamida har bir elementni 2 ga ko‘paytiring.

// function doubleNumbers(numbers) {
//   let doubleNumber = numbers.map((num) => {
//   return num *2;

//   })
//   return doubleNumber
// }
// console.log(doubleNumbers([1, 2, 3])); // [2, 4, 6]

// 10. Matndagi har bir harfni alohida massivga oling
//  // 1. split('') orqali harflarga bo‘ling
// function splitChars(str) {
// return str.split("")
// }
// console.log(splitChars("hello")); // ['h','e','l','l','o']

// 11. Massivdagi butun sonlarni saqlang
// 1. filter() yordamida Number.isInteger bilan tekshiring
// function onlyIntegers(arr) {
//  return arr.filter(Number.isInteger)

// }
// console.log(onlyIntegers([1.5, 2, 3.1, 4])); // [2, 4]

// 12. Massivdagi har bir elementga uning indexini qo‘shing
// 1. map() yordamida qiymatga uning indeksini qo‘shing

// function addIndex(arr) {
//  let calculate = arr.map((num,index,array)=> {
//   return num + index;
//  })
//  return calculate
// }
// console.log(addIndex([10, 20, 30])); // [10, 21, 32]

// // 13. Stringda nechta 'a' harfi borligini sanang
//   // 1. toLowerCase() qiling
//   // 2. split() bilan harflarga bo‘ling
//   // 3. filter() orqali faqat 'a' harflarini oling va uzunligini toping

// function countA(str) {
//   let arr = str.toLowerCase().split("")
//   let newArr = arr.filter((soz) => {
//     return soz == 'a'; 
//   })
//   return newArr.length;
// }
// console.log(countA("Ananas")); // 3

// // 14. Har bir so‘zdan faqat birinchi harfni oling
//   // 1. split() orqali so‘zlarga bo‘ling
//   // 2. map() orqali har bir so‘zdan faqat birinchi harfni oling
//   // 3. join('') bilan birlashtiring

// function getInitials(str) {
// let arr =str.split(" ")
// let newArr = arr.map((words) => {
// return words[0]
// })
// return newArr.join("")
// }
// console.log(getInitials("Hello World From JS")); // "HWFJ"

// 15. Ichma-ich massivlarni tekislashtiring
// 1. flat() metodidan foydalaning

// function flattenArray(arr) {
//   return arr.flat(1)
// }
// console.log(flattenArray([1, [2, 3], [4, 5]])); // [1,2,3,4,5]

// // 17. Stringdagi raqamlarni sonlarga aylantiring 
 // 1. split('') bilan harflarga bo‘ling
  // 2. filter() bilan faqat raqamlar ajrating
  // 3. map() bilan ularni Number ga aylantiring
// function extractNumbers(str) {
// let arr = str.split("")
// let filterr = arr.filter((num) => {
//   return !isNaN(num) && num != " ";
// })

// let mapp = filterr.map((num2)=>{
// return Number(num2)
// });
// return mapp;
// }
// console.log(extractNumbers("ab1c3d2")); // [1,3,2]

// // 18. Har bir so‘zni teskari qilib, oxirgi so‘zni katta harf bilan qaytaring
  // 1. split() orqali so‘zlarga bo‘ling
  // 2. map() orqali har birini teskari qiling
  // 3. oxirgi so‘zni toUpperCase() qiling
// function specialReverse(str) {
// let arr =str.toLowerCase().split(" ")
// arr = arr.map((words)=>{
//   return words.split("").reverse().join("")

// })
// arr[arr.length -1] = arr[arr.length -1].toUpperCase();
// return arr
// }
// console.log(specialReverse("salom dunyo js")); // ['molas', 'oynud', 'SJ']


// 20. Massivda barcha qiymatlar son ekanligini tekshiring
//  // 1. every() yordamida typeof qiymat 'number' ekanligini tekshiring
// function allNumbers(arr) {
//  let newArr =arr.every((num)=>{
//   return !isNaN(num)

//  })
//  return newArr
// }
// console.log(allNumbers([1,2, 3])); // true
