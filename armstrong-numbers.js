import { forStatement } from "@babel/types";

//
// This is only a SKELETON file for the 'Armstrong numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

  export const validate = (n) => {
  const digits = [...n.toString()];
  const power = digits.length;
  let result = 0;

  digits.forEach((digit) =>{
    result += digit ** power;  
  })
  if (result === n){
    return true;
  }else return false;
};

