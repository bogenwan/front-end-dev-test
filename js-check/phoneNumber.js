//
// Phone Number
// Finish the rest of 'phoneNumber()' function to satisfy the test
// file located @ /test/main_test.spec.js
//
// To pass, your function should:
// remove parenthesis, spaces, and hyphens as in "(321) 321-4321"
// remove dots as in "321.321.4321"

// function to check number within range of 2-9
const checkNumRange = (num) => {
  return num >=2 && num <= 9 ? true : false;
};

// function to check area code and exchange code
const checkAreaNExchangeCode = (phoneNum) => {
  let areaCode = Number(phoneNum.charAt(0));
  let exchangeCode = Number(phoneNum.charAt(3));
  return checkNumRange(areaCode) && checkNumRange(exchangeCode) ? true : false;
};

const phoneNumber = (pNum) => {
  // regex to remove all '()', '.', '-' and white spaces
  let cleanNum = pNum.replace(/[()-. ]/g, '');
  if (cleanNum.length > 11) {
    cleanNum = cleanNum.substring(1);
  }
  if (isNaN(cleanNum)) {
    return null;
  }
  if (cleanNum.length <= 9) {
    return null;
  } else if (cleanNum.length === 11) {
    if (Number(cleanNum.charAt(0)) !== 1) {
      return null;
    } else {
      cleanNum = cleanNum.substring(1);
      return checkAreaNExchangeCode(cleanNum) ? cleanNum : null;
    }
  } else if (cleanNum.length > 11) {
    return null;
  }

  return checkAreaNExchangeCode(cleanNum) ? cleanNum : null;
};

module.exports = phoneNumber;

// Note: It's not neccessary to have all code into the 'phoneNumber'
// function. Feel free to make as many functions as you see
// fit. Just be sure to leave phoneNumber as an exported
// method as you found it
