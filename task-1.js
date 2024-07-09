"use strict";

function makeTransaction(quantity, pricePerDroid, customerCredits) {
  const totalPrice = quantity * pricePerDroid; //def

  if (totalPrice > customerCredits) {
    return "Insufficient funds!";
  } else {
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`; //info
  }
}
