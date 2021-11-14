// const users = [
//     {
//         _id: "5cdce6ce338171bb473d2855",
//         index: 0,
//         isActive: false,
//         balance: 2397.64,
//         age: 39,
//         name: "Lucile Finley",
//         gender: "female",
//         company: "ZOXY",
//         email: "lucilefinley@zoxy.com",
//         phone: "+1 (842) 566-3328",
//         registered: "2015-07-12T09:39:03 -03:00"
//     },
//     {
//         _id: "5cdce6ce0aa8d071fa4f4cc5",
//         index: 1,
//         isActive: true,
//         balance: 2608.48,
//         age: 33,
//         name: "Woodward Grimes",
//         gender: "male",
//         company: "FORTEAN",
//         email: "woodwardgrimes@fortean.com",
//         phone: "+1 (960) 436-3138",
//         registered: "2014-09-08T03:24:39 -03:00"
//     },
//     {
//         _id: "5cdce6ce103de120d32d6fe4",
//         index: 2,
//         isActive: true,
//         balance: 1699.99,
//         age: 25,
//         name: "Robinson Coleman",
//         gender: "male",
//         company: "GENMOM",
//         email: "robinsoncoleman@genmom.com",
//         phone: "+1 (852) 543-3171",
//         registered: "2019-04-23T08:24:58 -03:00"
//     },
//     {
//         _id: "5cdce6cebada7a418d8ccb3d",
//         index: 3,
//         isActive: true,
//         balance: 2621.84,
//         age: 25,
//         name: "Austin Benton",
//         gender: "male",
//         company: "ZILIDIUM",
//         email: "austinbenton@zilidium.com",
//         phone: "+1 (977) 573-2627",
//         registered: "2016-08-02T10:08:24 -03:00"
//     },
//     {
//         _id: "5cdce6ced81fe99596d9cef5",
//         index: 4,
//         isActive: true,
//         balance: 1297.31,
//         age: 37,
//         name: "Casandra Stout",
//         gender: "female",
//         company: "ANACHO",
//         email: "casandrastout@anacho.com",
//         phone: "+1 (929) 465-3804",
//         registered: "2018-04-14T11:27:26 -03:00"
//     },
//     {
//         _id: "5cdce6ce6c3ae6c4d6f39e88",
//         index: 5,
//         isActive: false,
//         balance: 2165.49,
//         age: 20,
//         name: "Valencia Carrillo",
//         gender: "male",
//         company: "XEREX",
//         email: "valenciacarrillo@xerex.com",
//         phone: "+1 (977) 522-3378",
//         registered: "2014-02-14T11:45:27 -02:00"
//     }
// ];

// forEach
// filter
// map
// reduce
// some/every
// sort
// find
// const f = users.forEach(user =>  console.log(user));
// const userLess30 = users.filter(user => user.age < 30);
// const userName =  users.map((user) => ({name : user.name}));
// console.log(userName);
// const totalBalance = users.reduce((acc, user) => acc += user.balance, 0);
// const usersObj = users.reduce((acc, user) => {
//     acc[user._id] = user;
//     return acc;
// },{});
// const isMale = users.some(user => user.gender === 'male');
// const ownProperty =  users.every(user => user.hasOwnProperty('index'));
// const is18 = users.every(user => user.age > 18);
// const user = users.find(user => user.company === 'XEREX');
// const downUp = users.sort((a,b) => a.age - b.age);
// console.log(downUp);
// function calculateProfit(amount, persent, period) {
//     const realPersent = persent / 100;
//     let curAmount = amount;
//     for (let i = 0; i < period; i++) {
//         curAmount += curAmount * realPersent;
//     }
//     return Math.floor(curAmount - amount);
// }
//
// console.log(calculateProfit(1000, 5, 7), 407);
// console.log(calculateProfit(12500, 3, 12), 5322);
// function getYears(amount, percent, expectedLimit) {
//     // write code here
//     let res = amount;
//     let temp = amount;
//     let i = 0;
//     while (res <= expectedLimit){
//         temp =  Math.floor(res *(percent/100 +1));
//         if(temp <= expectedLimit){
//             res = temp;
//             i++;
//         }else{
//             break;
//         }
//     }
//     return  i;
// }
// console.log(getYears(1800, 11, 1998));
// function getGuestsCount(guestsInput){
//     // if(parseInt(guestsInput)) return parseInt(guestsInput);
//     // else if(parseInt(guestsInput) === Object.is(NaN,NaN)) return 'not a number';
//     if (typeof guestsInput != "string") return false;
//
//     if( !isNaN(guestsInput) || !isNaN(parseFloat(guestsInput))){
//         return Math.floor(parseFloat(guestsInput));
//     }else{
//         return 'not a number';
//     }
// }
// console.log(getGuestsCount('3 людини'));

