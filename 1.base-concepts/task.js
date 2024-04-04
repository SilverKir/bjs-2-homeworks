"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  const discriminant = (Math.pow(b,2)-4*a*c);
  if (discriminant===0){
    arr[0]=(-b/(2*a));
  } else if (discriminant>0){
    arr[0]=((-b + Math.sqrt(discriminant) )/(2*a));
    arr[1]=((-b - Math.sqrt(discriminant) )/(2*a));
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthPercent=percent/1200;
  let result = countMonths*(amount-contribution) * (monthPercent + (monthPercent / ((Math.pow((1 + monthPercent),countMonths)) - 1)));
  return +result.toFixed(2);
}