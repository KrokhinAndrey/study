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

const balance = 1001;
const bonusBalance = 100;
isBanned = false;
isExist = false;
isSelling = true;

const canBuy = (balance > 1000 || bonusBalance > 100) && !isBanned && !isExist && isSelling;
console.log(`Может купить ${canBuy ? 'Да': 'Нет'}`);
