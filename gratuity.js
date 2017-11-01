var billAmount = Math.floor(Math.random() * 100) + 1;

function gratuity(dollarAmount) {
  return dollarAmount * 0.2;
}

function totalWithGrat(dollarAmount) {
  return gratuity(dollarAmount) + dollarAmount;
}

function printTotalWithGrat(){
console.log("Your total including gratuity is " + totalWithGrat(billAmount).toFixed(2));
}

printTotalWithGrat();
