//
// This is only a SKELETON file for the 'Armstrong numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const validate = (n) => {
  const digit = n.toString().length;
  if (digit == 1){
    if (n ** digit === n){
     return true
    }
  }else if (digit == 2) {
    if (n ** digit + n ** digit === n){
      return true
    }else return false
  }
};
