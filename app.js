const contribution = 11000;
const percent = 0.07;
const priceHome = 13500;
const term = 24;

const result = contribution * (1 + percent / 12) ** term;  

if (result >= priceHome) {
    console.log(`WIN. I have ${result}`);
} else {
    console.log(`LOSE. You don't have enough ${(result - priceHome)*(-1)} `);
}