// const age = 20;
// const haveJob = true;
// const money = 2000;
// const priceMB = 2000;


function giveCredit(age, haveJob){
    switch(true){
        case age > 24 && haveJob:
            return 500;
        case age > 24:
            return 100;
        default:
            return 0;
    }
}

function canBuy(productPrice, age, haveJob, money){
    const creditMoney = giveCredit(age, haveJob);
    const allMoney = creditMoney + money;
    return allMoney >= productPrice ? true: false;
}


console.log(`Результат ${canBuy(2000,25,false,1700)}`);
c