// function isWerewolf(target) {
//   let message = target.split("").reverse().join("").trim();
//
//   if(target === message){
//     return true;
//   }else{
//     return false;
//   }
//
// }
// function makeStickers(countOfDetails, robotPart) {
//     let res = []
//     for(let i = 1; i <= countOfDetails; i++){
//       res.push(`${robotPart} detail #${i}`)
//     }
//   return res;
// }
//
// function getLocation(coordinates, commands) {
//     const arr =[...coordinates];
//     for(let i = 0; i < commands.length; i++){
//         switch(commands[i]){
//             case 'forward': arr[1]++; break;
//             case 'back': arr[1]--; break;
//             case 'right': arr[0]++; break;
//             case 'left': arr[0]--; break;
//         }
//     }
//     return arr;
// }
//
// function getPlan(currentProduction, months, percent) {
//     // write code here
//     let result = [];
//     let fixed_percentage = ((100 + percent)/100);
//     for(let i = 1; i <= months; i++){
//         result.push(currentProduction=Math.floor(currentProduction * fixed_percentage));
//     }
//     return result;
// }
//

// const robots = [{"core_version":4},{"core_version":7},{"core_version":18},{"core_version":3},{"core_version":15},{"core_version":8},{"core_version":5},{"core_version":6}]
//
// function getOutdated(robots, newVersion) {
//     let results = [];
//     for (let i = 0; i < robots.length; i++) {
//         if(robots[i].core_version < newVersion) {
//             results.push(i);
//         }
//     }
//     return results;
// }
// /* {a: 3, b: 1, c: 1}*/
// function countBoxes(boxes) {
//    return boxes.split('').reduce(function(acc, el) {
//         acc[el] = (acc[el] || 0) + 1;
//         return acc;
//     }, {});
// }
//
// const robot = {
//     version: 16,
//     name: 'Cleaner 3000',
//     coords: [345, 12],
// };
//
// /*[['version', 'number'], ['name', 'string'], ['coords', 'object']]*/
// function getRobotSchema(robot){
//   return Object.entries(robot).map(([key,value]) => [key, typeof value]);
// }

// function colorStones(stones) {
//    // write code here
//    let count = 0;
//    for (let i = 0; i < stones.length; i++) {
//       if (stones[i] === stones[i + 1]) {
//          count++;
//       }
//    }
//    return count;
// }

// function findSmallerDigits(arr) {
//    let result = [];
//    for (let i = 0; i < arr.length; i++) {
//       result[i] = 0;
//       for (let j = i+1; j < arr.length; j++) {
//          if (arr[i] > arr[j]) {
//             result[i]++;
//          }
//       }
//    }
//    return result;
// }
//
// function getProductId(str){
//    let first = str.split('-p-')[str.split('-p-').length-1];
//    let sec = first.split('-')[0];
//    return sec;
// }
// function splitString(str) {
//    let secStr = '_';
//    console.log(str.length % 2 );
//    if (str.length % 2 !== 0) {
//       return str.concat(secStr).split(/(?=(?:..)*$)/);
//    } else {
//      return str.split(/(?=(?:..)*$)/);
//    }
// }
// function getLeaders(numbers) {
//    // write your code here
//    const result = [];
//
//    for (let i = 0; i < numbers.length; i++) {
//       const newNumbers = numbers.slice(i + 1);
//       let sum;
//       if (newNumbers.length > 0) {
//          sum = newNumbers.reduce((acc, el) => acc + el);
//       } else {
//          sum = 0;
//       }
//       if (numbers[i] > sum) {
//          result.push(numbers[i]);
//       }
//    }
//    return result;
// }
// function getArrayProduct(numbers) {
//    let res = [];
//    for(let i=0; i < numbers.length;i++){
//       let n = 1;
//       for(let j=0; j < numbers.length; j++){
//          if(j !== i){
//             n *= numbers[j];
//          }
//       }
//       res[i] = n;
//    }
//    return res;
// }
// function getRowWeights(array) {
// //    let unpaired = array.filter((e,i) => !(i % 2));
// //    let paired = array.filter((e,i) => (i % 2));
// //
// // }
// // console.log(getRowWeights([8, 5, 9, 3]));

