
const isNumber = (value) => {
 if (typeof value !== 'number' || Number.isNaN(value)){
  return false;
 }
 return true;
};

//add two numbers.

 const add = (a, b) => {
 if (!isNumber(a) || !isNumber(b)) {
  throw new Error('Both arguments must be valid numbers');
 }
 return a + b;
};

//multiply two numbers
const multiply = (a , b) => {
 if (!isNumber(a) || isNumber(b)) {
  throw new Error ('both argument must be a valid numbers');
 };
  return a * b;
}

//Higher-order function ...

const withNumberValidtion = (fn) => {
 return (...args) => {
  if (!args.every(isNumber)) {
   throw new Error('withNumberValidation: all arguments must be a number')};
   return fn(...args);
 };
 }

 // function that returns another funcion

 const creatMultplier = (factor) => {
  if (!isNumber(factor)){
   throw new Error('Multiplier function:must be a valid number');
  }
  return (value) => {
   if (!isNumber(value)){
    throw new Error('Multiplier function : must be a valid number');
   }
   return value * factor;
  }
 }
 