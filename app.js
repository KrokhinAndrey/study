/*const budget = 200000;
const bmwxPrice = 100000;

console.log(`Я хочу купить ${budget >=bmwxPrice ? 'БМВ': 'Ничего'}`)
*/

/*
const res = prompt('Сколько будет 7+ или -15 ?');
switch (true){
    case res === 'Я не робот':
    case Number(res) === 22:
    case Number(res) === -8:
        console.log('Успех');
        break;
    default:
        console.log('Вы робот');
}
*/

/*
const res = prompt('Сколько будет 7+ или -15 ?');

if (res === 'Я не робот'){
    console.log('Успех');
} else {
    const resNum = Number(res);
    switch(resNum){
        case 22:
        case -8:
            console.log('Успех');
            break;
        default:
            console.log('Вы робот!')
    }
}
*/

// const balance = 1001;
// const bonusBalance = 100;
// isBanned = false;
// isExist = false;
// isSelling = true;

// const canBuy = (balance > 1000 || bonusBalance > 100) && !isBanned && !isExist && isSelling;
// console.log(`Может купить ${canBuy ? 'Да': 'Нет'}`);

// const age = 20;
// const haveJob = true;
// const money = 2000;
// const priceMB = 2000;


// function giveCredit(age, haveJob){
//     switch(true){
//         case age > 24 && haveJob:
//             return 500;
//         case age > 24:
//             return 100;
//         default:
//             return 0;
//     }
// }

// function canBuy(productPrice, age, haveJob, money){
//     const creditMoney = giveCredit(age, haveJob);
//     const allMoney = creditMoney + money;
//     return allMoney >= productPrice ? true: false;
// }


// console.log(`Результат ${canBuy(2000,25,false,1700)}`);

// const tasks = ['Задача 1'];

// function addTask(newTask){
//     tasks.push(newTask);
//     return tasks;
// }

// function deleteTask(newTask){
//     const index = tasks.indexOf(newTask);
//     if (index === -1){
//         return tasks;
//     }
//     tasks.splice(index,1);
//     return tasks;
// }

// function endToBeginning(newTask){
//     const res = deleteTask(newTask);
//     if (res) {
//         tasks.unshift(newTask);
//     }
//     return tasks;
// }

// console.log(addTask('Задача 2'));
// //console.log(deleteTask('Задача 2'));
// console.log(endToBeginning('Задача 2'));

// const url = 'htpps://purpleschool.ru/course/javascript';

// function getUrlParts(url) {
//     const [protocol, _, host, ...path] = url.split('/');
//     console.log(protocol, _, host, path);
//     console.log(protocol[-1]);
//     console.log(host);
//     console.log(path.join('/'));
// }
// getUrlParts(url);

// l = [1,2,'aasf','1','123',123]

// function filter_list(l){
//     const newList = [];
//     for (num of l){
//         if (typeof(num) === 'number'){
//             newList.push(num);
//         }
//     }
//     return newList;
// }

// console.log(filter_list(l));

// const filterArray = l => l.filter(el => typeof el === 'number');
// console.log(filterArray(l));



// const s = ("turns out random test cases are easier than writing out basic ones");

// function findShort(s){
//     const sArray = s.split(' ');
//     // const rArray = sArray.reduce(function(oldEL,newEl) {
//     const rArray = sArray.reduce((oldEL,newEl) => oldEL.length <= newEl.length ? oldEL : newEl);
//     return rArray.length;
// }

// console.log(findShort(s));

// var numbers = [1,2,3,4,5];

// function positiveNum(numbers) {
//     var sum = 0;
//     numbers.forEach(num => num > 0 ? sum += num: 0);
//     return sum;
// }
// console.log(positiveNum(numbers)); // 50

// function generateShape(integer){
//     let s = '';
//     for (i = 0; i < integer; i++) {
//        for (y = 0; y < integer; y++) {
//             s += '+';
//        }
//        s += '\n';
//     }
//     return s.trim();

// }

// console.log(generateShape(5));

// function generateShape2(integer){
//     let s = '+';
//     let m = '';
//     for (i = 0; i < integer; i++) {
//         m += s.repeat(integer) + '\n';
//     }
//     return m.trim();
// }

// console.log(generateShape2(5));

// const str = 'abra cada bra iiiii uuu d';
// const mArray = ['a','e','i','o','u']

// function getCount(str) {
//     let n = 0;
//     for (i = 0; i < str.length; i++){
//         mArray.forEach(num => num === str[i] ? n++ : 0);
//     }
//     return n;
// }
// console.log(getCount(str));

// arr = [6,2,3,4,5];

// function min(arr, toReturn) {
//     const mNum = arr.reduce((oldEl, newEl) => oldEl < newEl ? oldEl : newEl);
//     if (toReturn === 'index'){
//         return arr.indexOf(mNum);
//     } else {
//         return mNum;
//     }
//   }

//   console.log(min(arr, 'index'));


// function digPow(n, p){
//     const stringN = String(n);
//     let sum = 0;
//     for (i = p; i < p + stringN.length; i++){
//         sum += stringN[i - p] ** i;
//     }
//     // if (sum % n > 0) {
//     //     return -1;
//     // } else {
//     //     return sum / n;
//     // }
//     return sum % n > 0 ? -1 : sum / n;
//   }

// console.log(digPow(46288, 3));


// function arrayDiff(a, b) {
//     b.forEach((itemB, index) => {
//         while (a.indexOf(itemB) >= 0){
//             a.splice(a.indexOf(itemB), 1);
//         }
//     });
//     return a;
// }

// console.log(arrayDiff([1,2,3], [1,2]));


let capitals = function (word) {
    const mWord = word.split('');
    let mArray = [];

    mWord.forEach((item, index) => item.toUpperCase() === item ? mArray.push(index) : 0);

    // for (i = 0; i < word.length; i++) {
    //     if (word[i].toUpperCase() === word[i]){
    //         mArray.push(word.indexOf(word[i]));
    //     }
    // };
	return mArray;
};

console.log(capitals('CodEWaRs'));