// function getRowWeights(array) {
//     let pair = 0;
//     let unPair = 0;
//     for(let i=0; i < array.length; i++ ){
//         if(i % 2 === 0){
//             pair = pair + array[i];
//         }else{
//             unPair = unPair + array[i];
//         }
//     }
//     let res = [];
//     res[1] = unPair;
//     res[0] = pair;
//     return res;
// }

// function getKiller(suspects, dead) {
//for (let name in suspectInfo) {
   // if (dead.every(deadPerson => suspectInfo[name].includes(deadPerson))) {
      //return name;
    //}
  //}
//return Object.keys(suspectInfo).find(x => dead.every(y => suspectInfo[x].includes(y)))
//     const keys =  Object.keys(suspects);
//     let killer = undefined;
//     keys.forEach((item)=> {
//         const deadLength = dead.length;
//         let count = 0;
//         suspects[item].forEach((man) => {
//             dead.forEach((deadMan) => {
//                 if(man === deadMan){
//                     count++;
//                 }
//             })
//             if(count === deadLength){
//                 killer = item;
//             }
//         })
//     })
//     return killer;
// }

// function whoIsOnline(friends) {
//    const statuses = friends.reduce((acc,friend) => {
//        if(typeof acc[friend.status] === "undefined"){
//            acc[friend.status] = [];
//        }
//        if(friend.lastActivity > 10 && typeof acc.away === "undefined"){
//            acc.away = [];
//        }
//        return acc;
//    },{})
//     Object.keys(statuses).forEach((status) => {
//         friends.forEach((friend) => {
//
//             if(friend.status === 'online' && friend.lastActivity <= 10 && statuses.online.indexOf(friend.username) === -1){
//                 statuses.online.push(friend.username);
//             }
//             if(friend.status === 'offline' && statuses.offline.indexOf(friend.username) === -1){
//                 statuses.offline.push(friend.username);
//             }
//             if(friend.lastActivity > 10 && statuses.away.indexOf(friend.username) === -1 && friend.status !== 'offline'){
//                 statuses.away.push(friend.username);
//             }
//         })
//     })
//     return statuses;
// }
// function addNumbers(object) {
//   const check = Object.values(object).every((val) => typeof val !== 'number');
//   if(check) return 0;
//   else {
//       return Object.values(object).filter((val) => typeof val === 'number').reduce((acc,val) => acc + val);
//   }
// }

// function countLettersInString(str) {
//     // return  str.split('').reduce((o, key) => Object.assign(o, {[key]: ''}), {});
//     let obj = {};
//     let arr = str.split('');
//     for(let i of arr){
//         if(obj.hasOwnProperty(i)){
//             obj[i]++
//         }else{
//             obj[i] = 1;
//         }
//     }
//     return obj;
// }
// function scrollingText(word) {
//     let empty = [];
//     let arr = word.split('');
//     for(let i=0; i < arr.length; i++){
//         let subStr1 = word.slice(i,);
//         let subStr2 = word.slice(0,i);
//         let str = subStr1 + subStr2;
//         empty[i] = str.toUpperCase();
//     }
//     return empty;
// }
// function checkNumber(number) {
//     let arr = [];
//     arr[0] = number > 0;
//     arr[1] = number % 2 === 0;
//     arr[2] = number % 10 === 0;
//     return arr;
// }

