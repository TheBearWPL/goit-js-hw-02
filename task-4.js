"use strict";

function getShippingCost(country) {
  switch (country) {
    case "china":
      return "Shipping to China will cost 100 credits";
    case "chile":
      return "Shipping to Chile will cost 250 credits";
    case "australia":
      return "Shipping to Australia will cost 170 credits";
    case "jamaica":
      return "Shipping to Jamaica will cost 120 credits";
    else
      return "Sorry, there is no delivery to your country";
  }
}