// function sumObjects() {
//     // write code here
//     let args = [...arguments];
//     let res = {};
//     for(let i=0; i < args.length; i++){
//         let obj = args[i];
//         let c = Object.entries(obj);
//         for(let j = 0; j < c.length; j++){
//            let k = c[j][0];
//            let v = c[j][1];
//            let b = res[k];
//            if(b === undefined){
//                res[k] = v;
//            }else{
//                res[k] = b + v;
//            }
//         }
//     }
//     return res;
// }
// function getArraysSum(arr1, arr2) {
//     let sum = 0;
//     for(let i =0; i < arr1.length; i++){
//         sum += arr1[i];
//         sum += arr2[i];
//     }
//     return sum;
// }
// function combineArrays(first, second) {
//     let sum = [];
//     for(let i = 0; i < first.length; i++){
//         sum[i] = first[i] + second[i];
//     }
//     return sum;
// }
// function isJumping(number) {
//     let arr = number.toString().split('');
//     console.log(arr);
//     for(let i=0; i < arr.length - 1; i++){
//         let a = Number(arr[i]);
//         let b = Number(arr[i+1]);
//         console.log(a);
//         if(Math.abs(a - b) !== 1 ){
//             return 'NOT JUMPING';
//         }
//     }
//     return 'JUMPING';
// }
// function isSpecialNumber(n) {
//     let arr = n.toString().split('');
//     for(let i = 0; i < arr.length; i++){
//         let a = Number(i);
//         if(arr[i] > 5){
//             return 'NOT!!';
//         }
//     }
//     return 'Special!!';
// }
// function isTidy(number) {
//     let arr = number.toString().split('');
//     for(let i = 0; i < arr.length - 1; i++){
//         let a = Number(arr[i]);
//         let b = Number(arr[i+1])
//         if(a <= b){
//             return false;
//         }
//     }
//     return true;
// }

// function getDuplicates(items) {
//     // write code here
//     let arr = [];
//     for(let i=0; i < items.length - 1 ; i++){
//         let a = items[i];
//         for(let j= i + 1; j < items.length; j++){
//             let b = items[j];
//             if(a === b && !arr.includes(a)){
//                 arr.push(a);
//             }
//         }
//     }
//     return arr;
// }
// function getDifferences(a, b) {
//     let unique1 = a.filter((o) => b.indexOf(o) === -1);
//     let unique2 = b.filter((o) => a.indexOf(o) === -1);
//     const unique = unique1.concat(unique2);
//     return unique;
// }
// function arr2bin(arr){
//     return arr.reduce((sum, x) => sum + (typeof x == 'number' ? x : 0), 0).toString(2);
// }
// function reverse(number) {
//     let revNumber = 0;
//     while (number > 0) {
//         revNumber = (revNumber * 10) + (number % 10);
//         number = Math.floor(number / 10);
//     }
//     return revNumber;
// }
// function digits(num){
//     let sum = [];
//     let arr = num.toString().split('').map(digit => Number(digit));
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i + 1; j < arr.length; j++){
//             sum.push(arr[i] + arr[j]);
//         }
//     }
//     return sum;
// }
// function DNAtoRNA(dna) {
//     // create a function which returns an RNA sequence from the given DNA sequence
//         const a = dna.split('');
//         console.log(a);
//        return  a.map(item => item === 'T' ? 'U' : item).join('');
// }
// function disemvowel(str) {
//    return str.replace(/[aeiou]/gi, "");
// }
// console.log(disemvowel('DFKJNFKJHWEFEWAAAAA'));
// function disemvowel(str) {
//    return str.replace(/[,.]?0+$/, '')
// }
//console.log("0010400".replace(/^0+|0$/g, ''))
// console.log(disemvowel('5550000'));
// function getDifferences(a, b) {
// return a.filter(function (v) { return b.indexOf(v) === -1 });
//     let unique1 = a.filter((o) => b.indexOf(o) === -1);
//     let unique2 = b.filter((o) => a.indexOf(o) === -1);
//     const unique = unique1.concat(unique2);
//     return unique;
// }
// function maxSequence(arr) {
//     let curr_max = 0,
//         max_so_far = 0;
//     for(let i = 0; i < arr.length; i++){
//         curr_max = Math.max(0, curr_max + arr[i]);
//         max_so_far = Math.max(curr_max, max_so_far);
//     }
//     return max_so_far;
//     let max = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let sum = 0;
//         for (let j = i; j < arr.length; j++) {
//             sum += arr[j];
//             if (sum > max) {
//                 max = sum;
//             }
//         }
//     }
//     return max;
// }
// function evenLast(numbers) {
//     // Good luck
//     let d = numbers.slice(-1);
//     return numbers.reduce((a, b, i) => i % 2 === 0 ? a + b * d : a, 0);
// }
// function gimme(inputArray) {
//     return inputArray.indexOf(inputArray.slice(0).sort(function(a,b) { return a-b; })[1]);
// }
// function removeLetter(string, letter) {
//     // return string = string.slice(0, letter) + string.slice(letter+1);
//     // return string.substring(0, letter) +  string.substring(letter+1);
//     // return string.replace(new RegExp('ReGeX'+ letter +'ReGeX',), "");
//     return string.replace(new RegExp(`[${letter}]`, "g"), "");
//
// }
// function getLargestNumbers(numbers) {
//     // write code here
//    return  numbers.sort((a,b) => b - a).slice(0,5);
// }

// function getUniqNames(people) {
//     let arrNames = people.map(item =>
//         item = item.firstName
//     ).filter( (item,i,arr) => arr.indexOf(item) === i);
//     return arrNames;
// }
// function getSumOfRange(start, end) {
//     // write code here
//     let arr = [];
//     let sum = null;
//     for(let i=start; i <= end; i++){
//         arr.push(i);
//     }
//     return  arr.reduce((acc, i) => acc + i);
//
// }
// function getPersistence(number) {
//     const str = number.toString();
//     if (str.length === 1) {
//         return 0;
//     }
//     const nextNum = str.split('').reduce((a, b) => a * b, 1);
//     return 1 + getPersistence(nextNum);
// }
// function getPersistence(num) {
//     let res = 0;
//     num = num.toString();
//     while (num.length > 1) {
//         res++;
//         num = num.split('').map(Number).reduce((acc, el) => acc * el).toString();
//     }
//     return res;
// }
// console.log(getPersistence(999));
// function calculateCount(amount) {
//     let currency = [500,200,100,50,20,10];
//     let result = [];
//     if(amount > 0 && amount % 2 === 0){
//         for(let i=0; i < currency.length; i++){
//             let note = currency[i];
//             while (amount - note >= 0){
//                 amount -= note;
//                 result.push(note);
//             }
//         }
//     }else {
//         return -1;
//     }
//     return result.length;
// }

// let classNames = ['header','menu','menu-item','menu-item','footer','menu','link','link','link','link'];
// function className(classNames){
//     let classNameCount = {};
//     let arrUniq = [];
//     for(let i = 0; i < classNames.length; i++){
//         if(classNameCount[classNames[i]]){
//             classNameCount[classNames[i]] += 1;
//         }else{
//             classNameCount[classNames[i]] = 1;
//             arrUniq.push(classNames[i]);
//         }
//     }
//     let arr = arrUniq.sort((a,b) => classNameCount[b] - classNameCount[a]);
//     return arr;
// }
// let input = [1,2,3,4,5,6,7,8,9,10];
// function shuffle(arr){
//     for(let i = arr.length - 1; i > 0; i--){
//         let temp = arr[i];
//         let rand = Math.floor(Math.random() * (i + 1));
//         arr[i] = arr[rand];
//         arr[rand] = temp;
//     }
//     return arr;
// }
// const input = [4,1,2,1,2,4,55];
// function singleNumber1(nums){
//     let uniq = Array.from(new Set(nums));
//     let reduceSum = (s,i) => s + i
//     let uniqSum = uniq.reduce(reduceSum);
//     let numSum = nums.reduce(reduceSum);
//     return uniqSum * 2 - numSum;
// }
// console.log(singleNumber1(input));
// function fib(n) {
//     if (n <= 1) {
//         return n;
//     } else {
//         return fib(n - 1) + fib(n - 2);
//     }
// }
// function anagram(a,b){
//     return [...a.toLowerCase()].sort().join() === [...b.toLowerCase()].sort().join();
// }
// function findVowels(str){
//     let count = 0;
//     const vowels = ['a','e','i','o','u'];
//     for(let char of str.toLowerCase()){
//         if(vowels.includes(char)){
//             count++;
//         }
//     }
//     return count;
// <----2---->
//     const matched = str.match(/[aeiou]/gi);
//     return matched ? matched.length : 0;
// }
// const arr1 = [1,1,2];
// const arr2 = [0,0,1,1,1,1,1,2,2,2,3,4];
// function removeDuplicates(nums){
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] === nums[i-1]){
//             nums.splice(i,1);
//             i--;
//         }
//     }
//     return nums.length;
// }
// function pattern(n){
//  var result = '1';
//   for (var i = 2; i <= n; i++){
//     result += '\n1' + '*'.repeat(i-1) + i
//   }
//   return result
// }
// function highestRank(arr){
//   return arr.sort((a,b)=>arr.filter(i=>i===b).length - arr.filter(i=>i===a).length)[0];
// }
// function sumOfTwo(arr, target) {
//     const result = [];
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i+1; j < arr.length; j++){
//             if(arr[i] + arr[j] === target){
//                 result.push(i);
//                 result.push(j);
//             }
//         }
//     }
//     return result;
// }
// function isPrime(num){
//     let max = Math.sqrt(num);
//     for(let i = 2; i <= max; i++){
//         if(num % i === 0){
//             return false;
//         }
//     }
//     return num > 1;
// }
// function getPrimes(num){
//     const primes = [];
//     for(let i = 0; i <= num; i++){
//         if(isPrime(i)){
//             primes.push(i);
//         }
//     }
//     return primes;
// }
// function getPrimes(num){
//     const seive = [];
//     const primes = [];
//     for(let i = 2; i <= num; i++){
//         if(!seive[i]){
//             primes.push(i);
//             for(let j = i^2; j <= num; j += i){
//                 seive[j] = true;
//             }
//         }
//     }
//     return primes;
// }

// const arr = [1,1,1,1,4,5,6];
//
// let res = arr.filter((el,index) => {
//     return index === arr.indexOf(el)
// });
// let uniq = arr.reduce((acc,el) => { return  acc.includes(el) ? acc : [...acc,el] },[]);
// console.log(uniq);

// const items = ['vasia','petia','ivan','den','igor'];
// const nameObj = items.reduce((acc, el,i) => {
//     if(acc[i]){
//         acc[el] += i
//     }else{
//         acc[el] = i
//     }
//     return acc;
// },{});
// console.log(nameObj);

// function removeVowelKeys(obj) {
//     for (let key in { ...obj }) {
//         if (
//             key[0] === "a" ||
//             key[0] === "A" ||
//             key[0] === "u" ||
//             key[0] === "U" ||
//             key[0] === "i" ||
//             key[0] === "I" ||
//             key[0] === "o" ||
//             key[0] === "O" ||
//             key[0] === "e" ||
//             key[0] === "E" ||
//             key[0] === "y" ||
//             key[0] === "Y"
//         ) {
//             delete obj[key];
//         }
//     }
//     return obj;
//}
// function toInitials(name){
//     return name.split(' ').map(el => el.slice(0,1).toUpperCase() + '.').join('');
// }
// console.log(toInitials('Sasha Chernukha'))
// function accum(str){
//     return str.toUpperCase().split('').map((el,i) => el += el.repeat(i).toLowerCase()).join('-')
// }
// function capitals(word){
//     let res = [];
//     word.split('').forEach(function(letter,index){
//         if(letter === letter.toUpperCase()) {res.push(index)};
//     })
//     return res;
// }
// console.log(capitals('HowAreYou'))

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count === '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function(){
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');

            if (a != null && b != null && a !== '' && b !== '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function  () {
        if (personalMovieDB.private === false) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let question = prompt(`Ваш любимый жанр под номером ${i}`);
            if(question === null || question == ''){
                question;
                i--;
            }else {
                personalMovieDB.genres.push(question);
            }
        }
       personalMovieDB.genres.forEach((el,i) => {
            console.log(`Любимый жанр ${i+1} - это ${el}`);
        });
    },
    toggleVisibleMyDB: function () {
        if(personalMovieDB.private){
            personalMovieDB.private = false;
        }else{
            personalMovieDB.private = true;
        }
    }
};


personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
console.log(personalMovieDB);




